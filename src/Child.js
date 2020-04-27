import MovingObject from './MovingObject'

const r = 10,
  c = '#f6e872',
  v = { dx: 1, dy: 1 }

export default class Child extends MovingObject {
  constructor(pos, radius = r, world, color = c, vel = v) {
    super(pos, radius, world, color, vel)
    this.independence = true
    this.chainPos = null
    this.parent = null
    this.nextChild = null
    this.posCache = []
    this.moves = this.moves.bind(this)
  }

  setChainPos = (chainPos) => {
    this.chainPos = chainPos
    console.log()
  }

  setNextChild = (child) => {
    this.nextChild = child
  }

  setIndependence = (independence) => {
    this.independence = independence
  }

  isIndependent = () => {
    return this.independence
  }

  avoidPredator = () => {
    if (this.independence) {
      let { x, y } = this.pos,
        pos = { x: x + this.currDir[0], y: y + this.currDir[1] }

      this.setRandomDir()
      pos = { x: x + this.currDir[0], y: y + this.currDir[1] }

      this.bounceBack(pos)
    }
  }

  moves(pos) {
    if (this.isIndependent()) super.moves()
    else {
      const easing = Math.max(1 - this.chainPos * 0.13, 0.1),
        r = this.radius,
        offset = 2 * r * this.chainPos + (this.parent.radius - r),
        nextChild = this.nextChild

      super.movesWithCursor(pos, easing, offset)

      if (nextChild)
        nextChild.moves(this.posCache.length ? this.posCache[0] : pos)
    }
  }
}
