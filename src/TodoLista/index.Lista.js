import "./TodoLista.css"

export function TodoLista(props){
    return(
        <ul className="ul">
          
            {props.children}{/* A diferencia de una propiedad normal, props.children trae todos los hijos del componente es mas genrico */}
        </ul>
    )
}