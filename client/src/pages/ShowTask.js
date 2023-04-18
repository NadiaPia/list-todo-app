import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faPenToSquare } from '@fortawesome/free-solid-svg-icons'
import { faTrashCan } from '@fortawesome/free-solid-svg-icons'

function ShowTask(props) {
  return (
    <div>
        <input type="checkbox"/>
            {props.task.taskText}
            <FontAwesomeIcon icon={faPenToSquare} />
            <FontAwesomeIcon icon={faTrashCan} onClick={() => props.setTaskMode("delete")}/>
      
    </div>
  )
}

export default ShowTask
