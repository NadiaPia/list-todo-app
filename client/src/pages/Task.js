import React, {useState} from 'react';
import ShowTask from "./ShowTask";
import DeleteTask from "./DeleteTask";
import EditTask from "./EditTask";
import axios from 'axios';



function Task(props) {

    const [taskMode, setTaskMode] = useState("show") // show, edit, delete, checkbox
    const [correctedTask, setCorrectedTask] = useState(props.task.taskText) //this state must be here to be unic for every task.
    //if it live in TasksList it will be common for all tasks
    const [checkbox, setCheckbox] = useState(false);

    
    const editTask = (id) => {
        axios.put(`http://localhost:3003/tasks/${id}`, {correctedTask: correctedTask}         
        ).then(() => {
            setTaskMode("show");
            props.refreshTasksList();
        })
    }

    const activateCheckbox = (id) => {
        //console.log("Checkbox Activated")
        const updatedCheckbox = !checkbox;
        setCheckbox(updatedCheckbox) //we cannot do setCheckbox(true) as in React it will run slower,
        // then axios.put request, but if we do a simple define like const updatedCheckbox = !checkbox it will
        //be done faster and this value will have time to be transferred to the axios.put request 
        axios.put(`http://localhost:3003/tasks/checkbox/${id}`, {checkbox: updatedCheckbox}).then(() => {
            console.log("checkbox??????????????????????????")
        })
    }


    return (
        <div className="task">
          {(taskMode === "show"  && <ShowTask
          taskMode={taskMode}
          setTaskMode={setTaskMode}
          task={props.task}
          id={props.task.id}
          activateCheckbox={activateCheckbox}
          checkbox={checkbox}
          />)}

          {(taskMode === "delete" && <DeleteTask
          taskMode={taskMode}
          setTaskMode={setTaskMode}
          deleteTask={props.deleteTask}
          id={props.task.id}
          />)}

          {(taskMode === "edit"  && <EditTask
          taskMode={taskMode}
          setTaskMode={setTaskMode}
          task={props.task}
          id={props.task.id}
          setCorrectedTask={setCorrectedTask}
          correctedTask={correctedTask}
          editTask={editTask}          
          />)}

        </div>
        )
}

export default Task;
