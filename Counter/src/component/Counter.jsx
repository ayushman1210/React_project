import React from 'react'
import { useState } from 'react'
import "../style.css"
const Counter = () => {
    const [count,setcount]=useState(0);
    const handle=()=>{ setcount(count+1);}
    const handle1=()=>{setcount(count-1);}
  return (
    <div>
        <div className='container'>
        <h1 className='number'>{count}</h1>
        </div>
        <div className='btns-container'>
            <button onClick={handle} className='increment'>+</button>
            <button onClick={handle1} className='increment'>-</button>
        </div>
    </div>
  )
}

export default Counter