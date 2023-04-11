import React, { useEffect, useState } from 'react';
import InputField from "./InputField";
import TasksList from "./TasksList";
import axios from "axios";





function Home() {

  const [listOfTasks, setListOfTasks] = useState([]);
  const [newTask, setNewTask] = useState("");

  useEffect(() => {
    axios.get("http://localhost:3003/tasks").then((response) => {
      setListOfTasks(response.data)      

    })
  }, [])


  return (
    <div className='listToDo'>
      <div className='topSide'>
        { <InputField 
          newTask={newTask} 
          setNewTask={setNewTask} 
          listOfTasks={listOfTasks}
          setListOfTasks={setListOfTasks} 
      /> }</div>
      
      <div className='bottomSide'>
        { <TasksList 
          listOfTasks={listOfTasks} 
          setListOfTasks={setListOfTasks}/> }
       
      </div>

    </div>
  )
}

export default Home
