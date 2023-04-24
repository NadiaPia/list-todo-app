import React, { useEffect, useState } from 'react';
import InputField from "./InputField";
import TasksList from "./TasksList";
import axios from "axios";

function Home() {
  const [listOfTasks, setListOfTasks] = useState([]);
  const [newTask, setNewTask] = useState("");

  const refreshTasksList = () => {
    axios.get("http://localhost:3003/tasks", {headers: {userid: localStorage.getItem("accesss")}}).then((response) => {
    setListOfTasks(response.data.reverse()) //elements ordered by newest go up
  });
  } 

  useEffect(() => {
    refreshTasksList(); //as I need this request in several pages, It better just call it const< but not the whole axios.request
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
          refreshTasksList={refreshTasksList} 
          setListOfTasks={setListOfTasks}/> }
       
      </div>

    </div>
  )
}

export default Home
