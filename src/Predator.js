import MovingObject from './MovingObject'

const r = 10,
  c = '#f67280',
  v = { dx: 1.25, dy: 1.25 }

export default class Predator extends MovingObject {
  constructor(pos, radius = r, world, vel = v, color = c) {
    super(pos, radius, world, vel, color)
  }
}
