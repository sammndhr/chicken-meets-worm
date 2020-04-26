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

  move(pos) {
    if (this.isIndependent) super.move()
    else {
      const easing = Math.max(1 - this.chainPos * 0.13, 0.1)
      super.moveWithCursor(pos, easing)
    }
  }
}
