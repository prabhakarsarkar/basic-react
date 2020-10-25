import React, { Component } from 'react'

class condition extends Component {
    constructor(props) {
        super(props)
    
        this.state = {
             user:true
        }
    }
//   element  variables condition #########
    render(){
        let message ;
        if(this.state.user){
            message=<div>Hello RAJ</div>
        }else{
            message=<div>hello prabhakar</div>
        }
        return(message)
    }
   
    // if else condition  #########
    // render() {
    //     if(this.state.user){
    //         return(
    //             <div>Hello raj</div>
    //         )
    //     }else{
    //         return(
    //             <div>Hello prabhakar</div>
    //         )
    //     }
    // }
}

export default condition
