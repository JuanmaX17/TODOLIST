import "./Todo.Modal.css"
import ReactDOM from "react-dom";



function Modal({children}){



    return ReactDOM.createPortal(
        
        <div className="background_modal">
                 {children}
              
        </div>
   


        ,document.getElementById("modal"))
}



export {Modal}