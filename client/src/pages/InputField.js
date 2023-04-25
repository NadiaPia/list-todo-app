import React from 'react';
import axios from "axios";


function InputField(props) {  
  const addTask = () => {

    props.newTask && axios.post("http://localhost:3003/tasks", {taskText: props.newTask, userid: localStorage.getItem("accesss"), checkbox: false}, {headers: {userid: localStorage.getItem("accesss")}}).then((response) => {
      if (response.data.error) {
        alert(response.data.error);
    } else {
      
      props.setListOfTasks([response.data, ...props.listOfTasks]) //[...props.listOfTasks, response.data] elements will not be reverse
      console.log("response.data", response.data) //{id: 18, taskText: 'qwerty', updatedAt: '2023-04-11T07:59:35.802Z', createdAt: '2023-04-11T07:59:35.802Z'}
      props.setNewTask("") //to make an input field clean after adding a comment
    }
    })
  }
  return (
    <div className="taskInputContainer">
      <input 
        type="text"
        placeholder='my next task is....'
        autoComplete='off'
        value={props.newTask}     //to make an input field clean after adding a comment 
        onChange={(event) => {
          props.setNewTask(event.target.value)
        }
        }
      />
      {/*<button className={props.newTask ? "active" : "notActive"} onClick={addTask}>Add Task</button>*/}
      {props.newTask ? (<button  onClick={addTask}>Add Task</button>) : (<button  disabled onClick={addTask}>Add Task</button>)}
    </div>
  )
}

export default InputField
