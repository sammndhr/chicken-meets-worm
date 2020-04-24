import MovingObject from './MovingObject'

export default class Child extends MovingObject {
  constructor(pos, radius = 10, world, color = '#f6e872') {
    super(pos, radius, world, color)
  }
}
