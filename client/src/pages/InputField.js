import React from 'react';
import axios from "axios";


function InputField(props) {

  
  const addTask = () => {
    axios.post("http://localhost:3003/tasks", {taskText: props.newTask}).then((response) => {
      if (response.data.error) {
        alert(response.data.error);
    } else {
      
      props.setListOfTasks([...props.listOfTasks, response.data])
      props.setNewTask("") //to make an input field clean after adding a comment
    }
    })
  }
  return (
    <div>
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
      <button onClick={addTask}>Add Task</button>
    </div>
  )
}

export default InputField
