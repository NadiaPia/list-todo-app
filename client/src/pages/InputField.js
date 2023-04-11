import React from 'react';
import axios from "axios";


function InputField(props) {

  
  const addTask = () => {
    axios.post("http://localhost:3003/tasks", {taskText: props.newTask}).then((response) => {
      if (response.data.error) {
        alert(response.data.error);
    } else {
      
      props.setListOfTasks([...props.listOfTasks, response.data])
    }
    })
  }
  return (
    <div>
      <input 
        type="text" 
        placeholder='my next task is....'
        autoComplete='off'
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
