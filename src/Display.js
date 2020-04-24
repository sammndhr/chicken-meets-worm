/**
 * Related to the DOM and display (creating elements, updating elements etc.)
 */

export default class Display {
  constructor({ width = 400, height = 700 }) {
    this.game = null
    this.worldSize = { width, height }
  }

  createElement = (tag, className, id) => {
    const element = document.createElement(tag)
    if (className) element.classList.add(className)
    if (id) element.id = id
    return element
  }

  getElement = (selector) => {
    return document.querySelector(selector)
  }

  updateElement = (selector, val) => {
    this.getElement(selector).innerText = val
  }

  renderGame = () => {
    const game = this.createElement('div', 'game', 'game')
    this.game = game
    document.body.appendChild(this.game)
  }

  renderWorld = () => {
    const world = this.createElement('canvas', null, 'world')
    world.width = this.worldSize.width
    world.height = this.worldSize.height
    this.game.append(world)
    this.world = world
  }

  renderLives = () => {
    const lives = this.createElement('div', 'lives', 'lives')
    this.game.append(lives)
  }
}
