import React from "react";
import { TodoContext } from "../TodoContext/index.Context";



const TodoEdit = ()=>{

    

       

    const {

        message,
        duplicate,
        searchedTodo,
        textEdit,
        setOpenModalEdit,
        todoUpdate,
        setTextEdit
    } = React.useContext(TodoContext)


    
    const [textTodo,setTextTodo] = React.useState("")
    const [titleTodo,setTitleTodo] = React.useState("")
    
    const onSubmit = (e)=>{
        e.preventDefault()

        const input = document.getElementById("form__input_edit");
        const textarea = document.getElementById("form__textarea_edit");
        console.log(input.value)
    /*     console.log(textarea.value) */
        todoUpdate(input.value,textarea.value)
      
        
    }
    const onChangeText = (event)=>{
        setTextTodo(event.target.value)
    }

    const onChangeTitle = (event)=>{
        setTitleTodo(event.target.value)
    }
    const onCancel = ()=>{
        setOpenModalEdit(false)
    }
    
    return (
        <form onSubmit={onSubmit} className="form__todo">
            <h2 className="form__h4">Editar Todo</h2>
            <label >Titulo</label>
            <input id="form__input_edit" className="form__input" defaultValue={textEdit[1]} onChange={onChangeTitle}/>

            <label  >Tarea</label>
            <textarea id="form__textarea_edit" className="form__textarea"  onChange={onChangeText} defaultValue={textEdit[0]}></textarea>
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


export {TodoEdit}