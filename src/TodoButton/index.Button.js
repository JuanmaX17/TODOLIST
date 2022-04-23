import "./TodoButton.css"
import React, { useCallback } from "react"
import { TodoContext} from "../TodoContext/index.Context"

export function TodoButton(){
//para escuchar eventos en react se utiliza la propiedad on seguido del nombre el evento, por ejemplo onClick a la cual se le debe pasar una funcion que sera ejecutada en el momento del evento+

    const {onCloseModal} = React.useContext(TodoContext)
  
    return(


        <div className="container">

            <button className="todo__button" onClick={()=>{
            
            onCloseModal()
            }}>
                +
            </button>
        </div>
        
    )
}