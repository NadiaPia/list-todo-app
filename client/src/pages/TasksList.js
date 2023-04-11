import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faPenToSquare } from '@fortawesome/free-solid-svg-icons'
import { faTrashCan } from '@fortawesome/free-solid-svg-icons'
import { useParams } from 'react-router-dom';
import axios from 'axios';



// import { icon } from '@fortawesome/fontawesome-svg-core/import.macro'

function TasksList(props) {  
  let { id } = useParams()

  const deleteTask = (id) => {
    axios.delete(`http://localhost:3003/tasks/${id}` ).then(() => {
      console.log(props.listOfTasks)
      props.setListOfTasks(props.listOfTasks.filter((val) => {
        return val.id !== id;
      }))
    })
  }
    
  return (
    <div>
      {props.listOfTasks.map((task, key) => {
        return <div key={key} className="task">
            <input type="checkbox"/>
            {task.taskText}
            <FontAwesomeIcon icon={faPenToSquare} />
            <FontAwesomeIcon icon={faTrashCan} onClick={() => {deleteTask(task.id)}}/>


        </div>
      })}
    </div>
  )
}

export default TasksList
