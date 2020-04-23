export default class World {
  constructor(display) {
    this.display = display
    this.canvas = display.world
    this.size = this.display.worldSize
    this.bounds = { top: null, right: null, bottom: null, right: null }
  }

  setBounds(bounds) {
    this.bounds = bounds
  }

  getBounds() {
    const top = 0,
      left = 0,
      bottom = this.canvas.height,
      right = this.canvas.width

    return { top, right, bottom, left }
  }

  init() {
    const bounds = this.getBounds()
    this.setBounds(bounds)
  }
}
