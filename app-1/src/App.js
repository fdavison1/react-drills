import React, { Component } from "react";
// import logo from "./logo.svg";
import "./App.css";
// import App1 from './components/App1'

class App extends Component {
  constructor(){
    super()
    this.state = {
      input: ''
    }
    // this.handleChange1 = this.handleChange1.bind(this)
    // this.state.input = this.state.input.bind(this)
  }

  handleChange1(e){
    this.setState({
      input: e.target.value
    })
  }
  
  render() {
    return (
      <div className="App">
        <h1>App-1</h1>
                <input onChange={(e) => this.handleChange1(e)}/>
                <h2>{this.state.input}</h2>
        <hr></hr>
      </div>
    );
  }
}

export default App;
