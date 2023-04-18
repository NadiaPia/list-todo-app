import React, {useState} from 'react';
import ShowTask from "./ShowTask";
import DeleteTask from "./DeleteTask";

function Task(props) {

    const [taskMode, setTaskMode] = useState("show") // show, edit, delete

    return (
        <div className="task">
          {(taskMode === "show"  && <ShowTask  taskMode={taskMode}  setTaskMode={setTaskMode} task={props.task}/>)}
          {(taskMode === "delete" && <DeleteTask  
          taskMode={taskMode}
          setTaskMode={setTaskMode} 
          deleteTask={props.deleteTask} 
          id={props.task.id}/>)}          
        </div>
        )
}

export default Task
