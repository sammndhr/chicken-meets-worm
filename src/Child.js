import MovingObject from './MovingObject'

const r = 10,
  c = '#f6e872',
  v = { dx: 1, dy: 1 }

export default class Child extends MovingObject {
  constructor(pos, radius = r, world, color = c, vel = v) {
    super(pos, radius, world, color, vel)
    this.isIndependent = true
    this.chainPos = null
    this.parent = null
    this.move = this.move.bind(this)

    this.hitPredator = this.hitPredator.bind(this)
  }

  setIndependence = (independence) => {
    this.isIndependent = independence
  }

  hitPredator() {
    if (this.isIndependent) {
      let { x, y } = this.pos,
        pos = { x: x + this.currDir[0], y: y + this.currDir[1] }

      this.setRandomDir()
      pos = { x: x + this.currDir[0], y: y + this.currDir[1] }
      this.setPos(pos)
    }
  }

  moveWithParent = () => {
    const { x, y } = this.parent.pos,
      offset = (this.parent.radius + this.radius + 5) * this.chainPos
    this.setPos({ x: x, y: y + offset })
  }

  move() {
    if (this.isIndependent) super.move()
    else this.moveWithParent()
  }
}
