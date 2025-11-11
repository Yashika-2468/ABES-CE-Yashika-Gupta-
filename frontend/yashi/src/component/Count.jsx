import React, { useState } from 'react'

function Count() {
    const[color,setcolor]=useState(0)
    function inc(){
        setcolor(color+1)

    }
    function decr(){
        setcolor(color-1)

    }
  return (
    <div>
      <button onClick={inc}>+</button>  
      <span>{color}</span>
      <button onClick={decr}>-</button>
    </div>
  )
}

export default Count