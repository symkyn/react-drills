import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';

class App extends Component {

  constructor() {
    super()

    this.state={
      userName: '',
      password: '',
    }
  }

  render() {
    return (
      <div className="App">
        <form>
          <input 
              onChange={(e) => this.updateUserName(e)} 
              value={this.state.userName} />
          <input 
              onChange={(e) => this.updatePassword(e)}
              value={this.state.password} />
          <button onClick={() => this.alertInfo()}>Submit</button>
        </form>
      </div>
    );
  }

  updateUserName(e){
    this.setState({
      userName: e.target.value,
    })
  }

  updatePassword(e){
    this.setState({
      password: e.target.value,
    })
  }

  alertInfo() {
    alert(`User: ${this.state.userName}  Password: ${this.state.password}`)
  }

}

export default App;
