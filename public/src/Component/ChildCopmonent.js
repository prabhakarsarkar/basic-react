import React from 'react'

function ChildCopmonent(props) {
    return (
        <div>
            {/* <button onClick={props.handler}>click</button> */}
            <button onClick={()=>props.handler("sarkar")}>click</button>

        </div>
    )
}
export default ChildCopmonent;