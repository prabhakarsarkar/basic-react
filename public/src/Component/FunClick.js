
import React from 'react'

 function click() {

    function functionClick(){
        console.log("click the button");
    }
    return (
        <div>
           <button onClick={functionClick}>Click</button> 
        </div>
    )
}

export default click;


// import React, { Component } from 'react'
//  class click extends Component {
//     render() {
       
//         return (
//             <div>
//               <button>Click</button>  
//             </div>
//         )
//     }
// }

// export default click
