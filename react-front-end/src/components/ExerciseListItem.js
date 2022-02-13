import "./Exercises.scss";
import { useState } from "react";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPlus } from "@fortawesome/free-solid-svg-icons";

export default function ExerciseListItem(props) {

  const { id, gif, name, bodyPart, target, equipment, onAdd, sets, reps } = props



  return (
    <>
      <div className="row noMrg">
        <div className="card mb-3">
          <div className="row noMrg">
            <div className="col-sm-3">
              <img src={gif} className="img-fluid rounded-start" alt={name} />
            </div>
            <div className="card-body">
              <h5 className="card-title capitalize">{name}</h5>
              <ul className="card-text">
                <li>Category: {bodyPart}</li>
                <li>Target: {target}</li>
                <li>Equipment: {equipment}</li>
                {sets && (<li>Sets: {sets}</li>)}
                {reps && (<li>Reps: {reps}</li>)}
              </ul>
            </div>
            {onAdd && (<div className="card-footer d-flex align-items-end">
            <button className="btn btn-primary" onClick={()=>onAdd(id)}><FontAwesomeIcon icon={faPlus}/></button>
              {/* <button className="btn btn-primary"><FontAwesomeIcon icon={faPlus} /></button> */}
            </div>)}
          </div>
        </div>
      </div>
    </>
  );
}

// Mimi API request for List Exercise By Body Part = Back



// Mimic API request for List All Body Parts

// const allBodyParts = ["back", "cardio", "chest", "lower arms", "lower legs", "neck", "shoulders", "upper arms", "upper legs", "waist"]