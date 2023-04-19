import React, {useState} from 'react';
import ShowTask from "./ShowTask";
import DeleteTask from "./DeleteTask";
import EditTask from "./EditTask";


function Task(props) {

    const [taskMode, setTaskMode] = useState("show") // show, edit, delete, checkbox
    const [correctedTask, setCorrectedTask] = useState(props.task.taskText)


    return (
        <div className="task">
          {(taskMode === "show"  && <ShowTask  taskMode={taskMode}  setTaskMode={setTaskMode} task={props.task}/>)}
          {(taskMode === "delete" && <DeleteTask
          taskMode={taskMode}
          setTaskMode={setTaskMode} 
          deleteTask={props.deleteTask} 
          id={props.task.id}/>)}  

          {(taskMode === "edit"  && <EditTask  
          taskMode={taskMode}  
          setTaskMode={setTaskMode} 
          task={props.task}
          id={props.task.id}
          setCorrectedTask={setCorrectedTask}
          correctedTask={correctedTask}
          
          />)}

        </div>
        )
}

export default Task;
