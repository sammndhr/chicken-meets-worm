export default class Score {
  constructor(display) {
    this.display = display
    this.score = 0
    this.highScore = 0
  }

  setScore = (score) => {
    this.score = score
  }

  setHighScore = (score) => {
    this.highScore = score
  }

  reset = () => {
    this.setScore(0)
    this.updateScore()
  }

  calculateScore = (childCount) => {
    let chainCount = 1 + childCount //count parent
    let scoreToAdd = chainCount * chainCount * 10
    const newScore = this.score + scoreToAdd
    this.setScore(newScore)
    this.updateScore()
  }

  calculateHighScore = () => {
    const highScore = Math.max(this.score, this.highScore)
    this.setHighScore(highScore)
  }

  updateScore = () => {
    this.display.updateElement('#score', this.score)
  }

  init = () => {
    this.updateScore()
  }
}
