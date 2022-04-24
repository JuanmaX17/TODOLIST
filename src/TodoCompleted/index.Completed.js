import "./TodoCompleted.css"
import React from "react"
import {TodoContext} from "../TodoContext/index.Context"


export function TodoCompleted(){
    
    const {completedTodo,totalTodo,searchedTodo} = React.useContext(TodoContext);
    let clasePadding =  (searchedTodo > 4) && "padding"
    console.log("ass" + clasePadding)
    return (
       <div className={`todo__title ${clasePadding}`}>
            
        <h1 className="todo__text__title "> Tareas completadas</h1>  
        <p className="todo__text__title">{completedTodo} de {totalTodo}</p>      
       </div> 
    )
}



