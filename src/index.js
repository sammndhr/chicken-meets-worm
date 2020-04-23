import Display from './Display.js'
import './style.css'

class Game extends Display {
  constructor() {
    super()
  }
  init() {
    this.createGame()
    this.printGame()
    this.printWorld()
  }
}
const game = new Game()
game.init()
