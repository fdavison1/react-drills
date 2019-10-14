import React, {Component} from 'react'

export default class Images extends Component{
    constructor(props){
        super(props)

    }
   render(){
       return(
           <div>
               <h2>Images</h2>
               <img src={this.props.url}/>
           </div>
       )
   }
    
}