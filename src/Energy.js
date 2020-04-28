export default class Energy {
  constructor(display, energy = 5, max = 5) {
    this.display = display
    this.count = energy
    this.min = 0
    this.max = max
  }

  setCount = (count) => {
    this.count = count
  }

  reset = () => {
    this.setCount(0)
    this.updateEnergy()
  }

  incrementCount = () => {
    const count = Math.min(this.count + 1, this.max)
    this.setCount(count)
    this.updateEnergy()
  }

  decrementCount = () => {
    const count = this.count
    this.count = Math.max(count - 1, this.min)
    this.updateEnergy()
  }

  updateEnergy = () => {
    this.display.updateElement('#energy', this.count)
  }

  init = () => {
    this.updateEnergy()
  }
}
