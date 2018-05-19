import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';

class App extends Component {

  constructor() {
    super() 

    this.state={
      userInput: '',
    }
  }

  render() {
    return (
      <div className="App">
        <input 
            value={this.state.userInput}
            onChange={(event) => this.handleChange(event)}  />
        <h4>{this.state.userInput}</h4>
      </div>
    );
  }

  handleChange(event) {
    this.setState({
      userInput: event.target.value,
    })
  }

}

export default App;
