import React, { useEffect } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faSquareCheck } from '@fortawesome/free-regular-svg-icons';
import { faXmarkCircle } from '@fortawesome/free-regular-svg-icons';
import PropTypes from 'prop-types';

function EditTask(props) {
  useEffect(() => {
    document.getElementById("editInput").focus();
  }, []);

  return (
    <div className="editTaskElement">
      <input type="text" value={props.correctedTask} id="editInput" onChange={(event) => { props.setCorrectedTask(event.target.value) }} />
      <FontAwesomeIcon icon={faSquareCheck} className="icon" onClick={() => { props.editTask(props.id); }} />
      <FontAwesomeIcon icon={faXmarkCircle} className="icon" onClick={() => props.setTaskMode("show")} />
    </div>
  );
}

EditTask.propTypes = {
  setCorrectedTask: PropTypes.func,
  editTask: PropTypes.func,
  setTaskMode: PropTypes.func,
  correctedTask: PropTypes.func,
  id: PropTypes.string,
};

export default EditTask;
