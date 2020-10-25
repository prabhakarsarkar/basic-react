import React, { Component } from 'react'

export class States extends Component {

    constructor() {
        super()
        this.state ={
            massege:"welcome RAj"
        }
    }

changeMassege(){
    this.setState({
        massege:"thakns Raj"
    })
}
    render() {
        return (
            <div style={{textAlign:"center"}}>
            <h1>{this.state.massege}</h1>
            <button onClick={()=>this.changeMassege()}>Click me</button>
            </div>
        )
    }
}

export default States;
