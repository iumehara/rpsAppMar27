class Requests {
  play(throw1, throw2, observer) {

    let isValidThrow = (targetThrow) => {
      return targetThrow === 'rock' || targetThrow === 'scissors' || targetThrow === 'paper'
    }

    if (!isValidThrow(throw1) || !isValidThrow(throw2)) {
      observer.noGame()
      return
    }

    if (throw1 === throw2) {
      observer.draw()
      return
    }

    if ((throw1 === 'rock' && throw2 === 'scissors') ||
        (throw1 === 'paper' && throw2 === 'rock') ||
        (throw1 === 'scissors' && throw2 === 'paper')) {
      observer.p1Wins()
    } else {
      observer.p2Wins()
    }

  }
}

module.exports = {Requests}