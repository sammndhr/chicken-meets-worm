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
    super(pos, radius, world, vel, color)
    this.independence = true
    this.chainPos = null
    this.parent = null
    this.nextChild = null
    this.posCache = []
    this.moves = this.moves.bind(this)
    this.hitsPredator = this.hitsPredator.bind(this)
    this.draw = this.draw.bind(this)
    this.sprite = sprite
    this.size = size
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

  draw(ctx) {
    const { x, y } = this.pos
    ctx.drawImage(this.sprite, x, y, this.size.width, this.size.height)
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
      const easing = Math.max(1 - this.chainPos * 0.13, 0.1),
        r = this.radius,
        offset = 2 * (r + 1) * this.chainPos + (this.parent.radius - r),
        nextChild = this.nextChild

      super.movesWithCursor(pos, easing, offset)

      if (nextChild)
        nextChild.moves(this.posCache.length ? this.posCache[0] : pos)
    }
  }
}
