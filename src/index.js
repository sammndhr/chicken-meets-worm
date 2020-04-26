import Display from './Display.js'
import Game from './Game'

const game = new Game(new Display({ width: 400, height: 600 }))
game.init()
