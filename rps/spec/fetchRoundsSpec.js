const {Requests, Round} = require('../src/rps')

describe('fetch rounds', () => {
    describe('no rounds have been played', () => {
        it('tells the observer that there are no rounds', () => {
            let observer = jasmine.createSpyObj('observer', ['rounds']);
            let stubRepo = {
                isEmpty: () => {
                    return true
                },
                getAll: () => {
                    throw new Error("😢")
                }
            }


            new Requests(stubRepo).fetchRounds(observer)


            expect(observer.rounds).toHaveBeenCalledWith([])
        })
    })

    describe('rounds have been played', () => {
        it('tells the observer rounds have been played', () => {
            let observer = jasmine.createSpyObj('observer', ['rounds']);
            let stubRepo = {
                isEmpty: () => {
                    return false
                },
                getAll: () => {
                    return [
                        new Round('rock', 'scissors', 'Player 1 Wins')
                    ]
                }
            }


            new Requests(stubRepo).fetchRounds(observer)


            expect(observer.rounds).toHaveBeenCalledWith(
                [
                    new Round('rock', 'scissors', 'Player 1 Wins')
                ]
            )
        })
    })
});