import ReactDOM from "react-dom";
import React from "react";
import PlayForm from "../src/PlayForm";

describe('RPS App', function () {
  // it('wiring test', function () {
  //   expect(true).toBe(true);
  // })

  let domFixture;

  beforeEach(() => {
    domFixture = document.createElement('div');
    document.querySelector('body').appendChild(domFixture);
  })

  afterEach(() => {
    domFixture.remove();
  })

  it('display title', () => {
    ReactDOM.render(
        <PlayForm/>,
        domFixture
    )

    expect(domFixture.innerText).toContain('Play Game');
  })
})
