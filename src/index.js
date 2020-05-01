import DOMDisplay from './Display/DOMDisplay.js'
import Intro from './Display/Intro.js'
import Game from './Game'
import './style.css'

const width = Math.min(window.innerWidth / 1.2, 1200),
  height = Math.min(window.innerHeight / 1.2, 750),
  display = new DOMDisplay({ width, height }),
  game = new Game(display)

display.renderGame()
display.renderTitle()
display.renderWorld()

const introDisplay = new Intro(
  display.game,
  display.worldWrapper,
  display.worldSize
)

function handleClick() {
  console.log('clicked tutorial')
}

function handleClickStart() {
  introDisplay.clearTutorial()
  game.init()
}

introDisplay.renderIntro()
introDisplay.renderTutorialButton(handleClick)
introDisplay.renderStartLink(handleClickStart)
