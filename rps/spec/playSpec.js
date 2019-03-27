// import {Requests} from "../src/rps";
const {Requests} = require('../src/rps');

describe('playTest', () => {
    let observer;

    beforeEach(() => {
        observer = jasmine.createSpyObj('observer', ['p1Wins', 'p2Wins', 'draw']);
    });

    it('return draw when play is called with rock and rock', () => {
        let requests = new Requests();
        requests.play('rock', 'rock', observer);
        expectedDraw(observer);
    })

    it('return player 1 wins when play is called with rock and scissors', () => {
        let requests = new Requests();
        requests.play('rock', 'scissors', observer);
        expectedP1Wins(observer);
    })

    it('return player 2 wins when play is called with rock and paper', () => {
        let requests = new Requests();
        requests.play('rock', 'paper', observer);
        expectedP2Wins(observer);
    })

    it('return player 2 wins when play is called with scissors and rock', () => {
        let requests = new Requests();
        requests.play('scissors', 'rock', observer);
        expectedP2Wins(observer);
    })

    it('return draw when play is called with scissors and scissors', () => {
        let requests = new Requests();
        requests.play('scissors', 'scissors', observer);
        expectedDraw(observer);
    })

    it('return player 1 wins when play is called with scissors and paper', () => {
        let requests = new Requests();
        requests.play('scissors', 'paper', observer);
        expectedP1Wins(observer);
    })

    it('return player 1 wins when play is called with paper and rock', () => {
        let requests = new Requests();
        requests.play('paper', 'rock', observer);
        expectedP1Wins(observer);
    })

    it('return player 2 wins when play is called with paper and scissors', () => {
        let requests = new Requests();
        requests.play('paper', 'scissors', observer);
        expectedP2Wins(observer);
    })

    it('return draw when play is called with paper and paper', () => {
        let requests = new Requests();
        requests.play('paper', 'paper', observer);
        expectedDraw(observer);
    })




});

function expectedP1Wins(observer) {
    expect(observer.p1Wins).toHaveBeenCalled();
    expect(observer.p2Wins).not.toHaveBeenCalled();
    expect(observer.draw).not.toHaveBeenCalled();
}

function expectedP2Wins(observer) {
    expect(observer.p1Wins).not.toHaveBeenCalled();
    expect(observer.p2Wins).toHaveBeenCalled();
    expect(observer.draw).not.toHaveBeenCalled();
}

function expectedDraw(observer) {
    expect(observer.p1Wins).not.toHaveBeenCalled();
    expect(observer.p2Wins).not.toHaveBeenCalled();
    expect(observer.draw).toHaveBeenCalled();
}

