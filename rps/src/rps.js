class Requests {
    play(p1hand, p2hand, observer) {
        new PlayRoundRequest(p1hand, p2hand, observer).process();
    }
}

class PlayRoundRequest {
    constructor(p1hand, p2hand, observer) {
        this.p1hand = p1hand;
        this.p2hand = p2hand;
        this.observer = observer;
    }
    player2Wins() {
        return this.p1hand === 'scissors' && this.p2hand === 'rock' ||
            this.p1hand === 'paper' && this.p2hand === 'scissors' ||
            this.p1hand === 'rock' && this.p2hand === 'paper'
    }
    noGame() {
        const validHands = ['scissors', 'rock', 'paper']
        return !validHands.includes(this.p1hand) ||
            !validHands.includes(this.p2hand)
    }
    draw() {
        return this.p1hand === this.p2hand
    }
    process() {
        if (this.noGame()) {
            this.observer.noGame()
        }  else if (this.draw()) {
            this.observer.draw()
        } else if (this.player2Wins()) {
            this.observer.p2Wins()
        } else {
            this.observer.p1Wins()
        }
    }
}

module.exports = {Requests}
