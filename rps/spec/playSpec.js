const {Requests} = require('../src/rps')

describe('playTest', () => {
    let observer
    let spyRepo

    beforeEach(() => {
        spyRepo = jasmine.createSpyObj('repo', ['save'])
    })

    describe('saving after playing rounds', () => {
        it('saves an invalid game result', () => {
            let observer = jasmine.createSpyObj('observer', ['noGame'])
            let requests = new Requests()
            requests.play('rock', 'sailboat', observer, spyRepo)
            expect(spyRepo.save).toHaveBeenCalled()
        })
    })

    describe('p1 wins scenarios', () => {
        beforeEach(() => {
            observer = jasmine.createSpyObj('observer', ['p1Wins'])
        })

        it('play rock and scissors', () => {
            let requests = new Requests()
            requests.play('rock', 'scissors', observer)
            expect(observer.p1Wins).toHaveBeenCalled()
        })

        it('play paper and rock', () => {
            let requests = new Requests()
            requests.play('paper', 'rock', observer)
            expect(observer.p1Wins).toHaveBeenCalled()
        })

        it('play scissors and paper', () => {
            let requests = new Requests()
            requests.play('scissors', 'paper', observer)
            expect(observer.p1Wins).toHaveBeenCalled()
        })
    })
    describe('p2 wins scenarios', () => {
        beforeEach(() => {
            observer = jasmine.createSpyObj('observer', ['p2Wins'])
        })

        it('play scissors and rock', () => {
            let requests = new Requests()
            requests.play('scissors', 'rock', observer)
            expect(observer.p2Wins).toHaveBeenCalled()
        })

        it('play rock and paper', () => {
            let requests = new Requests()
            requests.play('rock', 'paper', observer)
            expect(observer.p2Wins).toHaveBeenCalled()
        })

        it('play paper and scissors', () => {
            let requests = new Requests()
            requests.play('paper', 'scissors', observer)
            expect(observer.p2Wins).toHaveBeenCalled()
        })
    })

    describe('draw scenarios', () => {
        beforeEach(() => {
            observer = jasmine.createSpyObj('observer', ['draw'])
        })

        it('both play scissors', () => {
            let requests = new Requests()
            requests.play('scissors', 'scissors', observer)
            expect(observer.draw).toHaveBeenCalled()
        })

        it('both play rock', () => {
            let requests = new Requests()
            requests.play('rock', 'rock', observer)
            expect(observer.draw).toHaveBeenCalled()
        })

        it('both play paper', () => {
            let requests = new Requests()
            requests.play('rock', 'rock', observer)
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