
import './App.css';
import { AppUX } from './AppUX';
import {TodoProvider} from "../TodoContext/index.Context"



/* const defaultTareas = [
  {
    title: "hogar",
    todo: "Limpiar la casa",
    completada: false
  },
  {
    title: "Colegio",
    todo: "Hacer tareas",
    completada: true
  },
  {
    title: "Responsabilidades",
    todo: "Comprar los utiles",
    completada: false
  },
  {
    title: "until",
    todo: "Comprar la legumbre",
    completada: false
  }
] */



//Local storage es una herramienta para almacenar datos del lado del cliente, dicha iformacion se almacenara de forma indefinida o hasta que se decidan limpiar los datos del navegador,esta tiene sus metodos setter y getter, ademas de que solo puede almacenar texto
//para solucionar el inconveniente de que solo pueda almacenar texto, se utiliza JSON para parsear, de objetos a texto y texto a objetos en nuestro caso
//JSON.stringify() para castear el objeto a  texto y JSON.parse() para castear de texto a objeto o bueno de codigo a texto y de texto a codigo respectivamente ya que almacenamos lo que que queramos y verdaderamente funcione




function App() {
  
  
  
  return (
  
    <TodoProvider>

    <AppUX />
    
    </TodoProvider>
  
  );
}

export default App;