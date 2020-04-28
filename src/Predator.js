import MovingObject from './MovingObject'

const r = 10,
  c = '#f67280',
  v = { dx: 2, dy: 2 }

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
    super(pos, radius, world, sprite, size, vel, color)
    this.sprite = sprite
    this.size = size
  }
}
