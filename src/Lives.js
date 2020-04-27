export default class Lives {
  constructor(display, count = 0, max = 10) {
    this.display = display
    this.count = count
    this.min = 0
    this.max = max
  }

  setCount = (count) => {
    this.count = count
  }

  incrementCount = () => {
    const count = Math.min(this.count + 1, this.max)
    this.setCount(count)
    this.updateLives()
  }

  decrementCount = () => {
    const count = this.count
    this.count = Math.max(count - 1, this.min)
    this.updateLives()
  }

  updateLives = () => {
    this.display.updateElement('#lives', this.count)
  }

  init = () => {
    this.updateLives()
  }
}
