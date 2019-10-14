import React, { Component } from "react";
// import logo from "./logo.svg";
import "./App.css";

class App extends Component {
  constructor(){
    super()
    this.state = {
      array: ['pasta', 'hot dogs', 'breakfast burritoes', 'potstickers'],
      array2: ""
    }
  }

  handleChange2(e){
    this.setState({
      array2: e 
    })
  }

  render() {
    // const food = this.state.array.map((el,i) => <h2 key={i}>{el}</h2>)
    let food = this.state.array
    .filter((el)=> {
      return el.includes(this.state.array2)
    })
    .map((el, i)=> {
      return <h2 key={i}>{el}</h2>
    })

    return (
      <div className="App">
        <h1>App-3</h1>
        <input onChange={(e)=> this.handleChange2(e.target.value)} type='text'/>
        {food}
      </div>
    );
  }
}

export default App;
