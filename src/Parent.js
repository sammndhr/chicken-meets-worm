import { LinkedList } from 'data_structures'
import MovingObject from './MovingObject'

const r = 13,
  c = '#7280f6',
  e = 0.9

export default class Parent extends MovingObject {
  constructor(pos, radius = r, world, lives, score, color = c, easing = e) {
    super(pos, radius, world, color)
    this.children = new LinkedList()
    this.lives = lives
    this.score = score
    this.easing = easing
    this.currPredCols = []
    this.posCache = []

    this.moves = this.moves.bind(this)
    // this.checkInRange = this.checkInRange.bind(this)
    this.hitsPredator = this.hitsPredator.bind(this)
    this.hitsChild = this.hitsChild.bind(this)
  }

  setCurrPredCols = (currPredCols) => {
    this.currPredCols = currPredCols
  }

  getChildCount = () => {
    return this.children.size
  }

  deleteLastChild = () => {
    let curr = this.children.deleteFromTail()
    curr.setParent(null)
    curr.setChainPos(null)
    curr.setNextChild(null)
    curr.setIndependence(true)
    this.lives.decrementCount()
    return curr
  }

  destroyChild = (child) => {
    this.children.deleteNode(child)
  }

  appendChild = (child) => {
    if (!this.children.search(child)) {
      this.lives.incrementCount()
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
      call collide with predator (decrement lives)
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
    this.lives.reset()
    const children = this.children.toArray()
    for (const child of children) {
      child.setParent(null)
      child.setChainPos(null)
      child.setNextChild(null)
      child.setIndependence(true)
    }
    this.children = new LinkedList()
  }

  hitsChild(obj) {
    this.appendChild(obj)
    obj.setIndependence(false)
  }

  moves(pos) {
    super.movesWithCursor(pos, this.easing)
    const firstChild = this.children.head && this.children.head.val

    if (firstChild)
      firstChild.moves(this.posCache.length ? this.posCache[0] : pos)
  }
}
