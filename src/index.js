import Display from './Display.js'
import MovingObject from './MovingObject.js'
import './style.css'
import World from './World.js'

class Game {
  constructor(display) {
    this.display = display
  }
  init() {
    this.display.createGame()
    this.display.renderGame()
    this.display.renderWorld()

    const world = new World(this.display)
    world.init()

    const radius = 10
    const initialPos = { x: world.size.width / 2, y: world.size.height }
    const parentBird = new MovingObject(initialPos, radius, world)
    window.requestAnimationFrame(parentBird.draw)
  }
}

const game = new Game(new Display({ width: 400, height: 600 }))
game.init()
