const {Requests, Round} = require('../src/rps')

describe('fetchResults', () => {
    describe('when no one has played', () => {
        it('tells the observer there are no rounds', () => {
            let observer = jasmine.createSpyObj('observer', ['noGame'])


            new Requests().fetchResults(observer)


            expect(observer.noGame).toHaveBeenCalled()
        })
    })
})