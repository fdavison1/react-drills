import React, {Component} from 'react'

export default class Login extends Component{
    constructor(props){
        super(props)
        this.state = {
            user: '', 
            pass: ''
          }
          this.alert1 = this.alert1.bind(this)
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

      render(){
        return(
            <div>
                <input onChange={(e)=> this.handleChange1(e.target.value)}/>
                <input onChange={(e)=> this.handleChange2(e.target.value)}/>
                <button onClick={()=> this.alert1()}>Login</button>
            </div>
        )
      }
}