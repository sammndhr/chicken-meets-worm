import Game from './Game'

export default class TutorialGame extends Game {
  constructor(
    display,
    onTutorialEnd,
    childCount = 0,
    predatorCount = 0,
    wormCount = 0
  ) {
    super(display, childCount, predatorCount, wormCount)
    this.tutorialNo = 0
    this.onTutorialEnd = onTutorialEnd
    this.clearGame = this.clearGame.bind(this)
    this.replayGame = this.replayGame.bind(this)
  }

  destroyChild = (child) => {
    this.children.deleteNode(child)
    if (this.children.size < this.childCount) this.spawnChildren(17.5)
  }

  clearGame() {
    super.clearGame()
    this.clearCanvas()
    this.display.clearTutorial()
    window.removeEventListener('keydown', this.handlePressKey)
  }

  replayGame() {
    super.replayGame()
    this.parent.setIsTutorial(true)
  }

  handlePressSpace = () => {
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

  handlePressEnter = () => {
    this.clearGame()
    this.onTutorialEnd()
  }

  handlePressKey = (e) => {
    if (e.keyCode === 13) this.handlePressEnter()
    if (e.keyCode === 32) this.handlePressSpace()
  }

  checkInRange = () => {
    const parent = this.parent,
      children = this.children.toArray(),
      predators = this.predators.toArray(),
      worms = this.worms.toArray()

    for (const child of children) {
      if (parent.checkInRange(child)) {
        parent.hitsChild(child)
      }
      for (const predator of predators) {
        if (child.checkInRange(predator, 10)) child.avoidPredator()
        if (child.checkInRange(predator, 0)) child.hitsPredator(this)
      }
    }

    for (const predator of predators) {
      if (parent.checkInRange(predator, 5))
        parent.checkCollisionWithPredator(predator)
    }

    for (const worm of worms) {
      if (parent.checkInRange(worm, 2)) parent.hitsWorm(this, worm)
    }
  }

  draw = (timestamp) => {
    if ([2, 3].includes(this.tutorialNo) && this.energy.count === 0) {
      return this.gameOver()
    }

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

    if (this.tutorialNo >= 4) {
      const timePassed = timestamp - this.timeSinceWorm
      if (timePassed >= 5) {
        while (this.worms.size < this.wormCount) {
          this.spawnWorms(20, { dx: 0.5, dy: 0.5 })
        }
        this.timeSinceWorm = timestamp
      }

      const worms = this.worms.toArray()
      for (const worm of worms) {
        worm.moves(this)
        worm.draw(ctx, { x: 0, y: 0 })
      }
    }

    this.checkInRange()
    this.animationReq = window.requestAnimationFrame(this.draw)
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
    this.parent.setIsTutorial(true)
    window.addEventListener('mousemove', this.handleMouseMove, false)
    window.addEventListener('keydown', this.handlePressKey)
    this.animationReq = window.requestAnimationFrame(this.draw)
  }

  initTutorial1 = () => {
    this.setTutorialNo(1)
    this.display.renderChildrenTut()
    this.display.renderScore()
    this.display.renderChain()
    this.initChain()
    this.parent.chain = this.chain
    this.initScore()
    this.parent.score = this.score
    this.childCount = 5
    this.initChildren(17.5)
  }

  initTutorial2 = () => {
    this.setTutorialNo(2)
    this.score.reset()
    this.parent.setIsTutorial(true)

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
    this.replayGame()
    this.parent.setIsTutorial(true)

    const children = this.children.toArray()

    for (const child of children) {
      this.parent.hitsChild(child)
      child.moves(this.parent.pos)
    }

    const pred = this.predators.toArray()[0]
    window.addEventListener('mouseup', this.handleMouseUp, false)
    window.addEventListener('mousedown', this.handleMouseDown, false)

    pred.setPos({ x: 35, y: 35 })
    pred.setCurrDir([0.23, -1])

    this.display.renderClickParentTut()
  }

  initTutorial4 = () => {
    this.setTutorialNo(4)
    this.energy.max = 5
    this.replayGame()
    this.parent.deleteAllChildren()
    for (const child of this.children.toArray()) {
      child.setPos(child.getRandomPos())
    }
    const pred = this.predators.toArray()[0]

    pred.setPos({ x: 35, y: 35 })
    pred.setCurrDir([0.23, -1])
    this.wormCount = 5
    this.initWorms(20, { dx: 0.5, dy: 0.5 })
    this.childCount = 0
    this.parent.hitsPredator()
    for (const child of this.children.toArray()) {
      this.destroyChild(child)
    }

    this.display.renderWormTut()
  }
}
