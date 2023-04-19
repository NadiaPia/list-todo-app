import React, {useState} from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPenToSquare } from '@fortawesome/free-solid-svg-icons';
import { faTrashCan } from '@fortawesome/free-solid-svg-icons';

function EditTask(props) {
    
  return (
    <div>
        <input type="checkbox"/>
        
            <input type="text" value={props.correctedTask} onChange={(event) => {props.setCorrectedTask(event.target.value)}}/> 
            
            <button>yes</button>
            <FontAwesomeIcon icon={faTrashCan} onClick={() => props.setTaskMode("delete")}/>
      
    </div>
  )
}

export default EditTask
