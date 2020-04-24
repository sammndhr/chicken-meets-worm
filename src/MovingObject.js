import { getRandomInt, inRange } from './utils'

const r = 10,
  c = '#7280f6',
  v = { dx: 1, dy: 1 }

export default class MovingObject {
  constructor(pos, radius = r, world, color = c, vel = v) {
    this.pos = pos
    this.radius = radius
    this.world = world
    this.color = color
    this.vel = vel
    this.currDir = [0, 0]
    this.move = this.move.bind(this)
  }

  setPos = (pos) => {
    this.pos = pos
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
    const { top, right, bottom, left } = this.world.bounds,
      { x, y } = pos,
      r = this.radius

    if (x - r < left) return true
    if (x + r > right) return true
    if (y - r < top) return true
    if (y + r > bottom) return true

    return false
  }
  /** Bounce object back if it hits the wall */
  bounceBack = (pos) => {
    const { bounds } = this.world,
      { top, right, bottom, left } = bounds,
      r = this.radius
    let { x, y } = pos,
      [dx, dy] = this.currDir

    if (x + dx > right - r || x + dx < left + r) {
      this.setCurrDir([-dx, dy])
    }

    if (y + dy > bottom - r || y + dy < top + r) {
      this.setCurrDir([dx, -dy])
    }
  }

  checkCollision(obj) {
    // Note: obj.constructor.name won't work with IE and there are some caveats. More info --> https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Function/name
    const instanceOf = obj.constructor.name,
      pPos = obj.pos,
      pR = obj.radius,
      { x, y } = this.pos,
      rangeX = [pPos.x - pR, pPos.x + pR],
      rangeY = [pPos.y - pR, pPos.y + pR],
      collided =
        (inRange(x - this.radius, ...rangeX) ||
          inRange(x + this.radius, ...rangeX)) &&
        (inRange(y - this.radius, ...rangeY) ||
          inRange(y + this.radius, ...rangeY))

    if (!collided) return

    if (instanceOf === 'Parent') {
      this.collideWithParent(obj)
    } else if (instanceOf === 'Predator') {
      this.collideWithPredator(obj)
    } else if (instanceOf === 'Child') {
      this.collideWithChild(obj)
    }
  }

  collideWithParent(obj) {}

  collideWithPredator(obj) {}

  collideWithChild(obj) {}

  /** Draw the object on canvas */
  draw = (ctx) => {
    const { x, y } = this.pos
    ctx.beginPath()
    ctx.arc(x, y, this.radius, 0, Math.PI * 2)
    ctx.fillStyle = this.color
    ctx.fill()
    ctx.closePath()
  }
  // Can't use @babel/plugin-proposal-class-properties. super.move() doesn't work in subclasses.
  move() {
    let { x, y } = this.pos,
      pos = { x: x + this.currDir[0], y: y + this.currDir[1] }

    // this.bounceBack(pos)
    // Make objects bounce in random direction instead of bouncing back.
    while (this.checkOutOfBounds(pos)) {
      this.setRandomDir()
      pos = { x: x + this.currDir[0], y: y + this.currDir[1] }
    }

    this.setPos(pos)
  }
}
