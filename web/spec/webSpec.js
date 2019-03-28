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
})
