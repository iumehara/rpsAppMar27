class Requests {
    play(p1Hand, p2Hand, observer, repo) {
        new PlayRoundRequest(p1Hand, p2Hand, observer, repo).process()
    }

    fetchResults(observer, repo) {
        if (repo.isEmpty()) {
            observer.noGame()
        } else {
            observer.rounds(repo.getAll())
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

class PlayRoundRequest {
    constructor(p1Hand, p2Hand, observer, repo) {
        this.p1Hand = p1Hand
        this.p2Hand = p2Hand
        this.observer = observer
        this.repo = repo
    }

    process() {
        if (this.invalidThrow(this.p1Hand) || this.invalidThrow(this.p2Hand)) {
            this.repo.save(new Round(this.p1Hand, this.p2Hand, 'invalid'))
            this.observer.noGame()
        } else if (this.tie()) {
            this.repo.save(new Round(this.p1Hand, this.p2Hand, 'tie'))
            this.observer.draw()
        } else if (this.p2Wins()) {
            this.repo.save(new Round(this.p1Hand, this.p2Hand, 'p2Wins'))
            this.observer.p2Wins()
        } else {
            this.repo.save(new Round(this.p1Hand, this.p2Hand, 'p1Wins'))
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
    Requests,
    Round
}
