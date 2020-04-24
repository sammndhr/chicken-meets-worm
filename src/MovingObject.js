import { getRandomInt } from './utils'

export default class MovingObject {
  constructor(pos, radius = 10, world, color = '#7280f6') {
    this.pos = pos
    this.radius = radius
    this.world = world
    this.color = color
    this.dx = 2
    this.dy = 2
    this.currDir = [0, 0]
    this.possibleDirections = [
      // 0 values off slightly so objects doesn't stick to edges.
      [this.dx, 0.2],
      [-this.dx, 0.3],
      [0.15, this.dy],
      [0.23, -this.dy],
      [this.dx, this.dy],
      [-this.dx, this.dy],
      [this.dx, -this.dy],
      [-this.dx, -this.dy],
    ]
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

    const index = getRandomInt(8)

    this.setCurrDir(this.possibleDirections[index])
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

  /** Draw the object on canvas */
  draw = (ctx) => {
    const { x, y } = this.pos
    ctx.beginPath()
    ctx.arc(x, y, this.radius, 0, Math.PI * 2)
    ctx.fillStyle = this.color
    ctx.fill()
    ctx.closePath()
  }

  move = () => {
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
