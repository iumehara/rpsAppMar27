const {Requests, Round} = require('../src/rps')

describe('fetchResults', () => {
    describe('when no one has played', () => {
        it('tells the observer there are no rounds', () => {
            let observer = jasmine.createSpyObj('observer', ['noGame'])
            let stubRepo = {
                isEmpty: () => {
                    return true
                }
            }


            new Requests().fetchResults(observer, stubRepo)


            expect(observer.noGame).toHaveBeenCalled()
        })
    })

    describe('rounds have been played', () => {
        it('tells the observer that rounds have been played', () => {
            let observer = jasmine.createSpyObj('observer', ['rounds'])
            let stubRepo = {
                isEmpty: () => {
                    return false
                },
                getAll: () => {
                    return [
                        new Round('rock', 'sailboat', 'invalid')
                    ]
                }
            }


            new Requests().fetchResults(observer, stubRepo)


            expect(observer.rounds).toHaveBeenCalledWith(
                [
                    new Round('rock', 'sailboat', 'invalid')
                ]
            )
        })
    })
})