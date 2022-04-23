import React from "react";
import { TodoCompleted } from '../TodoCompleted/index.Completed';
import { TodoSearch } from '../TodoSearch/index.Search';
import { TodoLista } from '../TodoLista/index.Lista';
import { TodoItem } from '../TodoItem/index.Item';
import {Modal} from "../TodoPortal/index.Modal"
import { TodoButton } from '../TodoButton/index.Button';
import {TodoContext} from "../TodoContext/index.Context"
import {TodoForm} from "../TodoForm/index.Form"
import {Loading} from "../TodoLoading/index.Loading"
import {TodoEdit} from "../TodoEdit/index.TodoEdit"
import skeleton from "react-loading-skeleton"



function AppUX() {


    const {
      error,
      loading,
      searchedTodo,
      totalTodo,
      onDelete,
      onUndone,
      onCompleted,
      openModal,
      searchValue,
      onCloseModal,
      openModalEdit,
  
      
    } = React.useContext(TodoContext)

    return(
        
        <React.Fragment>

        <TodoCompleted />
         
        <TodoSearch />
  
       
            <TodoLista>
          
            {loading && <Loading/> }



            {(!loading && !totalTodo) && <p className="btn__create" onClick={()=>onCloseModal()}>Crear un nuevo todo</p> }
            {!!error && <p>Ocurrio un error</p>}
            {((!searchedTodo.length && !loading) && !!totalTodo) && <p>Busqueda sin resultados</p>}

            {searchedTodo.map((tarea)=>(
          
              <TodoItem 
              
                key={tarea.todo}
                tarea={tarea.todo}
                completed={tarea.completada} 
                title={tarea.title} 
                onCompleted={()=>onCompleted(tarea.todo)} 
                onUndone={()=>onUndone(tarea.todo)} 
                onDelete={()=>onDelete(tarea.todo)}
              
              
    
                />
              ))
            }
    
          </TodoLista>
        
          {(openModal) &&
          <Modal>

            <TodoForm/>
            
          </Modal>}

          {openModalEdit &&
             <Modal>

             <TodoEdit/>
             
            </Modal>
          }

        <TodoButton />
       
        </React.Fragment>

    )


}

export {
    AppUX
}