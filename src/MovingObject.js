import { getRandomInt, inRange } from './utils'

const r = 10,
  c = '#7280f6',
  v = { dx: 1, dy: 1 }

export default class MovingObject {
  constructor(pos, radius = r, world, vel = v, color = c) {
    this.pos = pos
    this.radius = radius
    this.world = world
    this.color = color
    this.vel = vel
    this.currDir = [0, 0]
    this.posCache = []

    this.draw = this.draw.bind(this)
    this.movesWithCursor = this.movesWithCursor.bind(this)
    this.moves = this.moves.bind(this)
    this.checkInRange = this.checkInRange.bind(this)
    this.hitsParent = this.hitsParent.bind(this)
    this.hitsPredator = this.hitsPredator.bind(this)
    this.hitsChild = this.hitsChild.bind(this)
  }

  setPos = (pos) => {
    this.pos = pos
  }

  setPosCache = (posCache) => {
    this.posCache = posCache
  }

  setCurrDir = (dir) => {
    this.currDir = dir
  }

  setRandomDir = () => {
    /* 
    8 possible directions.
    Vertical and horizontal: 
        ↑      
        ↑
   ←  ←   →  →  
        ↓
        ↓ 
    Diagonals:
    ↖      ↗
      ↖  ↗
      ↙  ↘ 
    ↙      ↘
    */

    const { dx, dy } = this.vel
    const index = getRandomInt(8)
    const possibleDirections = [
      // 0 values off slightly so objects doesn't stick to edges.
      [dx, 0.2],
      [-dx, 0.3],
      [0.15, dy],
      [0.23, -dy],
      [dx, dy],
      [-dx, dy],
      [dx, -dy],
      [-dx, -dy],
    ]

    this.setCurrDir(possibleDirections[index])
  }

  checkOutOfBounds = (pos) => {
    return this.world.checkOutOfBounds(pos, this.radius)
  }

  getRandomPos = () => {
    return this.world.getRandomPos(this.radius)
  }
  /** Bounce object back if it hits the wall */
  bounceBack = (pos) => {
    const { bounds } = this.world,
      { top, right, bottom, left } = bounds,
      r = this.radius

    let { x, y } = pos,
      [dx, dy] = this.currDir

    if (x + r > right || x - r < left) {
      this.setCurrDir([-dx, dy])
    }

    if (y - r < top || y + r > bottom) {
      this.setCurrDir([dx, -dy])
    }
    //objs get stuck if parallel to walls and out of bounds
    let nPos = { x: x + this.currDir[0], y: y + this.currDir[1] }
    if (this.checkOutOfBounds(nPos)) this.setRandomDir()
  }

  checkInRange(obj, cushion = 0) {
    // Note: obj.constructor.name won't work with IE and there are some caveats. More info --> https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Function/name

    const oPos = obj.pos,
      oR = obj.radius + cushion,
      { x, y } = this.pos,
      rangeX = [oPos.x - oR, oPos.x + oR],
      rangeY = [oPos.y - oR, oPos.y + oR],
      r = this.radius + cushion

    const withinRange =
      (inRange(x - r, ...rangeX) || inRange(x + r, ...rangeX)) &&
      (inRange(y - r, ...rangeY) || inRange(y + r, ...rangeY))

    return withinRange
  }

  // Can't use @babel/plugin-proposal-class-properties. super.move() doesn't work in subclasses.
  hitsParent(obj) {}

  hitsPredator(obj) {}

  hitsChild(obj) {}

  /** Draw the object on canvas */
  draw(ctx) {
    const { x, y } = this.pos
    ctx.beginPath()
    ctx.arc(x, y, this.radius, 0, Math.PI * 2)
    ctx.fillStyle = this.color
    ctx.fill()
    ctx.closePath()
  }

  clipPos = ({ x, y }) => {
    const { top, right, bottom, left } = this.world.bounds,
      r = this.radius

    const clippedX = x > left + r && x < right - r ? x : this.pos.x,
      clippedY = y > top + r && y < bottom - r ? y : this.pos.y

    return { x: clippedX, y: clippedY }
  }

  movesWithCursor(pos, easing, offset = 0) {
    const { offsets } = this.world
    let { x, y } = pos

    // Offsets to account for margin, paddings around game world.
    const offsetL = offsets.left,
      offsetT = offsets.top,
      relativeX = x - offsetL,
      relativeY = y - offsetT

    let xDiff = relativeX - this.pos.x,
      yDiff = relativeY - this.pos.y

    // Offset children so they don't all overlap the parent when stationary or slow moving.
    if (yDiff <= 0) yDiff += offset
    //More info on tweening, animation --> https://spicyyoghurt.com/tutorials/html5-javascript-game-development/create-a-smooth-canvas-animation https://stackoverflow.com/a/37973577/11279811
    const velX = xDiff * easing,
      velY = yDiff * easing

    this.velocity = { x: velX, y: velY }

    x = this.pos.x + velX
    y = this.pos.y + velY

    //Don't let objects pass edge
    const clippedPos = this.clipPos({ x, y })

    this.setPos(clippedPos)

    // Cache last 5 positions. Makes children's movement more natural.
    const posCache = this.posCache
    if (posCache.length > 4) posCache.shift()
    posCache.push(pos)
    this.setPosCache(posCache)
  }

  moves() {
    let { x, y } = this.pos,
      pos = { x: x + this.currDir[0], y: y + this.currDir[1] }

    if (this.checkOutOfBounds(pos)) this.bounceBack(pos)

    this.setPos(pos)
  }
}
