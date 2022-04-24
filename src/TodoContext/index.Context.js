import React from "react";
import { useLocalStorage } from "./useLocalStorage";

const TodoContext = React.createContext();


function TodoProvider(props){
    
  const [textEdit,setTextEdit] = React.useState([])//[[],s]
  const [openModalEdit,setOpenModalEdit] = React.useState(false);

  const [message,setMessage] = React.useState(false)
  const [duplicate,setDuplicate] = React.useState(false)

  const [openModal,setOpenModal] = React.useState(false)

  const {tareas,saveTodo,loading,error} = useLocalStorage("TODOS_V1",[])

  const [searchValue,setSearchValue] = React.useState("");

  const completedTodo = tareas.filter(todo => todo.completada).length;
  const totalTodo = tareas.length;


  let searchedTodo = []

  if(!searchValue.length){
    searchedTodo = tareas;
  }else{

      searchedTodo = tareas.filter(todo=>{
      const textSearch = searchValue.toLocaleLowerCase();
      const textTodo = todo.title.toLocaleLowerCase();

      return textTodo.includes(textSearch);/* retorna true si la la cadena incluye a la otra cadena */

    })

  }

  

/* Completar todo */
const onCompleted = (text_id)=>{

  const todoIndex = tareas.findIndex(todo=> todo.todo === text_id);


   tareas[todoIndex].completada = true

  
   saveTodo([...tareas])



}

/* todo incompleto */
const onUndone = (text_id)=>{

    const todoIndex = tareas.findIndex(todo=>todo.todo === text_id);

    tareas[todoIndex].completada = false;


   saveTodo([...tareas])

}

/* Eliminar todo */

const onDelete = (text_id)=>{

    const todoIndex = tareas.findIndex((todo)=>todo.todo === text_id);

  tareas.splice(todoIndex,1);

    
   saveTodo([...tareas])

}




/* Crear TODO */

const crearTodo = (titleNewTodo,textNewTodo)=>{
 
  const Todo = [...tareas];
 
  let añadir = Validacion(titleNewTodo,textNewTodo)
   

  if(añadir){
    Todo.push({
      title: titleNewTodo,
      todo: textNewTodo,
      completada: false
    })
    saveTodo(Todo);
    onCloseModal()
  
  }


  

}


const Validacion = (title,text)=>{
  if(!!title.length && !!text.length){

    let bandera = true
    tareas.forEach((item)=>{
   
        
  
      if(item.todo === text){
        bandera = false
        console.log("repetido")
      }
  
     })
    
     if(bandera){
      return true
       
     }else{
      setMessage(false)
      setDuplicate(true)
      return false
     }
  
  }else{

    setMessage(true)
    setDuplicate(false)
    

  }
}



const onCloseModal = ()=>{
  
  setOpenModal(!openModal)
  setMessage(false)
  setDuplicate(false)

}

const edit = (text_edit,title_edit)=>{
 
  setOpenModalEdit(!openModalEdit);
  setTextEdit([text_edit,title_edit])
}

const todoUpdate = (title,todo)=>{
  
  console.log(tareas)
  console.log(textEdit[1])
  console.log(textEdit[0])

  let actualizar = Validacion(title,todo)


  if(actualizar){
    const index = tareas.findIndex(lista=>(lista.title === textEdit[1] && lista.todo === textEdit[0]))
    console.log(index)
    console.log("indice" + tareas[index].title)
    tareas[index] = {title,todo}
    saveTodo([...tareas])
    setOpenModalEdit(false)
  }

}

    return(

        <TodoContext.Provider value={{
            tareas,
            searchValue,
            setSearchValue,
            completedTodo,
            totalTodo,
            searchedTodo,
            onCompleted,
            onUndone,
            onDelete,
            crearTodo,
            loading,
            error,
            openModal,
            setOpenModal,
            onCloseModal,
            message,
            duplicate,
            edit,
            openModalEdit,
            textEdit,
            setOpenModalEdit,
            todoUpdate,
            setTextEdit
            
        }}>

            {props.children}

        </TodoContext.Provider>

    )
}


export {
    TodoContext,
    TodoProvider
}