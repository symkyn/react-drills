import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';

class App extends Component {
  constructor() {
    super()

    this.state={
      userInput: '',
      array: ['green', 'red', 'yellow', 'purple', 'blue', 'orange'],
      filteredArray: ['green', 'red', 'yellow', 'purple', 'blue', 'orange'],
    }
  }

  render() {

    let arrayDisplay = this.state.filteredArray.map((e,i) => (<h3 key={`list ${i}`}>{e}</h3>));

    return (
      <div className="App">
        <input 
            onChange={(event) => this.handleChange(event.target.value)}
            value={this.state.userInput} />
      <div>
          {arrayDisplay}  
      </div>
      </div>
    );
  }

  handleChange(value){
    const myArray = this.state.array;
    const newArray = [];

    for(var i = 0; i < myArray.length; i++) {
      if(myArray[i].includes(value)){
        newArray.push(myArray[i]);
      }
    }

    this.setState({
      filteredArray: newArray,
      userInput: value,
    })
  }
 

}

export default App;
