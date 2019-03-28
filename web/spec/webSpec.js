import ReactDOM from "react-dom"
import React from 'react'
import PlayForm from "../src/PlayForm";
import ReactTestUtils from 'react-dom/test-utils'

describe('RPS App', function () {
  let domFixture

  beforeEach(() => {
    domFixture = document.createElement('div')
    document.querySelector('body')
        .appendChild(domFixture)
  })

  afterEach(() => {
    domFixture.remove()
  })

  function renderPlayForm(requests) {
    ReactDOM.render(
        <PlayForm requests={requests}/>,
        domFixture
    )
  }

  it('displays title', () => {
    renderPlayForm()

    expect(domFixture.innerText).toContain('Play Game')
  })

  it('displays Player 1 Wins! if p1Wins is called', () => {
    const p1WinsStub = {
      playRound: (p1Hand, p2Hand, observer) => observer.p1Wins()
    }
    renderPlayForm(p1WinsStub)

    expect(domFixture.innerText).not.toContain('Player 1 Wins!')
    domFixture.querySelector('button').click()

    expect(domFixture.innerText).toContain('Player 1 Wins!')
  })

  it('displays Player 2 Wins! if p2Wins is called', () => {
    const p2WinsStub = {
      playRound: (p1Hand, p2Hand, observer) => observer.p2Wins()
    }
    renderPlayForm(p2WinsStub)

    expect(domFixture.innerText).not.toContain('Player 2 Wins!')
    domFixture.querySelector('button').click()

    expect(domFixture.innerText).toContain('Player 2 Wins!')
  })

  it('displays Draw! if draw is called', () => {
    const drawStub = {
      playRound: (p1Hand, p2Hand, observer) => observer.draw()
    }
    renderPlayForm(drawStub)

    expect(domFixture.innerText).not.toContain('Draw!')
    domFixture.querySelector('button').click()

    expect(domFixture.innerText).toContain('Draw!')
  })

  it('displays No Game! if noGame is called', () => {
    const drawStub = {
      playRound: (p1Hand, p2Hand, observer) => observer.noGame()
    }
    renderPlayForm(drawStub)

    expect(domFixture.innerText).not.toContain('No Game!')
    domFixture.querySelector('button').click()

    expect(domFixture.innerText).toContain('No Game!')
  })

  it('sends p1 hand and p2 hand to playRound', () => {
    const playRoundSpy = jasmine.createSpy('playRound');
    const requests = {
      playRound: playRoundSpy
    }
    renderPlayForm(requests)


    const p1Input = document.querySelector('input[name="p1Hand"]')
    p1Input.value = 'rock'
    ReactTestUtils.Simulate.change(p1Input)

    const p2Input = document.querySelector('input[name="p2Hand"]')
    p2Input.value = 'scissors'
    ReactTestUtils.Simulate.change(p2Input)

    domFixture.querySelector('button').click()


    expect(playRoundSpy)
        .toHaveBeenCalledWith('rock', 'scissors', jasmine.any(Object))
  })
})
