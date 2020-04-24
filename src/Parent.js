import MovingObject from './MovingObject'

export default class Parent extends MovingObject {
  constructor(pos, radius = 13, world, lives, color = '#7280f6') {
    super(pos, radius, world, color)
    this.children = []
    this.childCount = 0
    this.lives = lives
  }

  setCurrCollision = (collision) => {
    this.currCollision = collision
  }

  setChildCount = (count) => {
    this.childCount = count
  }

  incrementChildCount = () => {
    let count = this.childCount
    count++
    this.setChildCount(count)
  }

  appendChild = (child) => {
    // shallow copy
    const children = this.children.slice()
    if (!children.includes(child)) {
      children.push(child)
      this.children = children
      child.chainPos = this.childCount
      child.parent = this
      this.incrementChildCount()
    }
  }

  collideWithPredator = (obj) => {
    this.lives.decrementCount()
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
