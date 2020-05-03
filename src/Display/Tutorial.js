import DOMDisplay from './DOMDisplay'

export default class Tutorial extends DOMDisplay {
  constructor(worldSize) {
    super(worldSize)
    this.settimeout = []
  }

  clearPrevTut = () => {
    while (this.settimeout.length) {
      clearTimeout(this.settimeout.pop())
    }
    this.clearElement('#tut-msg-1')
  }

  changeMessage = (selector, message, time) => {
    this.settimeout.push(
      setTimeout(() => {
        this.updateElement(selector, message)
      }, time)
    )
  }

  renderMoveParentTut = () => {
    const legend = this.getElement('#legend')

    if (legend) legend.style.display = 'none'

    const tutorialWrapper = this.createElement('div', 'tutorial-wrapper'),
      message1 = this.createElement(
        'div',
        'tutorial-message',
        'tut-msg-0',
        'Move your mouse to move the chicken.'
      ),
      message2 = this.createElement('div', 'tutorial-message', 'tut-msg-1'),
      worldWrapper = this.getElement('#world-wrapper')

    worldWrapper.append(tutorialWrapper)
    tutorialWrapper.style.width = this.worldSize.width + 4 + 'px'
    tutorialWrapper.style.height = this.worldSize.height + 4 + 'px'
    message2.style.width = this.worldSize.width + 4 + 'px'
    message2.style.top = this.worldSize.height - 36 + 'px'
    tutorialWrapper.append(message1)
    tutorialWrapper.append(message2)

    this.changeMessage(
      '#tut-msg-1',
      'Press SPACE to continue and ENTER to skip tutorial.',
      2500
    )
  }

  renderChildrenTut = () => {
    const legend = this.getElement('#legend')

    this.clearPrevTut()

    if (legend) legend.style.display = 'block'

    this.updateElement(
      '#tut-msg-0',
      'Hover over the baby chicks to make them stick close to you.'
    )
    this.changeMessage(
      '#tut-msg-0',
      'The longer your chain, the higher your score increments.',
      3500
    )
    this.changeMessage(
      '#tut-msg-1',
      'Press SPACE to continue and ENTER to skip tutorial.',
      6000
    )
  }

  renderPredatorTut = () => {
    this.clearPrevTut()
    this.updateElement(
      '#tut-msg-0',
      "Watch out for predators. Nyan-chan didn't get fat eating grass."
    )
    this.changeMessage(
      '#tut-msg-0',
      "The worms show your health. Every encounter with a cat costs you 1 worm. The game ends when you're out of worms.",
      5000
    )
    this.changeMessage(
      '#tut-msg-1',
      'Press SPACE to continue and ENTER to skip tutorial.',
      8000
    )
  }

  renderClickParentTut = () => {
    this.clearPrevTut()
    this.updateElement(
      '#tut-msg-0',
      'CLICK to gather all your children in one place for the cheap price of half a worm.'
    )
    this.changeMessage(
      '#tut-msg-0',
      "Do this sparingly, cause you won't be able to move while clicking! And you can't use it if you don't have enough worms.",
      4000
    )
    this.changeMessage(
      '#tut-msg-1',
      'Press SPACE to continue and ENTER to skip tutorial.',
      7000
    )
  }

  renderWormTut = () => {
    this.clearPrevTut()
    this.updateElement(
      '#tut-msg-0',
      'Replenish your energy by feasting on delicious worms.'
    )
    this.changeMessage(
      '#tut-msg-0',
      'You can have some extra for the tutorial.',
      3500
    )
    this.changeMessage(
      '#tut-msg-0',
      "Congratulations you're no longer a noob! Press ENTER to start!",
      6000
    )
  }

  clearTutorial = () => {
    this.clearPrevTut()
    const worldWrapper = this.getElement('#world-wrapper'),
      legend = this.getElement('#legend'),
      tutorialWrapper = this.getElement('.tutorial-wrapper')

    if (legend) legend.style.display = 'unset'
    if (tutorialWrapper) worldWrapper.removeChild(tutorialWrapper)
  }
}
