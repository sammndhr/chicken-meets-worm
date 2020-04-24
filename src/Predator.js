import MovingObject from './MovingObject'

export default class Predator extends MovingObject {
  constructor(pos, radius = 10, world, color = '#f67280') {
    super(pos, radius, world, color)
  }
}
