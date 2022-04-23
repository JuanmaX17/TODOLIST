import "./TodoItem.css"
import { TodoContext } from "../TodoContext/index.Context"
import React from "react"

export function TodoItem(props){

    const {edit} = React.useContext(TodoContext) 



    return(
       <li className="ul__item ">
        
            <p className="ul__estado"><span>{props.completed ? <i className="fa-solid fa-check" onClick={props.onUndone}></i>: <i className="fa-solid fa-gauge" onClick={props.onCompleted}></i>}</span>
            <span className="ul__title">{props.title}</span>
            </p>
         
           
            <p className={`ul__text ${props.completed && "ul__completed"}`}>{props.tarea}</p>
          
            <p className="ul__icon_cambios">
            <i className="fa-solid fa-trash-can ul__trash"  onClick={props.onDelete}></i>
            <i className="fa-solid fa-pen-to-square ul__edit" onClick={()=>edit(props.tarea,props.title)}></i>
            </p>
       </li>
    )
}

