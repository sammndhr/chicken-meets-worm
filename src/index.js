import DOMDisplay from './Display/DOMDisplay.js'
import Intro from './Display/Intro.js'
import Tutorial from './Display/Tutorial.js'
import Game from './Game'
import './style.css'
import TutorialGame from './TutorialGame'

const width = Math.min(window.innerWidth / 1.2, 1200),
  height = Math.min(window.innerHeight / 1.2, 750),
  display = new DOMDisplay({ width, height }),
  game = new Game(display)

display.renderGame()
display.renderTitle()
display.renderWorld()

const introDisplay = new Intro(display.worldSize)

const tutorialDisplay = new Tutorial(display.worldSize)

function handleClickTutorial() {
  const tutorialGame = new TutorialGame(tutorialDisplay)
  introDisplay.clearIntro()
  tutorialGame.initTutorial()
}

function handleClickStart() {
  introDisplay.clearIntro()
  game.init()
}

introDisplay.renderIntro()
introDisplay.renderTutorialButton(handleClickTutorial)
introDisplay.renderStartLink(handleClickStart)
