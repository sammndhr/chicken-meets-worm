import Display from './Display.js'
import MovingObject from './MovingObject.js'
import './style.css'
import World from './World.js'

class Game extends Display {
  constructor() {
    super()
  }
  init() {
    this.createGame()
    this.renderGame()
    this.renderWorld()
  }
}

const game = new Game()
game.init()
const world = new World()
world.init()
world.getBounds()
const radius = 10
const initialPos = { x: world.size.width / 2, y: world.size.height }
const obj = new MovingObject(initialPos, radius, world)

window.requestAnimationFrame(obj.draw)
