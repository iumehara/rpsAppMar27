import React from 'react'


export default class PlayForm extends React.Component {
    constructor(props) {
        super(props)
        this.state = {}
    }

    playButtonClicked() {
        // this.setState({result: 'Player 1 Wins!'})
        this.props.requests.playRound('', '', this);
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

    render(){
        return(
            <div>
                <div>Play Game</div>
                <button onClick={this.playButtonClicked.bind(this)}>PLAY!</button>
                <div>{this.state.result}</div>
            </div>
        )
    }
}
