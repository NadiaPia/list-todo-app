import React from 'react'

function DeleteTask(props) {
  return (
    <div>
      <span>Delete The Task?</span>
      <div>
        <button onClick={() => {props.deleteTask(props.id)}}>yes</button>
        <button onClick={()=> props.setTaskMode("show")}>no</button>
      </div>
    </div>
  )
}

export default DeleteTask
