/**
 * Related to the DOM and display (creating elements, updating elements etc.)
 */

import childCountImg from '../imgs/count.png'
import wormLeft from '../imgs/worm-left.png'
import wormRight from '../imgs/worm-right.png'

export default class DOMDisplay {
  constructor({ width = 400, height = 700 }) {
    this.worldSize = { width, height }
    this.renderChain = this.renderChain.bind(this)
    this.renderEnergy = this.renderEnergy.bind(this)
    this.renderScore = this.renderScore.bind(this)
  }

  createImage = (src, className, id) => {
    const img = new Image()
    img.src = src
    if (className) img.classList.add(className)
    if (id) img.id = id
    return img
  }

  removeAnimation = (wormClass) => {
    const worm = document.getElementsByClassName(wormClass)[0]
    if (worm) worm.classList.remove('animate')
  }

  animate = (wormClass) => {
    const worm = document.getElementsByClassName(wormClass)[0]
    if (worm) worm.classList.add('animate')
  }

  createElement = (tag, className, id, content) => {
    const element = document.createElement(tag)
    if (typeof className === 'string') element.classList.add(className)
    if (Array.isArray(className)) {
      for (const name of className) {
        element.classList.add(name)
      }
    }
    if (id) element.id = id
    if (content) element.innerText = content
    return element
  }

  getElement = (selector) => {
    return document.querySelector(selector)
  }

  updateElement = (selector, val) => {
    const elem = this.getElement(selector)
    if (elem) elem.innerText = val
  }

  clearElement = (selector) => {
    const elem = this.getElement(selector)
    if (elem) elem.innerText = ''
  }

  renderGame = () => {
    const game = this.createElement('div', 'game', 'game')
    document.body.appendChild(game)
  }

  renderTitle = () => {
    const title = this.createElement('div', 'title', 'title'),
      heading = this.createElement('h1', null, null, 'CHICKEN MEETS WORM'),
      game = this.getElement('#game')

    game.append(title)
    title.append(heading)
  }

  renderWorld = () => {
    const worldWrapper = this.createElement(
        'div',
        'world-wrapper',
        'world-wrapper'
      ),
      world = this.createElement('canvas', null, 'world'),
      { width, height } = this.worldSize,
      game = this.getElement('#game')

    world.width = this.worldSize.width
    world.height = this.worldSize.height
    game.append(worldWrapper)
    worldWrapper.append(world)
    worldWrapper.style.width = width + 2 + 'px'
    worldWrapper.style.height = height + 2 + 'px'
  }

  renderLegend = () => {
    const legend = this.createElement('div', 'legend', 'legend'),
      worldWrapper = this.getElement('#world-wrapper')
    worldWrapper.append(legend)
  }

  renderEnergy() {
    const legend = this.getElement('#legend'),
      energyWrapper = this.createElement(
        'div',
        'energy-wrapper',
        'energy-wrapper'
      )

    legend.appendChild(energyWrapper)
    this.updateEnergyBar(5)
  }

  renderChain() {
    const chainWrapper = this.createElement('div', 'chain-wrapper'),
      countImg = this.createImage(childCountImg, 'image', 'chain-count'),
      chain = this.createElement('span', 'legend-text', 'chain'),
      legend = this.getElement('#legend')

    legend.append(chainWrapper)
    chainWrapper.append(countImg)
    chainWrapper.append(chain)
  }

  updateEnergyBar(count) {
    const eW = this.getElement('#energy-wrapper'),
      i = Math.min(count, 5) * 2

    if (eW.childElementCount > i) {
      while (eW.childElementCount > i) {
        if (eW.childElementCount === 0) return
        eW.removeChild(eW.lastChild)
      }
    } else if (eW.childElementCount < i) {
      let left = true,
        wormCount = eW.childElementCount

      if (wormCount % 2 !== 0) {
        eW.append(this.createImage(wormRight, 'worm-right'))
        wormCount++
      }

      while (wormCount < i) {
        const wormL = this.createImage(wormLeft, 'worm-left'),
          wormR = this.createImage(wormRight, 'worm-right')

        if (left) {
          eW.append(wormL)
          left = false
        } else if (!left) {
          eW.append(wormR)
          left = true
        }
        wormCount++
      }
    }
  }

  renderScore() {
    const score = this.createElement('div', ['legend-text', 'score'], 'score'),
      legend = this.getElement('#legend')

    legend.append(score)
  }

  renderGameEnd = (handleClickReplay, score, highScore) => {
    const gameEndWrapper = this.createElement('div', 'end-wrapper'),
      gameEnd = this.createElement('div', 'game-end'),
      worldWrapper = this.getElement('#world-wrapper')

    gameEndWrapper.style.width = this.worldSize.width + 4 + 'px'
    worldWrapper.append(gameEndWrapper)
    gameEndWrapper.append(gameEnd)
    gameEndWrapper.style.top = 98 + this.worldSize.height / 4 + 'px'

    this.renderGameOverMessage()
    this.renderEndScore(score, highScore)
    this.renderReplayButton(handleClickReplay)
  }

  clearGameEnd = () => {
    const gameEnd = this.getElement('.end-wrapper'),
      worldWrapper = this.getElement('.world-wrapper')

    if (gameEnd) worldWrapper.removeChild(gameEnd)
  }

  renderGameOverMessage = () => {
    const message = this.createElement('div', 'game-over', null, 'Game Over!'),
      gameEnd = this.getElement('.game-end')

    gameEnd.append(message)
  }

  renderReplayButton = (handleClickReplay) => {
    const button = this.createElement('button', 'btn', 'replay'),
      gameEnd = this.getElement('.game-end')

    button.innerText = 'Replay'
    button.addEventListener('click', handleClickReplay)
    gameEnd.append(button)
  }

  renderEndScore = (score, highScore) => {
    const endScoreWrapper = this.createElement('div', 'wrapper'),
      endScoreLabel = this.createElement(
        'span',
        'score-label',
        null,
        'Your score: '
      ),
      endScore = this.createElement(
        'span',
        'score',
        'end-score',
        score.toString()
      ),
      bestScoreWrapper = this.createElement('div', 'wrapper'),
      bestScoreLabel = this.createElement(
        'span',
        'score-label',
        null,
        'Best score: '
      ),
      bestScore = this.createElement(
        'span',
        'score',
        'best-score',
        highScore.toString()
      ),
      gameEnd = this.getElement('.game-end')

    endScoreWrapper.append(endScoreLabel)
    endScoreWrapper.append(endScore)
    bestScoreWrapper.append(bestScoreLabel)
    bestScoreWrapper.append(bestScore)
    gameEnd.append(endScoreWrapper)
    gameEnd.append(bestScoreWrapper)
  }
}
