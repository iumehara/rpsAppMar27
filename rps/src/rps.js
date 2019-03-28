class Requests {
    player2Wins(p1hand, p2hand) {
        return p1hand === 'scissors' && p2hand === 'rock' ||
            p1hand === 'paper' && p2hand === 'scissors' ||
            p1hand === 'rock' && p2hand === 'paper';
    }
    invalid(p1hand, p2hand) {
        const validHands = ['scissors', 'rock', 'paper'];
        return !validHands.includes(p1hand) ||
            !validHands.includes(p2hand);
    }
    play(p1hand, p2hand, observer) {
        if (this.invalid(p1hand, p2hand)) {
            observer.invalid();
        }  else if (p1hand === p2hand) {
            observer.draw();
        } else if (this.player2Wins(p1hand, p2hand)) {
            observer.p2Wins();
        } else {
            observer.p1Wins();
        }
    }
}

module.exports = {Requests};
