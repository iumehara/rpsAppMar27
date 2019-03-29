const {Requests, Round} = require('../src/rps')
const {FakeHistoryRepo} = require('../src/fakeHistoryRepo')

describe('fetch rounds', () => {
    describe('no rounds have been played', () => {
        it('tells the observer that there are no rounds', () => {
            const observer = jasmine.createSpyObj('observer', ['rounds']);
            const fakeRepo = new FakeHistoryRepo()


            new Requests(fakeRepo).fetchRounds(observer)


            expect(observer.rounds).toHaveBeenCalledWith(
                []
            )
        })
    })

    describe('rounds have been played', () => {
        it('tells the observer rounds have been played', () => {
            const observer = jasmine.createSpyObj('observer', ['rounds']);
            const fakeRepo = new FakeHistoryRepo()
            fakeRepo.save(new Round('rock', 'scissors', 'Player 1 Wins'))


            new Requests(fakeRepo).fetchRounds(observer)


            expect(observer.rounds).toHaveBeenCalledWith(
                [
                    new Round('rock', 'scissors', 'Player 1 Wins')
                ]
            )
        })
    })
});