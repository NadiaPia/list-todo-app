import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faPenToSquare } from '@fortawesome/free-solid-svg-icons'
import { faTrashCan } from '@fortawesome/free-solid-svg-icons'

// import { icon } from '@fortawesome/fontawesome-svg-core/import.macro'

function TasksList(props) {  
    
  return (
    <div>
      {props.listOfTasks.map((task, key) => {
        return <div key={key} className="task">
            <input type="checkbox"/>
            {task.taskText}
            <FontAwesomeIcon icon={faPenToSquare} />
            <FontAwesomeIcon icon={faTrashCan} />


        </div>
      })}
    </div>
  )
}

export default TasksList
