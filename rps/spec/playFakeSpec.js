const {Requests, Round} = require('../src/rps')
const {FakeHistoryRepo} = require('../src/fakeHistoryRepo')

describe('playTest', () => {
    let observer
    let fakeRepo

    beforeEach(() => {
        fakeRepo = new FakeHistoryRepo()
    })

    describe('p1 wins scenarios', () => {
        beforeEach(() => {
            observer = jasmine.createSpyObj('observer', ['p1Wins'])
        })

        it('play rock and scissors', () => {
            let requests = new Requests(fakeRepo)
            requests.play('rock', 'scissors', observer)
            expect(observer.p1Wins).toHaveBeenCalled()
        })

        it('play paper and rock', () => {
            let requests = new Requests(fakeRepo)
            requests.play('paper', 'rock', observer)
            expect(observer.p1Wins).toHaveBeenCalled()
        })

        it('play scissors and paper', () => {
            let requests = new Requests(fakeRepo)
            requests.play('scissors', 'paper', observer)
            expect(observer.p1Wins).toHaveBeenCalled()
        })
    })
    describe('p2 wins scenarios', () => {
        beforeEach(() => {
            observer = jasmine.createSpyObj('observer', ['p2Wins'])
        })

        it('play scissors and rock', () => {
            let requests = new Requests(fakeRepo)
            requests.play('scissors', 'rock', observer)
            expect(observer.p2Wins).toHaveBeenCalled()
        })

        it('play rock and paper', () => {
            let requests = new Requests(fakeRepo)
            requests.play('rock', 'paper', observer)
            expect(observer.p2Wins).toHaveBeenCalled()
        })

        it('play paper and scissors', () => {
            let requests = new Requests(fakeRepo)
            requests.play('paper', 'scissors', observer)
            expect(observer.p2Wins).toHaveBeenCalled()
        })
    })

    describe('draw scenarios', () => {
        beforeEach(() => {
            observer = jasmine.createSpyObj('observer', ['draw'])
        })

        it('both play scissors', () => {
            let requests = new Requests(fakeRepo)
            requests.play('scissors', 'scissors', observer)
            expect(observer.draw).toHaveBeenCalled()
        })

        it('both play rock', () => {
            let requests = new Requests(fakeRepo)
            requests.play('rock', 'rock', observer)
            expect(observer.draw).toHaveBeenCalled()
        })

        it('both play paper', () => {
            let requests = new Requests(fakeRepo)
            requests.play('rock', 'rock', observer)
            expect(observer.draw).toHaveBeenCalled()
        })
    })

    describe('invalid scenarios', () => {
        beforeEach(() => {
            observer = jasmine.createSpyObj('observer', ['noGame'])
        })

        it('play inoshishi', () => {
            let requests = new Requests(fakeRepo)
            requests.play('scissors', 'inoshishi', observer)
            expect(observer.noGame).toHaveBeenCalled()
        })

        it('play random', () => {
            let requests = new Requests(fakeRepo)
            requests.play('scissors', Math.random().toString(), observer)
            expect(observer.noGame).toHaveBeenCalled()
        })
    })

    describe('saving after playing a round', () => {
        let observer
        beforeEach(() => {
            observer = jasmine.createSpyObj('observer', ['noGame', 'p1Wins', 'p2Wins', 'draw'])
        })

        it('saves an invalid game result', () => {
            let requests = new Requests(fakeRepo)


            requests.play('scissors', 'inoshishi', observer)


            expect(fakeRepo.getAll()).toEqual([
                new Round('scissors', 'inoshishi', 'No Game')
            ])
        })

        it('saves a Player 1 Wins game result', () => {
            let requests = new Requests(fakeRepo)


            requests.play('scissors', 'paper', observer)


            expect(fakeRepo.getAll()).toEqual([
                new Round('scissors', 'paper', 'Player 1 Wins')
            ])
        })

        it('saves a Player 2 Wins game result', () => {
            let requests = new Requests(fakeRepo)


            requests.play('paper', 'scissors', observer)


            expect(fakeRepo.getAll()).toEqual([
                new Round('paper', 'scissors', 'Player 2 Wins')
            ])
        })

        it('saves a draw game result', () => {
            let requests = new Requests(fakeRepo)


            requests.play('paper', 'paper', observer)


            expect(fakeRepo.getAll()).toEqual([
                new Round('paper', 'paper', 'Draw')
            ])
        })
    })
})