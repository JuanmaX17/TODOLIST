import React from "react";



function useLocalStorage(nameStorage,initial){
  
    const [loading,setLoading] = React.useState(true);
  
    const [error,setError] = React.useState(false);
      
    const [tareas,setTodoUser] = React.useState(initial)
  
  
    React.useEffect(()=>{
      setTimeout(()=>{
  
        try {
          const localStorageTodo = localStorage.getItem(nameStorage);
        
        
        let parsedTodos;
      
      
        if(!localStorageTodo){
      
          localStorage.setItem(nameStorage,JSON.stringify(initial))
      
          parsedTodos = initial;
      
       
        }else{
          parsedTodos = JSON.parse(localStorageTodo)
          setTodoUser(parsedTodos);
        }
  
        setLoading(false)
        
        } catch (error) {
          setError(error);
        }
  
      },1000)
  
      
    },[])
  
   
  
  
      //saveTodo es la funcion que nos permite luego de haber almacenado la informacion, actualizarla, mediante la mista tematica, basicamente pasandole nuevos arreglos de objetos, solo que ya con las actualizaciones procesadas.
  
      function saveTodo(newTodo){
  
       try {
        localStorage.setItem(nameStorage,JSON.stringify(newTodo));
     
    
        setTodoUser(newTodo);
       } catch (error) {
         setError(error);
         
       }
        
    
      }
  
  
  
      return {
        tareas,
        saveTodo,
        loading,
        error
     
       
      }
  }


  export { useLocalStorage };