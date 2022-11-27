import React, { Component } from 'react'
import Profile from './Components/Profile'
import './App.css'



export default class App extends Component {
  constructor(props) {
    super(props);
    this.state = {show : false};
  }
  click = () => {
    this.setState({show : !this.state.show})
  }
  render() {
    return (
      <div>
        <h1>Checkpoint React-State</h1>
        <button onClick={this.click}>Show / Hide</button>
        {this.state.show ?<Profile/> :null}
        


      </div>
    )
  }
}

