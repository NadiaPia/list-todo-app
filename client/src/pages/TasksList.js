import React, {useState} from 'react';
//import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
//import { faPenToSquare } from '@fortawesome/free-solid-svg-icons'
//import { faTrashCan } from '@fortawesome/free-solid-svg-icons'
import { useParams } from 'react-router-dom';
import axios from 'axios';
import ShowTask from "./ShowTask";




// import { icon } from '@fortawesome/fontawesome-svg-core/import.macro'

function TasksList(props) {  
  let { id } = useParams()
  const [taskMode, setTaskMode] = useState("show") // show, edit, delete

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
        return (
        <div key={key} className="task">
          {(taskMode === "show"  && <ShowTask  taskMode={taskMode}  setTaskMode={setTaskMode} task={task}/>)}
        </div>
        )
      })}
    </div>
  )
}

export default TasksList;
