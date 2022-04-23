import "./TodoSearch.css"
import React from "react";
import { TodoContext } from "../TodoContext/index.Context";



export function TodoSearch(){

   const {setSearchValue} = React.useContext(TodoContext);



    const onChangeSerachTodo= (event)=>{
   
       setSearchValue(event.target.value);
     
    }

  
    return(
        <div className="search">

        <input className="search__input" type="text" placeholder="Bucar tareas" onChange={onChangeSerachTodo}
     />
        </div>
    )
}



/* onChange */
    //React nos ofrece un evento para escuchar los cambios de un elemento, en este caso es el elemento input, dentro el objeto que nos devuelve el evento existe una propiedad llamada tarjet que nos devuelve el elemento html que se esta cambiando en este caso nos devolveria un "<input className="search__input" type="text"> ", este ewlemento tiene una propiedad de toda la vida llamada value, con la cual accedemos a su valor el cual tambien esta cambiando ya que por cada letra escrita o espacio o accion del teclado la cual reciben los input en general se genera un cambio y por cada cambio se devuelve el elemento gracias a la propiedad tarjet y finalmente accdedemos al valor , opteniendo el valor del input por cada cambio


/* React.useState("") */
/* los estados nos permite reemplazar y reenderizar la informacion, en pocas laabras actualizara de acuerdo a algun evento, esto es posbiel gracias a POO, React.useState retorna una arreglo con dos posiciones, para contexto mirar el siguiente codigo:*/

/* class Componente extends React.Component{
    constructor(){
        this.tarea = {
            patito: "Juan"
        }


        render(){
            return(
                <a onClick={()=>{
                    this.setState(tarea)
                }}></a>
            )
        }
    }
} */

/* Eso es lo que pasa internamente para conceptualizarlo de alguna manera, se rremplzara con el metodo setter y se re-renderiza */

/* pero react nos facilita la vida con sus recientes versiones y simplemente al usar React.useState("se le pasa el valor del estado") */ 
/* React.useState("..") retorna una lista con [nombreDelEstado,FuncionSetterParaElEstado] */

/* Lo que le da un poder a lso estados son sus re-renders pero */
/* HAY QUE TENER CUIDADO, MUCHOS RE RENDER DE RE RENDERS PUEDEN HACER QUE NUESTRA APP COLISIONE SI NO TENEMOS CUIDADO CON EL ESTADO */

/* Los estados los definiria como una memoraia mutable y renderizable para todas las vistas */