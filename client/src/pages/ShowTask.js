import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPenToSquare } from '@fortawesome/free-solid-svg-icons';
import { faTrashCan } from '@fortawesome/free-solid-svg-icons';

function ShowTask(props) {
  return (
    <div>
        <input type="checkbox" onChange={() => props.activateCheckbox(props.id)}/>
            {props.task.taskText}
            <FontAwesomeIcon icon={faPenToSquare} onClick={() => props.setTaskMode("edit")}/>
            <FontAwesomeIcon icon={faTrashCan} onClick={() => props.setTaskMode("delete")}/>
      
    </div>
  )
}

export default ShowTask
