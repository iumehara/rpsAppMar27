class Requests {
    constructor(repo) {
        this.repo = repo
    }

    play(p1hand, p2hand, observer) {
        new PlayRoundRequest(p1hand, p2hand, observer, this.repo).process();
    }

    fetchRounds(observer) {
        if (this.repo.isEmpty()) {
            observer.rounds([])
        } else {
            observer.rounds([...this.repo.getAll()])
        }
    }
}

class PlayRoundRequest {
    constructor(p1hand, p2hand, observer, repo) {
        this.p1hand = p1hand;
        this.p2hand = p2hand;
        this.observer = observer;
        this.repo = repo;
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
            this.repo.save(new Round(
                this.p1hand, this.p2hand, 'No Game'))
            this.observer.noGame()
        } else if (this.draw()) {
            this.repo.save(new Round(
                this.p1hand, this.p2hand, 'Draw'))
            this.observer.draw()
        } else if (this.player2Wins()) {
            this.repo.save(new Round(
                this.p1hand, this.p2hand, 'Player 2 Wins'))
            this.observer.p2Wins()
        } else {
            this.repo.save(new Round(
                this.p1hand, this.p2hand, 'Player 1 Wins'))
            this.observer.p1Wins()
        }
    }
}

class Round {
    constructor(p1Hand, p2Hand, result) {
        this.p1Hand = p1Hand
        this.p2Hand = p2Hand
        this.result = result
    }
}

module.exports = {Requests, Round}
