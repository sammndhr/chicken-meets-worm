export default class Lives {
  constructor(display, count = 5) {
    this.display = display
    this.count = Math.max(count, 0)
  }

  incrementCount = () => {
    const count = this.count
    this.count = Math.max(count + 1, 10)
    this.updateView(this.count)
  }

  decrementCount = () => {
    const count = this.count
    // this.count = Math.max(count - 1, 0)
    this.count = count - 1
    this.updateView(this.count)
  }

  updateView = (count) => {
    this.display.updateElement('#lives', count)
  }

  init = () => {
    this.updateView(this.count)
  }
}
