import React, { Component } from "react";
// import logo from "./logo.svg";
import "./App.css";
import Todo from './components/Todo'

class App extends Component {
  constructor(){
    super()
    this.state = {
      tasks: [],
      userInput: ''
  }
  this.addItem = this.addItem.bind(this)
}

handleChange(e){
  this.setState({
    userInput: e
  })
}

addItem(){
  this.setState({
    tasks: [...this.state.tasks, this.state.userInput],
    userInput: ''
  }) 
  
}

  render() {
    let list = this.state.tasks.map((el, i)=>{
      return <Todo key={i} task={el} />
    })
    return (
      <div className="App">
        <h1>App-6</h1>
        <h2>My to-do list:</h2>
        <input value={this.state.userInput} onChange={(e)=> this.handleChange(e.target.value)}/>
        <button onClick={this.addItem}>Add</button>
        
        {list}
      </div>
    );
  }
}


export default App;
