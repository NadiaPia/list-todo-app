import React, {useState} from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPenToSquare } from '@fortawesome/free-solid-svg-icons';
import {faSquareCheck}  from '@fortawesome/free-solid-svg-icons';
//<FontAwesomeIcon icon="fa-regular fa-square-check" />
import { faTrashCan } from '@fortawesome/free-solid-svg-icons';

function EditTask(props) {
    
  return (
    <div>
        <input type="checkbox"/>
        
            <input type="text" value={props.correctedTask} onChange={(event) => {props.setCorrectedTask(event.target.value)}}/> 
            
            <FontAwesomeIcon icon={faSquareCheck} />
            <FontAwesomeIcon icon={faTrashCan} onClick={() => props.setTaskMode("delete")}/>
      
    </div>
  )
}

export default EditTask
