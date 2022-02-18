import "./Exercises.scss";
import { useState } from "react";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPlus } from "@fortawesome/free-solid-svg-icons";
import { faPenToSquare } from "@fortawesome/free-solid-svg-icons";
import Modal from "./Modal";

export default function ExerciseListItem(props) {

  const [show, setModalShow] = useState(false);
  const { id, gif, name, bodyPart, target, equipment, onAdd, sets, reps } = props;

  return (
    <>
      <div className="row noMrg">
        <div className="card mb-4 d-flex">
          <div className="row noMrg">
            <div className="col-sm-4 padding0 ">
              <img src={gif} className="img-fluid rounded-start" alt={name} />
            </div>
            <div className="card-body col-auto">
              <h6 className="card-title capitalize text-break">{name}</h6>
              <ul className="card-text">
                <li>Category: {bodyPart}</li>
                <li>Target: {target}</li>
                <li>Equipment: {equipment}</li>
                {sets && (<li>Sets: {sets}</li>)}
                {reps && (<li>Reps: {reps}</li>)}
                <div>
                  <Modal onClose={() => setModalShow(false)} show={show} id={id} sets={sets} reps={reps} />
                </div>
              </ul>
            </div>
            <div className="card-footer d-flex align-items-end p-0sides">
              {sets && <button className="btn btn-primary p-0sides" onClick={() => setModalShow(true)}><FontAwesomeIcon icon={faPenToSquare} /></button>}
              {onAdd && (<div className="card-footer d-flex align-items-end px-1">
                <button className="btn btn-primary" onClick={() => onAdd(id)}><FontAwesomeIcon icon={faPlus} /></button>

              </div>)}
            </div>

          </div>
        </div>
      </div>
    </>
  );
}