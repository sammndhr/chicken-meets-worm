import DOMDisplay from './DOMDisplay.js'
import Game from './Game'

const game = new Game(
  new DOMDisplay({
    width: Math.min(window.innerWidth / 1.2, 1200),
    height: Math.min(window.innerHeight / 1.2, 750),
  })
)

game.init()
