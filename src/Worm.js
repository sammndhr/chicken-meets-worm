import MovingObject from './MovingObject'

const r = 10,
  c = '#936344',
  v = { dx: 2, dy: 2 }

export default class Worm extends MovingObject {
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
    this.moves = this.moves.bind(this)
    // console.log(vel)
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
