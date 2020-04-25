import MovingObject from './MovingObject'

export default class Parent extends MovingObject {
  constructor(pos, radius = 13, world, lives, color = '#7280f6') {
    super(pos, radius, world, color)
    this.children = []
    this.childCount = 0
    this.lives = lives
    this.currPredCols = []
  }

  setChildCount = (count) => {
    this.childCount = count
  }

  setCurrPredCols = (currPredCols) => {
    this.currPredCols = currPredCols
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

  checkCollisionWithPredator = (predator) => {
    const collided = this.checkCollision(predator),
      colliding = this.currPredCols.includes(predator)
    /* if collided and first contact,
      add predator to the current collisions with predator,
      call collide with predator (decrement lives)
    */
    if (collided && !colliding) {
      const currPredCols = this.currPredCols.slice()
      currPredCols.push(predator)
      this.setCurrPredCols(currPredCols)

      this.collideWithPredator()
    }

    /* if was colliding and stopped colliding, remove predator from current collisions */
    if (!collided && this.checkCollision(predator, 5) && colliding) {
      const currPredCols = this.currPredCols.slice(),
        index = currPredCols.indexOf(predator)
      currPredCols.splice(index, 1)
      this.setCurrPredCols(currPredCols)
    }
  }

  collideWithPredator = () => {
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
