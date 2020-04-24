export default class MovingObject {
  constructor(pos, radius = 10, world, color = '#7280f6') {
    this.pos = pos
    this.radius = radius
    this.world = world
    this.color = color
  }

  setPos = (pos) => {
    this.pos = pos
  }

  checkOutOfBounds = (pos) => {
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

  /** Draw the object on canvas */
  draw = (ctx) => {
    const { x, y } = this.pos
    ctx.beginPath()
    ctx.arc(x, y, this.radius, 0, Math.PI * 2)
    ctx.fillStyle = this.color
    ctx.fill()
    ctx.closePath()
  }

  move = (pos) => {
    const { bounds, offsets } = this.world
    let { x, y } = pos

    const { top, right, bottom, left } = bounds,
      r = this.radius,
      offsetL = offsets.left,
      offsetT = offsets.top,
      relativeX = x - offsetL,
      relativeY = y - offsetT

    x = relativeX > left + r && relativeX < right - r ? relativeX : this.pos.x
    y = relativeY > top + r && relativeY < bottom - r ? relativeY : this.pos.y

    this.setPos({ x, y })
  }
}
