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
  }

  setIndependence = (independence) => {
    this.isIndependent = independence
  }

  collideWithParent = (obj) => {
    obj.appendChild(this)
    this.setIndependence(false)
  }

  move() {
    if (this.isIndependent) super.move()
    else {
      const { x, y } = this.parent.pos,
        offset = (this.parent.radius + this.radius + 5) * (this.chainPos + 1)
      this.setPos({ x: x, y: y + offset })
    }
  }
}
