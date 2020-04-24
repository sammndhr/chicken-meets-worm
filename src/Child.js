import MovingObject from './MovingObject'

const r = 10,
  c = '#f6e872',
  v = { dx: 1, dy: 1 }

export default class Child extends MovingObject {
  constructor(pos, radius = r, world, color = c, vel = v) {
    super(pos, radius, world, color, vel)
  }
}
