class Requests {
    play(p1Hand, p2Hand, observer) {
        new PlayRoundRequest(p1Hand, p2Hand, observer).process()
    }
}

class PlayRoundRequest {
    constructor(p1Hand, p2Hand, observer) {
        this.p1Hand = p1Hand
        this.p2Hand = p2Hand
        this.observer = observer
    }

    process() {
        if (this.invalidThrow(this.p1Hand) || this.invalidThrow(this.p2Hand)) {
            this.observer.noGame()
        } else if (this.tie()) {
            this.observer.draw()
        } else if (this.p2Wins()) {
            this.observer.p2Wins()
        } else {
            this.observer.p1Wins()
        }
    }

    tie() {
        return this.p1Hand == this.p2Hand
    }

    p2Wins() {
        return this.p1Hand === 'scissors' && this.p2Hand === 'rock' ||
            this.p1Hand === 'paper' && this.p2Hand === 'scissors' ||
            this.p1Hand === 'rock' && this.p2Hand === 'paper'
    }

    invalidThrow(hand) {
        return !['scissors', 'rock', 'paper'].includes(hand)
    }
}

module.exports = {
    Requests
}
