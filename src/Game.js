import { LinkedList } from 'data_structures'
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
    this.children = new LinkedList()
    this.lives = 0
    this.score = 0
  }

  handleMouseMove = (e) => {
    this.mouse = { x: e.clientX, y: e.clientY }
  }

  destroyChild = (child) => {
    this.children.deleteNode(child)
  }

  childHitsPredator = (child) => {
    this.destroyChild(child)
  }

  checkWallCollisions = () => {}

  checkInRange = () => {
    const parent = this.parentBird,
      children = this.children.toArray()
    // Child collisions

    for (const child of children) {
      if (parent.checkInRange(child)) parent.hitsChild(child)
      for (const predator of this.predators) {
        if (child.checkInRange(predator, 10)) child.avoidPredator()
        if (child.isIndependent() && child.checkInRange(predator, 0)) {
          this.childHitsPredator(child)
        }
      }
    }
    // Parent collisions
    for (const predator of this.predators) {
      if (parent.checkInRange(predator))
        parent.checkCollisionWithPredator(predator)
    }
  }

  draw = () => {
    const canvas = this.world.canvas,
      ctx = canvas.getContext('2d'),
      children = this.children.toArray()

    ctx.clearRect(0, 0, canvas.width, canvas.height)

    this.parentBird.moves(this.mouse)
    this.parentBird.draw(ctx)

    for (const predator of this.predators) {
      predator.moves()
      predator.draw(ctx)
    }

    for (const child of children) {
      if (child.independence) child.moves()
      child.draw(ctx)
    }

    this.checkInRange()
    window.requestAnimationFrame(this.draw)
  }

  initChildren = (count, radius) => {
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
      this.children.appendToTail(child)
    }
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
    this.initLives(0)
    this.initParent(13)
    this.initChildren(10, 10)
    this.initPredators(10, 10)
    window.requestAnimationFrame(this.draw)
  }
}
