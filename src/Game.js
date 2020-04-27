import Child from './Child.js'
import Lives from './Lives.js'
import Parent from './Parent.js'
import Predator from './Predator.js'
import Score from './Score.js'
import './style.css'
import World from './World.js'

export default class Game {
  constructor(display) {
    this.display = display
    this.mouse = { x: null, y: null }
    this.world = null
    this.parentBird = null
    this.predators = []
    this.children = []
    this.lives = 0
    this.score = 0
  }

  handleMouseMove = (e) => {
    this.mouse = { x: e.clientX, y: e.clientY }
  }

  checkInRange = () => {
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

    this.parentBird.moves(this.mouse)
    this.parentBird.draw(ctx)

    for (const predator of this.predators) {
      predator.moves()
      predator.draw(ctx)
    }

    for (const child of this.children) {
      if (child.isIndependent) child.moves()
      child.draw(ctx)
    }

    this.checkInRange()
    window.requestAnimationFrame(this.draw)
  }

  initChildren = (count, radius) => {
    const children = []

    for (let i = 0; i < count; i++) {
      const x = this.world.size.width / 2,
        y = this.world.size.height
      const child = new Child(
        {
          x,
          y: y / 1.5,
        },
        radius,
        this.world
      )

      child.setRandomDir()
      children.push(child)
    }
    this.children = children
  }

  initPredators = (count, radius) => {
    const predators = []

    for (let i = 0; i < count; i++) {
      const x = this.world.size.width / 2,
        y = this.world.size.height

      const predator = new Predator({ x, y: y / 3 }, radius, this.world)

      predator.setRandomDir()
      predators.push(predator)
    }
    this.predators = predators
  }

  initParent = (radius) => {
    const initialPos = {
      x: this.world.size.width / 2 + radius,
      y: this.world.size.height / 2 + radius,
    }

    const parentBird = new Parent(
      initialPos,
      radius,
      this.world,
      this.lives,
      this.score
    )
    this.parentBird = parentBird
  }

  initLives = (count) => {
    const lives = new Lives(this.display, count)
    lives.init()
    this.lives = lives
  }

  initWorld = () => {
    const world = new World(this.display)
    world.init()
    this.world = world
  }

  initScore = () => {
    const score = new Score(this.display)
    score.init()
    this.score = score
  }

  init = () => {
    this.display.renderGame()
    this.display.renderScore()
    this.display.renderLives()
    this.display.renderWorld()

    window.addEventListener('mousemove', this.handleMouseMove, false)

    this.initWorld()
    this.initScore()
    this.initLives(10)
    this.initParent(13)
    this.initChildren(8, 10)
    this.initPredators(8, 10)
    window.requestAnimationFrame(this.draw)
  }
}
