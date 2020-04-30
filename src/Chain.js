export default class Chain {
  constructor(display, count = 0) {
    this.display = display
    this.count = count
    this.min = 0
  }

  setCount = (count) => {
    this.count = count
  }

  reset = () => {
    this.setCount(0)
    this.updateChain()
  }

  incrementCount = () => {
    const count = this.count + 1
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
