import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPenToSquare } from '@fortawesome/free-solid-svg-icons';
import { faTrashCan } from '@fortawesome/free-solid-svg-icons';
import PropTypes from 'prop-types';

function ShowTask(props) {
  return (
    <div className="taskElement">
      <input type="checkbox" onChange={() => props.activateCheckbox(props.id)} />
      <p className={props.checkbox ? "activated" : ""}>{props.task.taskText}</p>
      {!props.checkbox && <FontAwesomeIcon icon={faPenToSquare} onClick={() => props.setTaskMode("edit")} className="icon" />}
      <FontAwesomeIcon icon={faTrashCan} onClick={() => props.setTaskMode("delete")} className="icon" />
    </div>
  );
}

ShowTask.propTypes = {
  activateCheckbox: PropTypes.func,
  task: PropTypes.func,
  checkbox: PropTypes.func,
  setTaskMode: PropTypes.func,
  id: PropTypes.string,
};

export default ShowTask;