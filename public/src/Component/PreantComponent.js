import React, { Component } from 'react'
import ChildComponent from './ChildCopmonent'
class PreantComponent extends Component {
    constructor(props) {
        super(props)
    
        this.state = {
             prentName:"prabhakar"
        }
        this.greetPrent=this.greetPrent.bind(this)
    }

    greetPrent(name){
        alert(`hello  ${this.state.prentName} from ${name}`)
    }
    
    render() {
        return (
            <div>
              <ChildComponent handler={this.greetPrent}/>  
            </div>
        )
    }
}

export default PreantComponent;
