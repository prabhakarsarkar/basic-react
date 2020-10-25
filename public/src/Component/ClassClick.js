import React, { Component } from 'react'

export class ClassClick extends Component {
     classclick(){
            console.log("button is click");
    }
    render() {
        return (
            <div>
               <button onClick={this.classclick}>Click</button> 
            </div>
        )
    }
}

export default ClassClick
