const {Round} = require("../src/rps")
const {FakeHistoryRepo} = require('../src/fakeHistoryRepo')

describe('fake history repo', () => {
    let historyRepo
    beforeEach(() => {
        historyRepo = new FakeHistoryRepo()
    })
    describe('no items added', () => {
        it('is empty', () => {
            expect(historyRepo.isEmpty()).toEqual(true)
            expect(historyRepo.getAll().length).toEqual(0)
        })
    })
    describe('1 item added', () => {
        beforeEach(() => {
            historyRepo.save(new Round('scissors', 'paper', 'Player 1 Wins'))
        })
        it('is not empty', () => {
            expect(historyRepo.isEmpty()).toEqual(false)
        })
        it('returns list', () => {
            expect(historyRepo.getAll()).toEqual([
                new Round('scissors', 'paper', 'Player 1 Wins')
            ])
        })
    })
    describe('more items added', () => {
        beforeEach(() => {
            historyRepo.save(new Round('scissors', 'paper', 'Player 1 Wins'))
            historyRepo.save(new Round('rock', 'paper', 'Player 2 Wins'))
        })
        it('is not empty', () => {
            expect(historyRepo.isEmpty()).toEqual(false)
        })
        it('returns list', () => {
            expect(historyRepo.getAll()).toEqual([
                new Round('scissors', 'paper', 'Player 1 Wins'),
                new Round('rock', 'paper', 'Player 2 Wins')
            ])
        })
    })
})
