import Game from './Game'
export default class TutorialGame extends Game {
  constructor(display, childCount = 0, predatorCount = 0, wormCount = 0) {
    super(display, childCount, predatorCount, wormCount)
    this.tutorialNo = 0
    this.destroyChild = this.destroyChild.bind(this)
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
        if (this.tutorialNo > 5) this.spawnChildren(17.5)
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

  drawTutorial = (timestamp) => {
    const canvas = this.world.canvas,
      ctx = canvas.getContext('2d')
    ctx.clearRect(0, 0, canvas.width, canvas.height)

    if (this.tutorialNo >= 0) {
      this.parent.moves(this.mouse)
      this.parent.draw(ctx, { x: 30, y: 25 })
    }

    if (this.tutorialNo >= 1) {
      const children = this.children.toArray()

      for (const child of children) {
        if (child.independence) child.moves()
        child.draw(ctx, { x: 15, y: 15 })

        this.clicking ? child.setClicking(true) : child.setClicking(false)
      }
    }

    if (this.tutorialNo >= 2) {
      const predators = this.predators.toArray()
      for (const predator of predators) {
        predator.moves()
        predator.draw(ctx, { x: 30, y: 25 })
      }
    }

    if (this.tutorialNo >= 2) {
      if (this.energy.count === 0) {
        return this.gameOver()
      }
    }
    if (this.tutorialNo >= 4) {
      const timePassed = timestamp - this.timeSinceWorm
      if (timePassed >= 10 && this.worms.size < this.wormCount) {
        this.spawnWorms(20, { dy: 0.5, dy: 0.5 })
        this.timeSinceWorm = timestamp
      }

      const worms = this.worms.toArray()
      for (const worm of worms) {
        worm.moves(this)
        worm.draw(ctx, { x: 0, y: 0 })
      }
    }
    this.checkInRange()

    this.animationReq = window.requestAnimationFrame(this.drawTutorial)
  }

  setTutorialNo = (number) => {
    this.tutorialNo = number
  }

  initTutorial = () => {
    this.initTutorial0()
  }

  initTutorial0 = () => {
    this.setTutorialNo(0)
    this.initWorld()

    this.display.renderMoveParentTut()
    this.initParent(30)
    window.addEventListener('mousemove', this.handleMouseMove, false)
    window.addEventListener('keydown', this.handlePressSpace)
    this.animationReq = window.requestAnimationFrame(this.drawTutorial)
  }

  initTutorial1 = () => {
    this.setTutorialNo(1)
    this.display.renderScore()
    this.display.renderChain()
    this.initChain()
    this.parent.chain = this.chain
    this.initScore()
    this.parent.score = this.score
    this.childCount = 5
    this.initChildren(17.5)
    this.display.renderChildrenTut()
  }

  initTutorial2 = () => {
    this.setTutorialNo(2)
    this.score.reset()
    this.parent.deleteAllChildren()
    for (const child of this.children.toArray()) {
      child.setPos(child.getRandomPos())
    }

    this.display.renderEnergy()
    this.initEnergy(3, 3)
    this.parent.energy = this.energy
    this.predatorCount = 1
    this.initPredators(35)
    const pred = this.predators.toArray()[0]
    pred.setPos({ x: 35, y: 35 })
    pred.setCurrDir([0.23, -pred.vel.dy])
    this.display.renderPredatorTut()
  }

  initTutorial3 = () => {
    this.setTutorialNo(3)
    this.score.reset()
    this.energy.reset()
    this.display.clearGameEnd()

    const children = this.children.toArray()
    for (const child of children) {
      this.parent.hitsChild(child)
      child.moves(this.parent.pos)
    }
    const pred = this.predators.toArray()[0]

    this.animationReq = window.requestAnimationFrame(this.drawTutorial)

    pred.setPos({ x: 35, y: 35 })
    pred.setCurrDir([0.23, -1])

    this.display.renderClickParentTut()
  }

  initTutorial4 = () => {
    this.setTutorialNo(4)
    this.score.reset()
    this.energy.max = 5
    this.energy.reset()

    this.display.clearGameEnd()

    this.parent.deleteAllChildren()
    for (const child of this.children.toArray()) {
      child.setPos(child.getRandomPos())
    }
    const pred = this.predators.toArray()[0]

    pred.setPos({ x: 35, y: 35 })
    pred.setCurrDir([0.23, -1])
    this.wormCount = 5
    this.initWorms(20, { dx: 0.5, dy: 0.5 })

    this.display.renderWormTut()
  }

  destroyChild(child) {
    this.children.deleteNode(child)
    if (this.tutorialNo > 100 || this.children.size < this.childCount)
      this.spawnChildren(17.5)
  }

  initGame = () => {
    window.removeEventListener('mousedown', this.handleMouseDown, false)
    window.removeEventListener('mouseup', this.handleMouseUp, false)
    window.cancelAnimationFrame(this.animationReq)
    window.removeEventListener('mousemove', this.handleMouseMove, false)
  }

  handlePressSpace = (e) => {
    if (e.keyCode === 32) console.log('game start')
    if (e.keyCode !== 13) return
    if (this.tutorialNo === 0) {
      this.initTutorial1()
    } else if (this.tutorialNo === 1) {
      this.initTutorial2()
    } else if (this.tutorialNo === 2) {
      this.initTutorial3()
    } else if (this.tutorialNo === 3) {
      this.initTutorial4()
    }
  }
}
