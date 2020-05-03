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

const title = display.getElement('#title')
title.addEventListener('click', handleClickTitle, false)

const introDisplay = new Intro(display.worldSize),
  tutorialDisplay = new Tutorial(display.worldSize)

function handleClickTitle() {
  location.reload()
}

function onTutorialEnd() {
  game.init()
}

function handleClickTutorial() {
  const tutorialGame = new TutorialGame(tutorialDisplay, onTutorialEnd)
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
