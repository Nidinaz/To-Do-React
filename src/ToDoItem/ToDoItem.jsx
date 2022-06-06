import { useState } from 'react';
import "./ToDoItem.css";

const ToDoItem = (props) => {
    // een prop is om gegevens door te geven aan een component,
    // vanuit de parent (in de jsx/html)

    // state is om intern in je component iets bij te houden
    const [disabled, setDisabled] = useState(props.checked);

    const handleCheck = (event) => {
        setDisabled(event.target.checked);
    }

    // function handleCheck(event)  {
    //     if(event.target.checked){
    //         // true
    //         // event.target.nextElementSibling.disabled = true;
    //         //disable
    //     }
    //     else{
    //         //enable
    //         // false
    //     }
    // };

    return (
        <div className="containerButtons">
            <input type="checkbox" className="checkboxe" onChange={handleCheck} defaultChecked={disabled}></input>
            <input className="input" id="text-input" type="text" disabled={disabled} value={props.value}/>
        </div>
    )
};

export default ToDoItem;