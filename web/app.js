import React from 'react'
import ReactDOM from 'react-dom'
import PlayForm from "./src/PlayForm";
import {Requests} from "rps";

class App extends React.Component {
  render(){
    return (
      <div>
        <h1>Rps App</h1>
        <PlayForm requests={new Requests()}/>
      </div>
    )
  }
}

ReactDOM.render(
  <App/>,
  document.querySelector('#app')
)