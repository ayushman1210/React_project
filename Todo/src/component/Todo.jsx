import { useState } from 'react'
import "../style.css"

import React from 'react'


const Todo = () => {
    const [Todo,setTodo]=useState([])
    const [input,setInput]=useState("");

    const handle=()=>{
        setTodo((Todos)=>{
            return Todos.concat({text:input, id:Math.floor(Math.random()*10)});
     } )

        setInput("");
    }

    // removing the todo 
    const removeTodo=id=> setTodo((Todo)=> Todo.filter((t)=> t.id!= id));


  return (
    <div className='container'>

        <input type="text" placeholder='add todo' value={input} onChange={(e)=>setInput(e.target.value)}/>
        
        <button onClick={handle}>submit</button>

        <ul className="todos-list">{Todo.map(({text,id})=>(

            <li key={id} className='todo'>
                <span>{text}</span>

                <button className='close' onClick={()=>removeTodo(id)}>x</button>
                </li>
        ))}</ul>
    </div>
  )
}

export default Todo