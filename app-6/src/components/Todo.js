import React, {Component} from 'react'

export default class Todo extends Component{
    constructor(props){
        super(props)
       
        }
    
    
    render(){
        return(
          <div>
              <p>{this.props.task}</p>
          </div>  
        )
    }
}