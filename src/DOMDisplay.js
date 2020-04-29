/**
 * Related to the DOM and display (creating elements, updating elements etc.)
 */

import childCountImg from './imgs/count.png'
import heart from './imgs/heart.svg'

export default class DOMDisplay {
  constructor({ width = 400, height = 700 }) {
    this.game = null
    this.worldSize = { width, height }
    this.worldWrapper = null
    this.legend = null
  }

  createImage = (src, className, id) => {
    const img = new Image()
    img.src = src
    if (className) img.classList.add(className)
    if (id) img.id = id
    return img
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

  renderTitle = () => {
    const title = this.createElement('div', 'title', null)
    const heading = this.createElement('h1', null, null, 'CHICKEN MEETS WORM')
    this.game.append(title)
    title.append(heading)
  }

  renderWorld = () => {
    const worldWrapper = this.createElement('div', 'world-wrapper'),
      world = this.createElement('canvas', null, 'world'),
      legend = this.createElement('div', 'legend'),
      { width, height } = this.worldSize
    world.width = this.worldSize.width
    world.height = this.worldSize.height
    this.game.append(worldWrapper)
    worldWrapper.append(legend)
    worldWrapper.append(world)
    worldWrapper.style.width = width + 2 + 'px'
    worldWrapper.style.height = height + 2 + 'px'
    this.worldWrapper = worldWrapper
    this.legend = legend
    this.world = world
  }

  renderEnergy = () => {
    const energyWrapper = this.createElement(
      'div',
      'energy-wrapper',
      'energy-wrapper'
    )
    this.legend.appendChild(energyWrapper)
    this.updateEnergyBar(5)
  }

  renderChain = () => {
    const chainWrapper = this.createElement('div', 'chain-wrapper')
    const countImg = this.createImage(childCountImg, 'image', 'chain-count')
    const chain = this.createElement('span', 'legend-text', 'chain')

    this.legend.append(chainWrapper)
    chainWrapper.append(countImg)
    chainWrapper.append(chain)
  }

  updateEnergyBar(count) {
    var eW = this.getElement('#energy-wrapper')
    if (eW.childElementCount > count) {
      while (eW.childElementCount > count) {
        eW.removeChild(this.getElement('.heart-full'))
      }
    } else {
      let i = Math.min(count, 5)
      while (eW.childElementCount < i) {
        const heartFull = this.createImage(heart, 'heart-full')
        eW.append(heartFull)
      }
    }
  }

  renderScore = () => {
    const score = this.createElement('div', 'legend-text', 'score')
    this.legend.append(score)
  }

  renderGameOverMessage = () => {
    const wrapper = this.createElement('div', 'game-over-wrapper')
    const message = this.createElement('div', 'game-over', null, 'Game Over!')
    wrapper.style.width = this.worldSize.width + 4 + 'px'
    this.worldWrapper.append(wrapper)
    wrapper.append(message)
  }
}
