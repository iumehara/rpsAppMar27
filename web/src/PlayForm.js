import React from "react"

export default class PlayForm extends React.Component {
    constructor(props) {
        super(props)
        this.state = {}
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

    noGame() {
        this.setState({result: 'No Game!'})
    }

    playButtonClicked() {
        this.props.requests.play(this.state.p1Hand, this.state.p2Hand, this)
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
            </div>
        )
    }
}