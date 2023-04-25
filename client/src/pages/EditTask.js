import React, {useEffect, useState} from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPenToSquare } from '@fortawesome/free-solid-svg-icons';
import {faSquareCheck}  from '@fortawesome/free-regular-svg-icons';
import {faXmarkCircle}  from '@fortawesome/free-regular-svg-icons';



//<FontAwesomeIcon icon="fa-regular fa-square-check" />
import { faTrashCan } from '@fortawesome/free-solid-svg-icons';

function EditTask(props) {
  useEffect(() => {
    document.getElementById("editInput").focus()
  }, [])
    
  return (
    <div className="editTaskElement">       
            <input type="text" value={props.correctedTask} id="editInput" onChange={(event) => {props.setCorrectedTask(event.target.value)}}/>            
            <FontAwesomeIcon icon={faSquareCheck} className="icon" onClick={() => {props.editTask(props.id)}}/>
            <FontAwesomeIcon icon={faXmarkCircle} className="icon" onClick={()=> props.setTaskMode("show")}/>
      
    </div>
  )
}

export default EditTask
