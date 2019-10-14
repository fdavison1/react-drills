import React, { Component } from "react";
// import logo from "./logo.svg";
import "./App.css";

class App extends Component {
  constructor(){
    super()
    this.state = {
      user: '', 
      pass: ''
    }
  }
handleChange1(e){
  this.setState({
    user: e
  })
}

handleChange2(e){
  this.setState({
    pass: e
  })
}

alert1(){
  alert(`Username: ${this.state.user} Password: ${this.state.pass}`)
}


  render() {
    return (
      <div className="App">
        <h1>App-4</h1>
        <input onChange={(e)=> this.handleChange1(e.target.value)}/>
        <input onChange={(e)=> this.handleChange2(e.target.value)}/>
        <button onClick={()=> this.alert1()}>Login</button>
      </div>
    );
  }
}

export default App;
