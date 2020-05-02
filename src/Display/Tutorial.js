import DOMDisplay from './DOMDisplay'

export default class Tutorial extends DOMDisplay {
  constructor(game, world, worldWrapper, worldSize, legend) {
    super(worldSize)
    this.game = game
    this.world = world
    this.worldWrapper = worldWrapper
    this.introWrapper = null
    this.legend = legend
    this.tutorialMsgWrapper = null
    this.settimeout = null
  }

  changeMessage = (message, time) => {
    this.settimeout = setTimeout(() => {
      this.updateElement('#tut-msg-0', message)
    }, time)
  }

  renderMoveParentTut = () => {
    const legend = this.legend
    if (legend) legend.style.display = 'none'
    this.tutorialMsgWrapper = this.createElement('div', 'tutorial-wrapper')
    const message1 = this.createElement(
      'div',
      'tutorial-message',
      'tut-msg-0',
      'Move your mouse to move the chicken.'
    )
    const message2 = this.createElement(
      'div',
      'tutorial-msg-keypress',
      'tut-msg-1',
      'Hit enter to continue and space to skip tutorial.'
    )
    this.worldWrapper.append(this.tutorialMsgWrapper)
    this.worldWrapper.append(message2)
    this.tutorialMsgWrapper.style.width = this.worldSize.width + 4 + 'px'
    this.tutorialMsgWrapper.style.top = '120px'

    message2.style.width = this.worldSize.width + 4 + 'px'
    message2.style.top = 65 + this.worldSize.height + 'px'
    this.tutorialMsgWrapper.append(message1)
  }

  renderChildrenTut = () => {
    if (this.legend) this.legend.style.display = 'block'

    this.updateElement(
      '#tut-msg-0',
      'Hover over the baby chicks to make them stick close to you.'
    )
    this.changeMessage(
      'The longer your chain, the higher your score increments.',
      3800
    )
  }

  renderPredatorTut = () => {
    clearTimeout(this.settimeout)
    const energyWrapper = this.getElement('#energy-wrapper')
    // if (energyWrapper) energyWrapper.style.display = 'none'
    this.updateElement(
      '#tut-msg-0',
      "Watch out for predators. Nyan-chan didn't get fat eating grass."
    )
    this.changeMessage(
      "The worms show your health. Every encounter with a cat costs you 1 worm. The game ends when you're out of worms.",
      4000
    )
  }

  renderClickParentTut = () => {
    clearTimeout(this.settimeout)
    this.updateElement(
      '#tut-msg-0',
      'CLICK to gather all your children in one place for the cheap price of half a worm.'
    )
    this.changeMessage(
      "Do this sparingly, cause you wont't be able to move while clicking!",
      5000
    )
  }

  renderWormTut = () => {
    clearTimeout(this.settimeout)
    this.updateElement(
      '#tut-msg-0',
      'Replenish your energy by feasting on delicious worms. You can have some extra for the tutorial.'
    )
  }
}
