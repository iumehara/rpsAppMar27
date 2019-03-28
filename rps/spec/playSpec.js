// import {Requests} from  "../src/rps.js"
const {Requests} = require('../src/rps')

describe('playTest', () => {

  beforeEach(() =>{
  })

  it('returns player 1 wins when play is called with rock and scissors', () => {
    let observer = jasmine.createSpyObj('observer', ['p1Wins'])

    let requests = new Requests()
    requests.playRound('rock', 'scissors', observer)
    expect(observer.p1Wins).toHaveBeenCalled()
  })

  it('returns player 2 wins when play is called with scissors and rock', () => {
    let observer = jasmine.createSpyObj('observer', ['p2Wins'])

    let requests = new Requests()
    requests.playRound('scissors', 'rock', observer)
    expect(observer.p2Wins).toHaveBeenCalled()
  })

  it('returns draw when play is called with scissors and sissors', () => {
    let observer = jasmine.createSpyObj('observer', ['draw'])

    let requests = new Requests()
    requests.playRound('scissors', 'scissors', observer)
    expect(observer.draw).toHaveBeenCalled()
  })

  it('returns player 1 wins when play is called with paper and rock', () => {
    let observer = jasmine.createSpyObj('observer', ['p1Wins'])

    let requests = new Requests()
    requests.playRound('paper', 'rock', observer)
    expect(observer.p1Wins).toHaveBeenCalled()
  })

  it('returns player 2 wins when play is called with rock and paper', () => {
    let observer = jasmine.createSpyObj('observer', ['p2Wins'])

    let requests = new Requests()
    requests.playRound('rock', 'paper', observer)
    expect(observer.p2Wins).toHaveBeenCalled()
  })

  it('returns draw when play is called with rock and rock', () => {
    let observer = jasmine.createSpyObj('observer', ['draw'])

    let requests = new Requests()
    requests.playRound('rock', 'rock', observer)
    expect(observer.draw).toHaveBeenCalled()
  })

  it('returns player 1 wins when play is called with scissors and paper', () => {
    let observer = jasmine.createSpyObj('observer', ['p1Wins'])

    let requests = new Requests()
    requests.playRound('scissors', 'paper', observer)
    expect(observer.p1Wins).toHaveBeenCalled()

  })

  it('returns player 2 wins when play is called with paper and scissors', () => {
    let observer = jasmine.createSpyObj('observer', ['p2Wins'])
    let requests = new Requests()
    requests.playRound('paper', 'scissors', observer)
    expect(observer.p2Wins).toHaveBeenCalled()
  })

  it('returns draw when play is called with paper and paper', () => {
    let observer = jasmine.createSpyObj('observer', ['draw'])

    let requests = new Requests()
    requests.playRound('paper', 'paper', observer)
    expect(observer.draw).toHaveBeenCalled()
  })

  it('returns no game when play is called with any unknown throw', () => {
    let observer = jasmine.createSpyObj('observer', ['noGame'])

    let requests = new Requests()
    requests.playRound('rock', 'unknown', observer)
    expect(observer.noGame).toHaveBeenCalled()
  })

})
