import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPenToSquare } from '@fortawesome/free-solid-svg-icons';
import { faTrashCan } from '@fortawesome/free-solid-svg-icons';

function ShowTask(props) {
  return (
    <div className="taskElement">
        <input type="checkbox" onChange={() => props.activateCheckbox(props.id)}/>
            <p className={props.checkbox ? "activated" : ""}>{props.task.taskText}</p>
            <FontAwesomeIcon icon={faTrashCan} onClick={() => props.setTaskMode("delete")} className="icon"/>
            {!props.checkbox && <FontAwesomeIcon icon={faPenToSquare} onClick={() => props.setTaskMode("edit")} className="icon"/>}
      
    </div>
  )
}

export default ShowTask;