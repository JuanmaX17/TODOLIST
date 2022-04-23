import React, { useContext } from "react";
import {TodoContext} from "../TodoContext/index.Context"
import "./form.css"




function TodoForm(){


    const {crearTodo,setOpenModal,message,duplicate} = useContext(TodoContext)

    const [textTodo,setTextTodo] = React.useState("")
    const [titleTodo,setTitleTodo] = React.useState("")

    const onSubmit = (e)=>{
        e.preventDefault()
        crearTodo(titleTodo,textTodo)
        
    }
    const onChangeText = (event)=>{
        setTextTodo(event.target.value)
    }

    const onChangeTitle = (event)=>{
        setTitleTodo(event.target.value)
    }
    const onCancel = ()=>{
        setOpenModal(false)
    }
    return(

        <form onSubmit={onSubmit} className="form__todo">
            <h2 className="form__h4">Crea un nuevo Todo</h2>
            <label >Titulo</label>
            <input id="form__input_id" className="form__input" placeholder="TITULO" onChange={onChangeTitle}/>

            <label  >Tarea</label>
            <textarea id="form__textarea_id" className="form__textarea" placeholder="TAREA..." onChange={onChangeText} ></textarea>
            <hr/>
            {message && <p className="form__ups">Ups!, no hay contenido.</p>}
            {duplicate && <p className="form__ups">Ups!,la tarea ya existe.</p>}
           <div className="form__div__buttons">
           <button type="button" onClick={onCancel} className="form__button">CANCELAR</button>
            <button type="submit" className="form__submit" >GUARDAR</button>
           </div>
        </form>

    )

}
export{TodoForm}