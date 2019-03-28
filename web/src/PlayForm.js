import React from 'react'

export default class PlayForm extends React.Component {
  constructor(props) {
    super(props)
    this.state = {}
  }

  playButtonClicked() {
    this.props.requests.playRound(this.state.p1Hand, this.state.p2Hand, this)
  }

  p1Wins() {
    this.setState({result: 'Player 1 Wins!'})
  }

  p2Wins() {
    this.setState({result: 'Player 2 Wins!'})
  }

  draw() {
    this.setState({result: 'Draw'})
  }

  noGame() {
    this.setState({result: 'No Game'})
  }

  p1HandChanged(event) {
    this.setState({p1Hand: event.target.value})
  }

  p2HandChanged(event) {
    this.setState({p2Hand: event.target.value})
  }

  render() {
    return (
      <div>
        <div>Play Game</div>
        <input name='p1Hand' onChange={this.p1HandChanged.bind(this)}/>
        <input name='p2Hand' onChange={this.p2HandChanged.bind(this)}/>
        <button onClick={this.playButtonClicked.bind(this)}>PLAY!</button>
        <div>{this.state.result}</div>
      </div>
    )
  }
}