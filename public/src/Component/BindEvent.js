import React, { Component } from 'react'

export class BindEvent extends Component {
    constructor(props) {
        super(props)
    
        this.state = {
             magesse:"hello bau"
        }
        // this.clickHandler=this.clickHandler.bind(this)
    }
    // clickHandler(){
    //     this.setState({
    //         magesse:"love you"
    //     })
    // }

    clickHandler=()=>{
        this.setState({
            magesse:"love you"
        })
    }
    render() {
        return (
            <div>
            <div>{this.state.magesse}</div>
                {/* <button onClick={this.clickHandler.bind(this)}>Click me</button> */}
                {/* <button onClick={()=>this.clickHandler()}>Click me</button> */}
                {/* <button onClick={this.clickHandler}>Click me</button> */}


            </div>
        )
    }
}

export default BindEvent
