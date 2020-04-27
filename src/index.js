import DOMDisplay from './DOMDisplay.js'
import Game from './Game'

const game = new Game(
  new DOMDisplay({
    width: window.innerWidth / 1.2,
    height: window.innerHeight / 1.2,
  })
)
game.init()
