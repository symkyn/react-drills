import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';

class App extends Component {
  constructor() {
     super() 

     this.state={
       list: ['green', 'blue', 'red', 'pink', 'yellow']
     }

     
  }

  

  render() {

    var listItems = this.state.list.map((e,i) => (<h2 key={`list-item ${i}`}> {e} </h2>))

    return (
      <div className="App">
        {listItems}
      </div>
    );
  }
}

export default App;
