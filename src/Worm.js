import MovingObject from './MovingObject'

const r = 10,
  c = '#936344',
  v = { dx: 2, dy: 2 }

export default class Child extends MovingObject {
  constructor(pos, radius = r, world, vel = v, color = c) {
    super(pos, radius, world, vel, color)
    this.moves = this.moves.bind(this)
  }

  moves(game) {
    let { x, y } = this.pos,
      pos = { x: x + this.currDir[0], y: y + this.currDir[1] }

    if (this.checkOutOfBounds(pos)) {
      game.destroyWorm(this)
    }

    this.setPos(pos)
  }
}
