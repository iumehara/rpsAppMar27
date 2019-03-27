class Requests {
    play(p1hand, p2hand, observer) {
        const validHands = ['scissors', 'rock', 'paper']
        if (!validHands.includes(p1hand) ||
            !validHands.includes(p2hand)) {
            observer.noGame()
        }  else if (p1hand === p2hand) {
            observer.draw()
        } else if (p1hand === 'scissors' && p2hand === 'rock' ||
            p1hand === 'paper' && p2hand === 'scissors' ||
            p1hand === 'rock' && p2hand === 'paper') {
            observer.p2Wins()
        } else {
            observer.p1Wins()
        }
    }
}

module.exports = {Requests}
