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

  renderEnergy = () => {
    const energyWrapper = this.createElement('div', 'energy-wrapper')
    const energyLabel = this.createElement('span', 'label', null, 'energy: ')
    const energy = this.createElement('span', 'energy', 'energy')

    this.game.append(energyWrapper)
    energyWrapper.append(energyLabel)
    energyWrapper.append(energy)
  }

  renderChain = () => {
    const chainWrapper = this.createElement('div', 'chain-wrapper')
    const chainLabel = this.createElement('span', 'label', null, 'Chain: ')
    const chain = this.createElement('span', 'chain', 'chain')

    this.game.append(chainWrapper)
    chainWrapper.append(chainLabel)
    chainWrapper.append(chain)
  }

  renderScore = () => {
    const scoreWrapper = this.createElement('div', 'score-wrapper')
    const scoreLabel = this.createElement('span', 'label', null, 'Score: ')
    const score = this.createElement('span', 'score', 'score')

    this.game.append(scoreWrapper)
    scoreWrapper.append(scoreLabel)
    scoreWrapper.append(score)
  }

  renderGameOverMessage = () => {
    const message = this.createElement('div', 'game-over', null, 'Game Over!')
    this.game.append(message)
  }
}
