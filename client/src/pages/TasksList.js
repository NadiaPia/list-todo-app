import React from 'react';

function TasksList(props) {

  

  
    
  return (
    <div>
      {props.listOfTasks.map((task, key) => {
        return <div key={key} className="task">
            {task.taskText}
        </div>
      })}
    </div>
  )
}

export default TasksList
