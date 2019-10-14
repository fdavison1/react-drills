import React, { Component } from "react";
// import logo from "./logo.svg";
import "./App.css";
import Images from './components/Images'

class App extends Component {
  constructor(){
    super()
    this.state = {
      url: 'https://www.cat-world.com.au/wp-content/uploads/2017/02/cats-fighting.jpg'
    }
  }
  render() {
    return (
      <div className="App">
        <h1>App-5</h1>
        <Images url={this.state.url}/>
      </div>
    );
  }
}

export default App;
