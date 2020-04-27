/**
 * Related to the DOM and display (creating elements, updating elements etc.)
 */

export default class DOMDisplay {
  constructor({ width = 400, height = 700 }) {
    this.game = null
    this.worldSize = { width, height }
  }

  createElement = (tag, className, id, content) => {
    const element = document.createElement(tag)
    if (className === 'score-label') console.log(element)
    if (className) element.classList.add(className)
    if (id) element.id = id
    if (content) element.innerText = content
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
    const livesWrapper = this.createElement('div', 'lives-wrapper')
    const livesLabel = this.createElement('span', 'label', null, 'Lives: ')
    const lives = this.createElement('span', 'lives', 'lives')

    this.game.append(livesWrapper)
    livesWrapper.append(livesLabel)
    livesWrapper.append(lives)
  }

  renderScore = () => {
    const scoreWrapper = this.createElement('div', 'score-wrapper')
    const scoreLabel = this.createElement('span', 'label', null, 'Score: ')
    const score = this.createElement('span', 'score', 'score')

    this.game.append(scoreWrapper)
    scoreWrapper.append(scoreLabel)
    scoreWrapper.append(score)
  }
}
