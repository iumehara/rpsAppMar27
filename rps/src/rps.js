class Requests {

    play(p1Hand, p2Hand, observer) {
         new PlayRoundRequest(p1Hand, p2Hand, observer).process();
    }

}

class PlayRoundRequest {
    constructor(p1Hand, p2Hand, observer) {
        this.p1Hand = p1Hand;
        this.p2Hand = p2Hand;
        this.observer = observer;
    }

    process() {
        if (this.isValidHand()) {
            this.observer.noGame();
            return;
        }

        if (this.isDraw()) {
            this.observer.draw();
            return;
        }

        if (this.isP1Win()) {
            this.observer.p1Wins();
            return;
        }

        if (this.isP2Win()) {
            this.observer.p2Wins();
        }
    }

    isValidHand() {
        const validHands = ['rock', 'scissors', 'paper'];
        return !validHands.includes(this.p1Hand)
            || !validHands.includes(this.p2Hand);
    }

    isDraw() {
        return this.p1Hand === this.p2Hand;
    }

    isP1Win() {
        return this.p1Hand === 'rock' && this.p2Hand === 'scissors'
            || this.p1Hand === 'scissors' && this.p2Hand === 'paper'
            || this.p1Hand === 'paper' && this.p2Hand === 'rock';
    }

    isP2Win() {
        return this.p1Hand === 'rock' && this.p2Hand === 'paper'
            || this.p1Hand === 'scissors' && this.p2Hand === 'rock'
            || this.p1Hand === 'paper' && this.p2Hand === 'scissors';
    }
}

module.exports = {Requests};
