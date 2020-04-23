export default class MovingObject {
  constructor(pos, radius = 10, world, color = '#f67280') {
    this.pos = pos
    this.radius = radius
    this.world = world
    this.color = color
    this.draw = this.draw.bind(this)
  }

  setPos(pos) {
    this.pos = pos
  }

  checkOutOfBounds(pos) {
    const { top, right, bottom, left } = this.world.bounds,
      { x, y } = pos,
      radius = this.radius
    // console.log('left', x - radius, left, x - radius < left)
    // console.log('right', x + radius, right, x + radius > right)
    // console.log('top', y - radius, top, y - radius < top)
    // console.log('bottom', y + radius, bottom, y + radius > bottom)
    if (x - radius < left) return true
    if (x + radius > right) return true
    if (y - radius < top) return true
    if (y + radius > bottom) return true

    return false
  }

  clampAndSetPos(pos) {
    const { top, right, bottom, left } = this.world.bounds,
      radius = this.radius
    let { x, y } = pos

    if (x - radius < left) x = x + radius
    if (x + radius > right) x = x - radius
    if (y - radius < top) y = y + radius
    if (y + radius > bottom) y = y - radius
    this.setPos({ x, y })
    return { x, y }
  }

  drawBall({ x, y }) {
    const canvas = this.world.canvas,
      ctx = canvas.getContext('2d')

    ctx.beginPath()
    ctx.arc(x, y, this.radius, 0, Math.PI * 2)
    ctx.fillStyle = this.color
    ctx.fill()
    ctx.closePath()
  }

  draw() {
    this.clampAndSetPos(this.pos)
    this.drawBall(this.pos)
  }
}
