export default class World {
  constructor(display) {
    this.display = display
    this.canvas = display.world
    this.size = this.display.worldSize
    this.bounds = { top: null, right: null, bottom: null, right: null }
    this.offsets = { top: null, left: null }
  }

  getBounds() {
    const top = 0,
      left = 0,
      bottom = this.canvas.height,
      right = this.canvas.width

    return { top, right, bottom, left }
  }

  setBounds(bounds) {
    this.bounds = bounds
  }

  getOffsets() {
    const top = this.canvas.offsetTop,
      left = this.canvas.offsetLeft
    return { top, left }
  }
  setOffsets(offsets) {
    this.offsets = offsets
  }

  init() {
    const bounds = this.getBounds(),
      offsets = this.getOffsets()

    this.setBounds(bounds)
    this.setOffsets(offsets)
  }
}
