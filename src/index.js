import Display from './Display.js'
import MovingObject from './MovingObject.js'
import Predator from './Predator.js'
import './style.css'
import World from './World.js'

class Game {
  constructor(display) {
    this.display = display
    this.mouse = { x: null, y: null }
    this.parentBird = null
    this.predators = []
    this.world = null
    this.handleMouseMove = this.handleMouseMove.bind(this)
    this.draw = this.draw.bind(this)
  }

  handleMouseMove(e) {
    this.mouse = { x: e.clientX, y: e.clientY }
    this.parentBird.move(this.mouse)
  }

  draw() {
    const canvas = this.world.canvas,
      ctx = canvas.getContext('2d')

    ctx.clearRect(0, 0, canvas.width, canvas.height)
    this.parentBird.draw(ctx)
    for (const predator of this.predators) {
      predator.draw(ctx)
      predator.move()
    }
    window.requestAnimationFrame(this.draw)
  }

  init() {
    this.display.createGame()
    this.display.renderGame()
    this.display.renderWorld()

    window.addEventListener('mousemove', this.handleMouseMove, false)

    const world = new World(this.display)
    world.init()
    this.world = world

    const radius = 10
    const initialPos = { x: world.size.width / 2, y: world.size.height / 2 }
    const parentBird = new MovingObject(initialPos, radius, world)
    this.parentBird = parentBird

    const predators = []
    for (let i = 0; i < 4; i++) {
      const predator = new Predator(
        { x: initialPos.x + 10, y: initialPos.y + 10 },
        radius,
        world
      )
      predator.getRandomDir()
      predators.push(predator)
    }

    this.predators = predators

    window.requestAnimationFrame(this.draw)
  }
}

const game = new Game(new Display({ width: 400, height: 600 }))
game.init()
