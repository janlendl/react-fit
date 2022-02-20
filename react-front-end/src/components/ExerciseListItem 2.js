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
      <div className="row noMrg border-1 ">
        <div className="card d-flex border-1 ">
          <div className="row noMrg border-1 ">
            <div className="col-sm-4 padding0 border-1 ">
              <img src={gif} className="img-fluid border-1 " alt={name} />
            </div>
            <div className="card-body col-auto">
              <h6 className="card-title capitalize text-break">{name}</h6>
              <ul className="card-text">
                <li>Category: {bodyPart}</li>
                <li>Target: {target}</li>
                <li>Equipment: {equipment}</li>
                {sets && (<li>Sets: {sets}</li>)}
                {reps && (<li>Reps: {reps}</li>)}
               
              </ul>
            </div>
            <div className="d-flex align-items-end p-1 border-1">
              {sets && <button className="btn btn-primary p-0sides border-1" onClick={() => setModalShow(true)}><FontAwesomeIcon icon={faPenToSquare} /></button>}
              {onAdd && (<div className=" d-flex align-items-end px-1 border-1">
                <button className="btn btn-primary border-1" onClick={() => onAdd(id)}><FontAwesomeIcon icon={faPlus} /></button>

              </div>)}
            </div>

          </div>
        </div>
      </div>

      <div className="mb-4 shadow border-1">
        <Modal onClose={() => setModalShow(false)} show={show} id={id} sets={sets} reps={reps} />
      </div>


    </>
  );
}