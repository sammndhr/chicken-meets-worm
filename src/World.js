import Display from './Display.js'

export default class World extends Display {
  constructor() {
    super()
    this.canvas = null
    this.size = { width: null, height: null }
    this.bounds = { top: null, right: null, bottom: null, right: null }
  }

  getBounds() {
    const top = 0,
      left = 0,
      bottom = this.canvas.height,
      right = this.canvas.width
    this.bounds = { top, right, bottom, left }
    return this.bounds
  }

  init() {
    this.canvas = this.getElement('#world')
    this.size = { width: this.canvas.width, height: this.canvas.height }
  }
}
