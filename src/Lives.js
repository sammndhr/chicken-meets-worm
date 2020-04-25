export default class Lives {
  constructor(display, count = 10, max = 10) {
    this.display = display
    this.count = count
    this.min = 0
    this.max = max
  }

  incrementCount = () => {
    const count = this.count
    this.count = Math.max(count + 1, this.max)
    this.updateView(this.count)
  }

  decrementCount = () => {
    const count = this.count
    this.count = Math.max(count - 1, this.min)
    this.updateView(this.count)
  }

  updateView = (count) => {
    this.display.updateElement('#lives', count)
  }

  init = () => {
    this.updateView(this.count)
  }
}
