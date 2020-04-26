import Display from './Display.js'
import Game from './Game'

const game = new Game(
  new Display({
    width: window.innerWidth / 2,
    height: window.innerHeight / 1.2,
  })
)
game.init()
