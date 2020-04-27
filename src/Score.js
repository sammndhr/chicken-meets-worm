export default class Score {
  constructor(display) {
    this.display = display
    this.score = 0
  }

  setScore = (score) => {
    this.score = score
  }

  calculateScore = (childCount) => {
    let chainCount = 1 + childCount //count parent
    let scoreToAdd = chainCount * chainCount * 10
    const newScore = this.score + scoreToAdd
    this.setScore(newScore)
    this.updateScore()
  }

  updateScore = () => {
    this.display.updateElement('#score', this.score)
  }

  init = () => {
    this.updateScore()
  }
}
