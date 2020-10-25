import React from 'react'

 function MapData({props}) {
    return (
        <div>
            <h1>{props.name}{props.price}{props.img}</h1>
        </div>
    )
}
export default MapData;