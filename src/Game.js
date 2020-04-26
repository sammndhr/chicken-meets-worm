import Child from './Child.js'
import Lives from './Lives.js'
import Parent from './Parent.js'
import Predator from './Predator.js'
import './style.css'
import World from './World.js'

export default class Game {
  constructor(display) {
    this.display = display
    this.mouse = { x: null, y: null }
    this.parentBird = null
    this.predators = []
    this.children = []
    this.world = null
  }

  handleMouseMove = (e) => {
    this.mouse = { x: e.clientX, y: e.clientY }
  }

  checkCollisions = () => {
    // Child collisions
    for (const child of this.children) {
      this.parentBird.checkInRange(child)
      for (const predator of this.predators) {
        child.checkInRange(predator, 5)
      }
    }
    // Parent collisions
    for (const predator of this.predators) {
      this.parentBird.checkInRange(predator)
    }
  }

  draw = () => {
    const canvas = this.world.canvas,
      ctx = canvas.getContext('2d')

    ctx.clearRect(0, 0, canvas.width, canvas.height)

    this.parentBird.move(this.mouse)
    this.parentBird.draw(ctx)

    for (const predator of this.predators) {
      predator.move()
      predator.draw(ctx)
    }

    for (const child of this.children) {
      if (child.isIndependent) child.move()
      child.draw(ctx)
    }

    this.checkCollisions()
    window.requestAnimationFrame(this.draw)
  }

  init = () => {
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
      world,
      lives
    )
    this.parentBird = parentBird

    const predators = [],
      children = []

    for (let i = 0; i < 3; i++) {
      const predator = new Predator(initialPos, radius, world)
      predator.setRandomDir()
      predators.push(predator)
    }

    for (let i = 0; i < 9; i++) {
      const child = new Child(initialPos, radius, world)
      child.setRandomDir()
      children.push(child)
    }

    this.predators = predators
    this.children = children

    window.requestAnimationFrame(this.draw)
  }
}
