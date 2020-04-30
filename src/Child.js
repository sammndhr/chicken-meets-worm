import MovingObject from './MovingObject'

const r = 10,
  c = '#f6e872',
  v = { dx: 1, dy: 1 }

export default class Child extends MovingObject {
  constructor(
    pos,
    radius = r,
    world,
    sprite,
    size = { width: 0, height: 0 },
    vel = v,
    color = c
  ) {
    super(pos, radius, world, sprite, size, vel, color)
    this.independence = true
    this.chainPos = null
    this.parent = null
    this.nextChild = null
    this.posCache = []
    this.moves = this.moves.bind(this)
    this.hitsPredator = this.hitsPredator.bind(this)
    this.sprite = sprite
    this.size = size
    this.clicking = false
  }

  setClicking = (clicking) => {
    this.clicking = clicking
  }

  setParent = (parent) => {
    this.parent = parent
  }

  setChainPos = (chainPos) => {
    this.chainPos = chainPos
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

  hitsPredator(game) {
    if (this.isIndependent()) game.destroyChild(this)
    else {
      let curr = this.parent.deleteLastChild()
      while (curr && curr !== this) {
        curr = this.parent.deleteLastChild()
      }
    }
  }

  moves(pos) {
    if (this.isIndependent()) super.moves()
    else {
      // Removed easing for now. Maybe add for higher levels. Children take too long long to move.
      // const easing = Math.max(1 - this.chainPos * 0.13, 0.1),
      const easing = 1,
        r = this.radius,
        nextChild = this.nextChild

      let offset
      if (this.clicking) offset = 0
      else offset = 2 * (r + 1) * this.chainPos + (this.parent.radius - r)

      super.movesWithCursor(pos, easing, offset)

      if (nextChild)
        nextChild.moves(this.posCache.length ? this.posCache[0] : pos)
    }
  }
}
