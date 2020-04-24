import Child from './Child.js'
import Display from './Display.js'
import Lives from './Lives.js'
import Parent from './Parent.js'
import Predator from './Predator.js'
import './style.css'
import World from './World.js'

class Game {
  constructor(display) {
    this.display = display
    this.mouse = { x: null, y: null }
    this.parentBird = null
    this.predators = []
    this.children = []
    this.world = null
    this.handleMouseMove = this.handleMouseMove.bind(this)
    this.draw = this.draw.bind(this)
  }

  handleMouseMove(e) {
    this.mouse = { x: e.clientX, y: e.clientY }
    this.parentBird.move(this.mouse)
  }

  checkCollisions() {
    for (const child of this.children) {
      child.checkCollision(this.parentBird)
      for (const predator of this.predators) {
        child.checkCollision(predator)
      }
    }
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
    for (const child of this.children) {
      child.draw(ctx)
      child.move()
    }
    this.checkCollisions()
    window.requestAnimationFrame(this.draw)
  }

  init() {
    this.display.renderGame()
    this.display.renderLives()
    this.display.renderWorld()

    window.addEventListener('mousemove', this.handleMouseMove, false)

    const lives = new Lives(this.display)
    lives.init()

    const world = new World(this.display)
    world.init()
    this.world = world

    const radius = 10
    const initialPos = {
      x: world.size.width / 2 + radius,
      y: world.size.height / 2 + radius,
    }
    const parentBird = new Parent(
      { x: initialPos.x, y: world.size.height - 13 },
      13,
      world
    )
    this.parentBird = parentBird

    const predators = [],
      children = []

    for (let i = 0; i < 3; i++) {
      const predator = new Predator(initialPos, radius, world)
      predator.setRandomDir()
      predators.push(predator)
    }

    for (let i = 0; i < 3; i++) {
      const child = new Child(initialPos, radius, world)
      child.setRandomDir()
      children.push(child)
    }

    this.predators = predators
    this.children = children

    window.requestAnimationFrame(this.draw)
  }
}

const game = new Game(new Display({ width: 400, height: 600 }))
game.init()
