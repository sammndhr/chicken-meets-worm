import MovingObject from './MovingObject'
import { getRandomInt } from './utils'

export default class Predator extends MovingObject {
  constructor(pos, radius = 10, world, color = '#f67280') {
    super(pos, radius, world, color)
    this.dx = 2
    this.dy = 2
    this.currDir = [0, 0]
  }

  setCurrDir = (dir) => {
    this.currDir = dir
  }

  getRandomDir = () => {
    const dx = this.dx * 1.01,
      dy = this.dy * 1.01
    /* 
    8 possible directions.
    Vertical and horizontal: 
        ↑      
        ↑
   ←  ←   →  →  
        ↓
        ↓ 
    Diagonals:
    ↖      ↗
      ↖  ↗
      ↙  ↘ 
    ↙      ↘
    */

    const possibleDirections = [
      // 0 values off slightly so predator doesn't stick to edges.
      [dx, 0.2],
      [-dx, 0.3],
      [0.15, dy],
      [0.23, -dy],
      [dx, dy],
      [-dx, dy],
      [dx, -dy],
      [-dx, -dy],
    ]

    const direction = possibleDirections[getRandomInt(8)]
    this.setCurrDir(direction)
  }

  move = () => {
    const { bounds } = this.world,
      { top, right, bottom, left } = bounds,
      r = this.radius
    let { x, y } = this.pos,
      pos = { x: x + this.currDir[0], y: y + this.currDir[1] },
      dy = this.dy,
      dx = this.dx

    if (x + dx > right - r || x + dx < left + r) {
      this.getRandomDir()
    }
    if (y + dy > bottom - r || y + dy < top + r) {
      this.getRandomDir()
    }
    while (this.checkOutOfBounds(pos)) {
      this.getRandomDir()
      pos = { x: x + this.currDir[0], y: y + this.currDir[1] }
    }

    this.setPos(pos)
  }
}
