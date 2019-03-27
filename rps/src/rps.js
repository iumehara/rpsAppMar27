class Requests {
    play(p1, p2, observer) {
        if (p1 == p2) {
            observer.draw();
            return;
        }

        if (p1 == 'rock' && p2 == 'scissors'
            || p1 == 'scissors' && p2 == 'paper'
            || p1 == 'paper' && p2 == 'rock') {
            observer.p1Wins();
            return;
        }

        if (p1 == 'rock' && p2 == 'paper'
            || p1 == 'scissors' && p2 == 'rock'
            || p1 == 'paper' && p2 == 'scissors') {
            observer.p2Wins();
            return;
        }
    }
}

module.exports = {Requests};
