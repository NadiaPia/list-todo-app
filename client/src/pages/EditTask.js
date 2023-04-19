import React, {useState} from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPenToSquare } from '@fortawesome/free-solid-svg-icons';
import {faSquareCheck}  from '@fortawesome/free-regular-svg-icons';
import {faXmarkCircle}  from '@fortawesome/free-regular-svg-icons';



//<FontAwesomeIcon icon="fa-regular fa-square-check" />
import { faTrashCan } from '@fortawesome/free-solid-svg-icons';

function EditTask(props) {
    
  return (
    <div>
        
        
            <input type="text" value={props.correctedTask} onChange={(event) => {props.setCorrectedTask(event.target.value)}}/> 
            
            <FontAwesomeIcon icon={faSquareCheck} />
            <FontAwesomeIcon icon={faXmarkCircle} onClick={()=> props.setTaskMode("show")}/>
      
    </div>
  )
}

export default EditTask
