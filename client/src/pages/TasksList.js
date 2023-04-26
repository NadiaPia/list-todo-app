import axios from 'axios';
import Task from "./Task";
import PropTypes from 'prop-types';

function TasksList(props) {  
  //let { id } = useParams() //we don't use it here as we don't enter inside every task
  const deleteTask = (id) => {
    axios.delete(`http://localhost:3003/tasks/${id}` ).then(() => {
      console.log(props.listOfTasks);
      props.setListOfTasks(props.listOfTasks.filter((val) => {
        return val.id !== id;
      }));
    });
  };
    
  return (
    <div>
      {props.listOfTasks.map((task, /*key*/) => {
        //
        return <Task deleteTask={deleteTask} task={task} key={task.id} refreshTasksList={props.refreshTasksList}/>;
        /*key must be unique and don't change when index of the element an array:
        // [task(id=8...), key(0); task(id=9...), key(1); task(id=10...), key(2)]. 
        //if we delete the first element of the array task(id=8) => key of the second elemet task(id=9...) will 
        //change to key(0) instead of key(1). But!!!!
        //If we make key=task.id  => it will make key stable after delete any elements:
        //=> [task(id=9...), key(9); task(id=10...), key(10); task(id=13...), key(13)] */        
      })}
    </div>
  );
}

TasksList.propTypes = {
  listOfTasks: PropTypes.array,
  setListOfTasks: PropTypes.func,
  refreshTasksList: PropTypes.func,  
};

export default TasksList;
