import { getRandomBetween } from './utils'

export default class World {
  constructor(display) {
    this.display = display
    this.canvas = display.world
    this.size = this.display.worldSize
    this.bounds = { top: null, right: null, bottom: null, right: null }
    this.offsets = { top: null, left: null }
  }

  setBounds(bounds) {
    this.bounds = bounds
  }

  setOffsets(offsets) {
    this.offsets = offsets
  }

  getBounds() {
    const top = 0,
      left = 0,
      bottom = top + this.canvas.height,
      right = left + this.canvas.width

    return { top, right, bottom, left }
  }

  checkOutOfBounds = (pos, r) => {
    const { top, right, bottom, left } = this.bounds,
      { x, y } = pos

    if (x - r < left) return true
    if (x + r > right) return true
    if (y - r < top) return true
    if (y + r > bottom) return true

    return false
  }

  getOffsets() {
    const top = this.canvas.offsetTop,
      left = this.canvas.offsetLeft
    return { top, left }
  }

  getRandomPos = (radius) => {
    const { top, right, bottom, left } = this.bounds,
      r = radius

    const x = getRandomBetween(left + r, right - r),
      y = getRandomBetween(top + r, bottom - r)

    return { x, y }
  }

  init() {
    const offsets = this.getOffsets(),
      bounds = this.getBounds()

    this.setOffsets(offsets)
    this.setBounds(bounds)
  }
}
