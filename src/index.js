import Display from './Display.js'
import MovingObject from './MovingObject.js'
import './style.css'
import World from './World.js'

class Game {
  constructor(display) {
    this.display = display
    this.mouse = { x: null, y: null }
    this.parentBird = null
    this.handleMouseMove = this.handleMouseMove.bind(this)
  }

  handleMouseMove(e) {
    this.mouse = { x: e.clientX, y: e.clientY }
    this.parentBird.move(this.mouse)
  }

  init() {
    this.display.createGame()
    this.display.renderGame()
    this.display.renderWorld()
    window.addEventListener('mousemove', this.handleMouseMove, false)
    const world = new World(this.display)
    world.init()

    const radius = 10
    const initialPos = { x: world.size.width / 2, y: world.size.height / 2 }
    const parentBird = new MovingObject(initialPos, radius, world)
    this.parentBird = parentBird
    parentBird.init()
    window.requestAnimationFrame(parentBird.draw)
  }
}

const game = new Game(new Display({ width: 400, height: 600 }))
game.init()
