class Requests {
  playRound(p1Hand, p2Hand, observer) {
    new PlayRoundRequest(p1Hand, p2Hand, observer).process()
  }
}

class PlayRoundRequest {
  constructor(p1Hand, p2Hand, observer) {
    this.p1Hand = p1Hand
    this.p2Hand = p2Hand
    this.observer = observer
  }

  draw() {
    return this.p1Hand === this.p2Hand
  }

  noGame() {
    const validHands = ['rock', 'scissors', 'paper']
    return !validHands.includes(this.p1Hand) || !validHands.includes(this.p2Hand)
  }

  p1Wins() {
    return (this.p1Hand === 'rock' && this.p2Hand === 'scissors') ||
      (this.p1Hand === 'paper' && this.p2Hand === 'rock') ||
      (this.p1Hand === 'scissors' && this.p2Hand === 'paper')
  }

  process() {
    if (this.noGame()) {
      this.observer.noGame()
      return
    }

    if (this.draw()) {
      this.observer.draw()
      return
    }

    if (this.p1Wins()) {
      this.observer.p1Wins()
    } else {
      this.observer.p2Wins()
    }
  }
}

module.exports = {Requests}