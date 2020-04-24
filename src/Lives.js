export default class Lives {
  constructor(display, count = 5) {
    this.display = display
    this.count = count
  }

  incrementCount = () => {
    this.count = this.count + 1
  }

  decrementCount = () => {
    this.count = this.count - 1
  }

  init = () => {
    this.display.updateElement('#lives', this.count)
  }
}
