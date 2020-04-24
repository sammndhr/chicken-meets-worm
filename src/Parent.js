import MovingObject from './MovingObject'

export default class Parent extends MovingObject {
  constructor(pos, radius = 10, world, color = '#7280f6') {
    super(pos, radius, world, color)
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
