class Requests {
    play(p1hand, p2hand, observer) {
        const valid_hands = ['scissors', 'rock', 'paper'];
        if (!valid_hands.includes(p1hand) ||
            !valid_hands.includes(p2hand)) {
            observer.invalid();
        }  else if (p1hand === p2hand) {
            observer.draw();
        } else if (p1hand === 'scissors' && p2hand === 'rock' ||
            p1hand === 'paper' && p2hand === 'scissors' ||
            p1hand === 'rock' && p2hand === 'paper') {
            observer.p2Wins();
        } else {
            observer.p1Wins();
        }
    }
}

module.exports = {Requests};
