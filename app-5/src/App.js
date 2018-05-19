import React, { Component } from 'react';
import './App.css';
import Image from "./components/Image";

class App extends Component {
  render() {
    return (
      <div className="App">
          <Image myImage={
            'https://cf.geekdo-images.com/original/img/l4dwCcl4Vz0r4TD-2RgQ_uoHvWM=/0x0/pic3469216.jpg'} />>
      </div>
    );
  }
}

export default App;
