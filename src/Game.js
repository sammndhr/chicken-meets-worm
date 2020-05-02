import { LinkedList } from 'data_structures'
import Chain from './Chain.js'
import Child from './Child.js'
import Energy from './Energy.js'
import childImg from './imgs/child.png'
import parentImage from './imgs/parent.png'
import predatorImage from './imgs/predator.png'
import wormImage from './imgs/worm.png'
import Parent from './Parent.js'
import Predator from './Predator.js'
import Score from './Score.js'
import World from './World.js'
import Worm from './Worm.js'

const ChildSprite = new Image()
ChildSprite.src = childImg
const ParentSprite = new Image()
ParentSprite.src = parentImage
const PredatorSprite = new Image()
PredatorSprite.src = predatorImage
const WormSprite = new Image()
WormSprite.src = wormImage

export default class Game {
  constructor(display, childCount = 5, predatorCount = 4, wormCount = 1) {
    this.display = display
    this.mouse = { x: null, y: null }
    this.world = null
    this.parent = null
    this.predators = new LinkedList()
    this.children = new LinkedList()
    this.worms = new LinkedList()
    this.childCount = childCount
    this.predatorCount = predatorCount
    this.wormCount = wormCount
    this.chain = null
    this.energy = null
    this.score = null
    this.timeSinceWorm = 0
    this.animationReq = null
    this.clicking = false
    this.init = this.init.bind(this)
    this.checkInRange = this.checkInRange.bind(this)
    this.destroyChild = this.destroyChild.bind(this)
  }

  handleMouseMove = (e) => {
    if (this.clicking) return
    this.mouse = { x: e.clientX, y: e.clientY }
    this.display.removeAnimation('worm-left')
  }

  handleMouseDown = (e) => {
    if (this.energy.count <= 0.5) {
      this.display.animate('worm-left')
      return
    }
    const mouse = { x: e.clientX, y: e.clientY }
    this.mouse = mouse
    this.clicking = true
    if (this.parent.getChildCount() > 0) this.energy.decrementCountByHalf()
  }

  handleMouseUp = () => {
    this.clicking = false
  }

  destroyWorm = (worm) => {
    this.worms.deleteNode(worm)
  }

  destroyChild(child) {
    this.children.deleteNode(child)
    this.spawnChildren(17.5)
  }

  checkInRange() {
    const parent = this.parent,
      children = this.children.toArray(),
      predators = this.predators.toArray(),
      worms = this.worms.toArray()

    // Child predator collisions
    for (const child of children) {
      if (parent.checkInRange(child)) {
        parent.hitsChild(child)
        this.spawnChildren(17.5)
      }
      for (const predator of predators) {
        if (child.checkInRange(predator, 10)) child.avoidPredator()
        if (child.checkInRange(predator, 0)) child.hitsPredator(this)
      }
    }
    // Parent predator collisions
    for (const predator of predators) {
      if (parent.checkInRange(predator, 5))
        parent.checkCollisionWithPredator(predator)
    }

    //Parent worm collisions
    for (const worm of worms) {
      if (parent.checkInRange(worm, 2)) parent.hitsWorm(this, worm)
    }
  }

  spawnChildren = (r) => {
    const size = { width: r * 2, height: r * 2 }
    let independentC = this.children.size - this.parent.getChildCount()

    while (independentC < this.childCount && this.childCount > 0) {
      const randomPos = this.world.getRandomPos(r),
        child = new Child(randomPos, r, this.world, ChildSprite, size)

      child.setRandomDir()
      this.children.appendToTail(child)
      independentC = this.children.size - this.parent.getChildCount()
    }
  }

  spawnPredators = (r) => {
    const size = { width: r * 2, height: r * 2 }

    while (this.predators.size < this.predatorCount) {
      const randomPos = this.world.getRandomPos(r),
        predator = new Predator(randomPos, r, this.world, PredatorSprite, size)
      predator.setRandomDir()
      this.predators.appendToTail(predator)
    }
  }

  spawnWorms = (r, vel) => {
    const size = { width: r * 2, height: r * 2 }

    while (this.worms.size < this.wormCount) {
      const randomPos = this.world.getRandomPos(r),
        worm = new Worm(randomPos, r, this.world, WormSprite, size, vel && vel)
      worm.setRandomDir()
      this.worms.appendToTail(worm)
    }
  }

  initChildren = (r) => {
    this.spawnChildren(r)
  }

  initPredators = (r) => {
    this.spawnPredators(r)
  }

  initParent = (r) => {
    const size = { width: r * 2, height: r * 2 }
    const initialPos = {
      x: this.world.size.width / 2 + r,
      y: this.world.size.height / 2 + r,
    }

    const parent = new Parent(
      initialPos,
      r,
      this.world,
      this.chain,
      this.score,
      this.energy,
      ParentSprite,
      size
    )
    this.parent = parent
  }

  initWorms = (r, vel) => {
    this.spawnWorms(r, vel)
  }

  initChain = () => {
    const chain = new Chain(this.display)
    chain.init()
    this.chain = chain
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

  initEnergy = (initCount, max) => {
    const energy = new Energy(this.display, initCount, max)
    energy.init()
    this.energy = energy
  }

  replayGame = () => {
    this.resetGame()
    this.display.clearGameEnd()
  }

  resetGame = () => {
    this.energy.reset()
    this.score.reset()
    this.mouse = { x: null, y: null }
    this.parent = null
    this.predators = new LinkedList()
    this.children = new LinkedList()
    this.worms = new LinkedList()
    this.chain = null
    this.timeSinceWorm = 0

    this.initWorld()
    this.initChain()
    this.initParent(30)
    this.initChildren(17.5)
    this.initPredators(35)
    this.initWorms(20)
    this.animationReq = window.requestAnimationFrame(this.draw)
  }

  gameOver = () => {
    this.score.calculateHighScore()
    window.cancelAnimationFrame(this.animationReq)
    this.display.renderGameEnd(
      this.replayGame,
      this.score.score,
      this.score.highScore
    )
    return
  }

  draw = (timestamp) => {
    if (this.energy.count === 0) {
      return this.gameOver()
    }

    const timePassed = timestamp - this.timeSinceWorm
    if (timePassed >= 2500 && this.worms.size <= 0) {
      this.spawnWorms(20)
      this.timeSinceWorm = timestamp
    }

    const canvas = this.world.canvas,
      ctx = canvas.getContext('2d'),
      children = this.children.toArray(),
      predators = this.predators.toArray(),
      worms = this.worms.toArray()

    ctx.clearRect(0, 0, canvas.width, canvas.height)

    this.parent.moves(this.mouse)
    this.parent.draw(ctx, { x: 30, y: 25 })

    for (const predator of predators) {
      predator.moves()
      predator.draw(ctx, { x: 30, y: 25 })
    }

    for (const worm of worms) {
      worm.moves(this)
      worm.draw(ctx, { x: 0, y: 0 })
    }

    for (const child of children) {
      if (child.independence) child.moves()
      child.draw(ctx, { x: 15, y: 15 })

      this.clicking ? child.setClicking(true) : child.setClicking(false)
    }

    this.checkInRange()
    this.animationReq = window.requestAnimationFrame(this.draw)
  }

  init() {
    // this.display.renderGame()
    // this.display.renderTitle()
    // this.display.renderWorld()
    this.display.renderScore()
    this.display.renderChain()
    this.display.renderEnergy()

    window.addEventListener('mousemove', this.handleMouseMove, false)
    window.addEventListener('mousedown', this.handleMouseDown, false)
    window.addEventListener('mouseup', this.handleMouseUp, false)
    this.initEnergy(5, 5)
    this.initWorld()
    this.initScore()
    this.initChain()
    this.initParent(30)
    this.initChildren(17.5)
    this.initPredators(35)
    this.initWorms(20)
    this.animationReq = window.requestAnimationFrame(this.draw)
  }
}
