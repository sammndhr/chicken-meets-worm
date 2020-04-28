import MovingObject from './MovingObject'

const r = 10,
  c = '#f67280',
  v = { dx: 1.25, dy: 1.25 }

export default class Predator extends MovingObject {
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
    this.sprite = sprite
    this.size = size
    this.draw = this.draw.bind(this)
  }
  draw(ctx) {
    const { x, y } = this.pos
    ctx.drawImage(this.sprite, x, y, this.size.width, this.size.height)
  }
}
