import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faXmark } from "@fortawesome/free-solid-svg-icons";
import EditWorkout from "./EditWorkout"
import "./Modal.scss";

const Modal = props => {
  if (!props.show) {
    return null
  }

  return (
    <div className="card bg-theme border-1">
      <div className="modal-content border-1">
        <div className="modal-header ">
          <h4 className="modal-title">Edit Workout</h4>
          <button className="btn-sm" onClick={props.onClose}><FontAwesomeIcon icon={faXmark} /></button>
        </div>
        <div className="card-body px-0">
          {<EditWorkout id={props.id} sets={props.sets} reps={props.reps} />}

        </div>
        {/* <div className="modal-footer border-1">
          
        </div> */}
      </div>
    </div>
  )
}

export default Modal