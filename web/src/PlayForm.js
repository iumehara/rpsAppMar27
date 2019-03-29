import React from "react"

export default class PlayForm extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            rounds: [],
        }
    }

    p1Wins() {
        this.setState({result: 'Player 1 Wins!'})
    }

    p2Wins() {
        this.setState({result: 'Player 2 Wins!'})
    }

    draw() {
        this.setState({result: 'Draw!'})
    }

    rounds(roundList) {
        this.setState({rounds: roundList});
    }

    noGame() {
        this.setState({result: 'No Game!'})
    }

    playButtonClicked() {
        this.props.requests.play(this.state.p1Hand, this.state.p2Hand, this)
    }

    historyButtonClicked() {
        this.props.requests.fetchRounds(this)
    }

    inputChanged(event) {
        this.setState({[event.target.name]: event.target.value})
    }

    render() {
        return (
            <div>
                <div>Play Game</div>
                <input name='p1Hand' onChange={this.inputChanged.bind(this)}/>
                <input name='p2Hand' onChange={this.inputChanged.bind(this)}/>
                <button onClick={this.playButtonClicked.bind(this)}>PLAY!</button>
                <div>{this.state.result}</div>
                <h2>History</h2>
                <button className='history'
                        onClick={this.historyButtonClicked.bind(this)}>
                    update
                </button>
                <div>{this.state.rounds.map((round, index) => (
                    <p key={index}>
                        {round.p1Hand} {round.p2Hand} {round.result}
                    </p>
                ))}</div>
            </div>
        )
    }
}