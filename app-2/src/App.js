import React, { Component } from "react";
// import logo from "./logo.svg";
import "./App.css";

class App extends Component {
  constructor(){
    super()
    this.state = {
      array: ['pasta', 'hot dogs', 'breakfast burritoes', 'potstickers']
    }
    
  }
  render() {
  const food = this.state.array.map((el,i)=> <h2 key={i}>{el}</h2>)
    

    return (
      <div className="App">
        <h1>App-2</h1>
        {food}
      </div>
    );
  }
}

export default App;
