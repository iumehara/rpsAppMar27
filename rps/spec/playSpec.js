const {Requests, Round} = require('../src/rps')

describe('playTest', () => {
    let observer
    let spyRepo

    beforeEach(() => {
        spyRepo = jasmine.createSpyObj('repo', ['save'])
    })

    describe('saving after playing rounds', () => {
        it('saves an invalid game result', () => {
            let observer = jasmine.createSpyObj('observer', ['noGame'])


            new Requests().play('rock', 'sailboat', observer, spyRepo)


            expect(spyRepo.save).toHaveBeenCalledWith(
                new Round('rock', 'sailboat', 'invalid')
            )
        })

        it('saves a p1Wins game result', () => {
            let observer = jasmine.createSpyObj('observer', ['p1Wins'])


            new Requests().play('rock', 'scissors', observer, spyRepo)


            expect(spyRepo.save).toHaveBeenCalledWith(
                new Round('rock', 'scissors', 'p1Wins')
            )
        })

        it('saves a p2Wins game result', () => {
            let observer = jasmine.createSpyObj('observer', ['p2Wins'])


            new Requests().play('scissors', 'rock', observer, spyRepo)


            expect(spyRepo.save).toHaveBeenCalledWith(
                new Round('scissors', 'rock', 'p2Wins')
            )
        })

        it('saves a tie game result', () => {
            let observer = jasmine.createSpyObj('observer', ['draw'])


            new Requests().play('scissors', 'scissors', observer, spyRepo)


            expect(spyRepo.save).toHaveBeenCalledWith(
                new Round('scissors', 'scissors', 'tie')
            )
        })
    })

    describe('p1 wins scenarios', () => {
        beforeEach(() => {
            observer = jasmine.createSpyObj('observer', ['p1Wins'])
        })

        it('play rock and scissors', () => {
            let requests = new Requests()
            requests.play('rock', 'scissors', observer, spyRepo)
            expect(observer.p1Wins).toHaveBeenCalled()
        })

        it('play paper and rock', () => {
            let requests = new Requests()
            requests.play('paper', 'rock', observer, spyRepo)
            expect(observer.p1Wins).toHaveBeenCalled()
        })

        it('play scissors and paper', () => {
            let requests = new Requests()
            requests.play('scissors', 'paper', observer, spyRepo)
            expect(observer.p1Wins).toHaveBeenCalled()
        })
    })
    describe('p2 wins scenarios', () => {
        beforeEach(() => {
            observer = jasmine.createSpyObj('observer', ['p2Wins'])
        })

        it('play scissors and rock', () => {
            let requests = new Requests()
            requests.play('scissors', 'rock', observer, spyRepo)
            expect(observer.p2Wins).toHaveBeenCalled()
        })

        it('play rock and paper', () => {
            let requests = new Requests()
            requests.play('rock', 'paper', observer, spyRepo)
            expect(observer.p2Wins).toHaveBeenCalled()
        })

        it('play paper and scissors', () => {
            let requests = new Requests()
            requests.play('paper', 'scissors', observer, spyRepo)
            expect(observer.p2Wins).toHaveBeenCalled()
        })
    })

    describe('draw scenarios', () => {
        beforeEach(() => {
            observer = jasmine.createSpyObj('observer', ['draw'])
        })

        it('both play scissors', () => {
            let requests = new Requests()
            requests.play('scissors', 'scissors', observer, spyRepo)
            expect(observer.draw).toHaveBeenCalled()
        })

        it('both play rock', () => {
            let requests = new Requests()
            requests.play('rock', 'rock', observer, spyRepo)
            expect(observer.draw).toHaveBeenCalled()
        })

        it('both play paper', () => {
            let requests = new Requests()
            requests.play('rock', 'rock', observer, spyRepo)
            expect(observer.draw).toHaveBeenCalled()
        })
    })

    describe('no game scenarios', () => {
        beforeEach(() => {
            observer = jasmine.createSpyObj('observer', ['noGame'])
        })

        it('play inoshishi', () => {
            let requests = new Requests()
            requests.play('scissors', 'inoshishi', observer, spyRepo)
            expect(observer.noGame).toHaveBeenCalled()
        })

        it('play random', () => {
            let requests = new Requests()
            requests.play('scissors', Math.random().toString(), observer, spyRepo)
            expect(observer.noGame).toHaveBeenCalled()
        })
    })
})