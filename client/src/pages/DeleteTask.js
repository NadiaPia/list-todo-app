import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faSquareCheck } from '@fortawesome/free-regular-svg-icons';
import { faXmarkCircle } from '@fortawesome/free-regular-svg-icons';
import PropTypes from 'prop-types';

function DeleteTask(props) {
  return (
    <div className="deleteTaskElement">
      <span>Delete the task?</span>
      <div>
        <FontAwesomeIcon icon={faXmarkCircle} className="icon" onClick={() => props.setTaskMode("show")} />
        <FontAwesomeIcon icon={faSquareCheck} className="icon" onClick={() => { props.deleteTask(props.id); }} />
      </div>
    </div>
  );
}


DeleteTask.propTypes = {
  setTaskMode: PropTypes.func,
  deleteTask: PropTypes.func,
  id: PropTypes.string,
};

export default DeleteTask;
