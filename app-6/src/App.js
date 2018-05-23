import React, { Component } from 'react';
import './App.css';
import Todo from './components/Todo';

class App extends Component {

  constructor() {
    super()

    this.state={
      taskList: [],
      userInput: '',
    }

    this.addTask = this.addTask.bind( this );
  }

  render() {
    let completeTaskList = this.state.taskList.map((e, i) => {
      return (
        <Todo key={i} task={e} />
      )
    })

    return (
      <div className="App">
          <h1>My to-do list:</h1>
          <div>
            <input onChange={(e) => this.handleChange(e)} value={this.state.userInput} />
            <button onClick={this.addTask}>add</button>
          </div>
      <br />
      { completeTaskList }
      </div>
    );
  }

  handleChange(e) {
    this.setState({
      userInput: e.target.value,
    })
  }

  addTask() {
    let newTask = this.state.userInput
    this.setState({
      taskList: [...this.state.taskList, newTask],
      userInput: '',
    })
  }

}

export default App;
