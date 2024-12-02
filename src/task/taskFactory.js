import './newCard'
import {newCard} from "./newCard";


function SetGroupName(props) {

    const styleComtainer = {
        width: "13em",
    }


    return(
        <div style={styleComtainer} id='task-container'>
            <div id='task-name-card'>
                <h2>{props.nombreTarea}
                </h2>
                <button >+</button>
            </div>
            <button id="addNewCard" >
                <h3><span>+</span>crear nueva tarea </h3>
            </button>
            {props.newcard}
        </div>
    );

}


SetGroupName.defaultProps = {
    nombreTarea: "sin definir",

}

export default SetGroupName;