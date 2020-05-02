import logo from '../imgs/logo.png'
import DOMDisplay from './DOMDisplay'

export default class Intro extends DOMDisplay {
  constructor(game, worldWrapper, worldSize) {
    super(worldSize)
    this.game = game
    this.worldWrapper = worldWrapper
    this.introWrapper = null
  }

  renderTutorialButton = (handleClickTutorial) => {
    const button = this.createElement('button', 'btn', 'tutorial')
    button.innerText = 'Tutorial'
    button.addEventListener('click', handleClickTutorial)
    this.introWrapper.append(button)
  }

  renderStartLink = (handleClickStart) => {
    const link = this.createElement('a', 'start', 'start')
    link.innerText = 'Tutorials r for noobs.'
    link.addEventListener('click', handleClickStart)
    this.introWrapper.append(link)
  }

  renderIntro = () => {
    const introWrapper = this.createElement('div', 'intro-wrapper')
    const introPic = this.createImage(logo, 'logo')
    const intro = this.createElement('div', 'intro')
    const introMessage = this.createElement(
      'span',
      'intro-message',
      null,
      'Feast on worms, protect your children!'
    )
    this.worldWrapper.append(introWrapper)

    intro.append(introPic)
    intro.append(introMessage)
    introWrapper.append(intro)
    introWrapper.style.width = this.worldSize.width + 4 + 'px'
    introWrapper.style.top = 98 + this.worldSize.height / 6 + 'px'
    this.introWrapper = introWrapper
  }

  clearIntro = () => {
    this.worldWrapper.removeChild(this.introWrapper)
  }
}
