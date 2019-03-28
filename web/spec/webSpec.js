import ReactDOM from 'react-dom'
import React from 'react'
import PlayForm from '../src/PlayForm'

describe('RPS App', function () {
  let domFixture

  beforeEach(() => {
    domFixture =document.createElement('div')
    document.querySelector('body').appendChild(domFixture)
  })

  afterEach(() => {
    domFixture.remove()
  })

  it('displays title', () => {
    ReactDOM.render(
      <PlayForm/>,
      domFixture
    )

    expect(domFixture.innerText).toContain('Play Game')
  })

  it('should Player 1 Wins! if p1Wins is called', () => {
    const p1WinsStub = {
      playRound: (p1Hand, p2Hand, observer) => observer.p1Wins()
    }

    ReactDOM.render(
      <PlayForm requests={p1WinsStub}/>,
      domFixture
    )

    expect(domFixture.innerText).not.toContain('Player 1 Wins!')

    domFixture.querySelector('button').click()

    expect(domFixture.innerText).toContain('Player 1 Wins!')

  })

  it('should Player 2 Wins! if p1Wins is called', () => {
    const p2WinsStub = {
      playRound: (p1Hand, p2Hand, observer) => observer.p2Wins()
    }

    ReactDOM.render(
      <PlayForm requests={p2WinsStub}/>,
      domFixture
    )

    expect(domFixture.innerText).not.toContain('Player 2 Wins!')

    domFixture.querySelector('button').click()

    expect(domFixture.innerText).toContain('Player 2 Wins!')

  })

  it('should Draw if draw is called', () => {
    const drawStub = {
      playRound: (p1Hand, p2Hand, observer) => observer.draw()
    }

    ReactDOM.render(
      <PlayForm requests={drawStub}/>,
      domFixture
    )

    expect(domFixture.innerText).not.toContain('Draw')

    domFixture.querySelector('button').click()

    expect(domFixture.innerText).toContain('Draw')

  })

  it('should No Game if noGame is called', () => {
    const noGameStub = {
      playRound: (p1Hand, p2Hand, observer) => observer.noGame()
    }

    ReactDOM.render(
      <PlayForm requests={noGameStub}/>,
      domFixture
    )

    expect(domFixture.innerText).not.toContain('No Game')

    domFixture.querySelector('button').click()

    expect(domFixture.innerText).toContain('No Game')

  })

})
