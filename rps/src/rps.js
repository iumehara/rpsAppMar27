class Requests {
  play(p1Hand, p2Hand, observer) {

    let isValidThrow = (targetThrow) => {
      return targetThrow === 'rock' || targetThrow === 'scissors' || targetThrow === 'paper'
    }

    if (!isValidThrow(p1Hand) || !isValidThrow(p2Hand)) {
      observer.noGame()
      return
    }

    if (p1Hand === p2Hand) {
      observer.draw()
      return
    }

    if ((p1Hand === 'rock' && p2Hand === 'scissors') ||
        (p1Hand === 'paper' && p2Hand === 'rock') ||
        (p1Hand === 'scissors' && p2Hand === 'paper')) {
      observer.p1Wins()
    } else {
      observer.p2Wins()
    }

  }
}

module.exports = {Requests}