class FakeHistoryRepo {
    constructor() {
        this.rounds = []
    }

    isEmpty() {
        return this.rounds.length === 0
    }

    getAll() {
        return this.rounds;
    }

    save(round) {
        this.rounds.push(round)
    }
}

module.exports = {FakeHistoryRepo}
