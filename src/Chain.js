export default class Chain {
  constructor(display, count = 1, max = 10) {
    this.display = display
    this.count = count
    this.min = 0
    this.max = max
  }

  setCount = (count) => {
    this.count = count
  }

  reset = () => {
    this.setCount(1)
    this.updateChain()
  }

  incrementCount = () => {
    const count = Math.min(this.count + 1, this.max)
    this.setCount(count)
    this.updateChain()
  }

  decrementCount = () => {
    const count = this.count
    this.count = Math.max(count - 1, this.min)
    this.updateChain()
  }

  updateChain = () => {
    this.display.updateElement('#chain', this.count)
  }

  init = () => {
    this.updateChain()
  }
}
