import { LinkedList } from 'data_structures'
import MovingObject from './MovingObject'

const r = 13,
  c = '#7280f6',
  e = 1

export default class Parent extends MovingObject {
  constructor(
    pos,
    radius = r,
    world,
    chain,
    score,
    energy,
    sprite,
    size = { width: 0, height: 0 },
    color = c,
    easing = e
  ) {
    super(pos, radius, world, sprite, size, null, color)
    this.children = new LinkedList()
    this.chain = chain
    this.score = score
    this.energy = energy
    this.easing = easing
    this.currPredCols = []
    this.posCache = []
    this.sprite = sprite
    this.size = size
    this.moves = this.moves.bind(this)
    this.hitsPredator = this.hitsPredator.bind(this)
    this.hitsChild = this.hitsChild.bind(this)
    this.clicking = false
  }

  setCurrPredCols = (currPredCols) => {
    this.currPredCols = currPredCols
  }

  getChildCount = () => {
    return this.children.size
  }

  deleteAllChildren = () => {
    while (this.getChildCount() > 1) {
      this.deleteLastChild()
    }
  }

  deleteLastChild = () => {
    let curr = this.children.deleteFromTail()
    if (curr) {
      curr.setChainPos(null)
      curr.setNextChild(null)
      curr.setIndependence(true)
      this.chain.decrementCount()
      curr.setParent(null)
    }
    return curr
  }

  destroyChild = (child) => {
    this.children.deleteNode(child)
  }

  appendChild = (child) => {
    if (!this.children.search(child)) {
      this.chain.incrementCount()
      this.score.calculateScore(this.getChildCount())
      const tail = this.children.tail,
        lastChild = tail && tail.val
      if (lastChild) lastChild.setNextChild(child)

      this.children.appendToTail(child)

      child.setChainPos(this.getChildCount())
      child.setParent(this)
    }
  }

  checkCollisionWithPredator = (predator) => {
    const collided = super.checkInRange(predator),
      colliding = this.currPredCols.includes(predator)

    /* if collided and first contact,
      add predator to the current collisions with predator,
      call collide with predator (decrement chain count)
    */
    if (collided && !colliding) {
      const currPredCols = this.currPredCols.slice()
      currPredCols.push(predator)
      this.setCurrPredCols(currPredCols)
      this.hitsPredator()
    }

    /* if was colliding and stopped colliding, remove predator from current collisions */
    if (!collided && super.checkInRange(predator, 5) && colliding) {
      const currPredCols = this.currPredCols.slice(),
        index = currPredCols.indexOf(predator)
      currPredCols.splice(index, 1)
      this.setCurrPredCols(currPredCols)
    }
  }

  hitsPredator() {
    this.chain.reset()
    this.energy.decrementCount()
    const children = this.children.toArray()

    for (const child of children) {
      child.setParent(null)
      child.setChainPos(null)
      child.setNextChild(null)
      child.setIndependence(true)
      const vel = { dx: 2, dy: 2 }
      child.setVelocity(vel)

      const [x, y] = child.currDir,
        { dx, dy } = vel
      child.setCurrDir([x * dx, y * dy])
      child.setRandomDir()
    }

    this.children = new LinkedList()
  }

  hitsChild(obj) {
    this.appendChild(obj)
    obj.setIndependence(false)
  }

  hitsWorm(game, worm) {
    this.energy.incrementCount()
    game.destroyWorm(worm)
  }

  moves(pos) {
    super.movesWithCursor(pos, this.easing)
    const firstChild = this.children.head && this.children.head.val

    if (firstChild)
      firstChild.moves(this.posCache.length ? this.posCache[0] : pos)
  }
}
