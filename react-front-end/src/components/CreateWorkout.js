import axios from "axios";
import { useState, useEffect } from "react";
import { Link, useParams } from "react-router-dom";

import ExerciseListItem from "./ExerciseListItem";

import "./Exercises.scss";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faTrash } from "@fortawesome/free-solid-svg-icons";
import { faPlus } from "@fortawesome/free-solid-svg-icons";
import { faHeart } from "@fortawesome/free-solid-svg-icons";

export default function CreateWorkout(props) {



  const [exerciseCart, setExerciseCart] = useState([]);
  const [sets, setSets] = useState("");
  const [reps, setReps] = useState("");
  const [workoutName, setWorkoutName] = useState("");



  const onSave = (event) => {
    event.preventDefault();
    console.log("submission prevented");
  };

  const onSubmit = () => {
    const workoutData = {
      workoutName,
      sets,
      reps,
      workouts: exerciseCart
    };

    console.log(workoutData);

    axios.put('http://localhost:8001/api/workouts', workoutData)
      .then((res) => {
        console.log(res.data);
      }).catch((error) => {
        console.log(error);
      });
    // setnewWorkout({...exerciseCart})
  };
  console.log(onSubmit);



  // exerciseCart.map((exercise) => {
  //   console.log('Map exer name', exercise.name);
  // });
  

  const newWorkouts = exerciseCart.map((workout => {
    return (
      <ExerciseListItem
        {...workout}
        key={workout.id}
        // gif={workout.gifUrl}
        // name={workout.name}
        // bodyPart={workout.bodyPart}
        // target={workout.target}
        // equipment={workout.equipment}
        number_of_sets={setSets}
        number_of_reps={setReps}
        onSave={onSave}

      />
    );
  }));


  return (
    <>
      <div className="col col-lg-4">
        <div className="card d-grid">
          <div className="card-header">
            <h5 className="card-title text-center capitalize">Create Your Workout</h5>
          </div>
          <div>
            <div>
              <input
                type="text"
                name="workout_name"
                id="workout_id"
                placeholder="Add Workout Name"
                onChange={(event) => setWorkoutName(event.target.value)}
                className="form-control w100" />
            </div>
          </div>
          {exerciseCart.map((exercise) => {
            return (
              <div className="card-body w-0" key={exercise.id}>
                <h5 className="capitalize">{exercise.name}</h5>
                <div className="card-text flex align-items-center">
                  <div >
                    <label htmlFor="Sets" className="form-label">Sets</label>
                    <input
                      type="text"
                      pattern="[0-9]"
                      name="sets"
                      id='sets'
                      onChange={(event) => setSets(event.target.value)}
                      className="form-control" />
                  </div>
                  <div>
                    <label htmlFor="Sets" className="form-label">Reps</label>
                    <input
                      type="text"
                      pattern="[0-9]"
                      name="reps"
                      id="reps"
                      onChange={(event) => setReps(event.target.value)}
                      className="form-control" />
                  </div>
                </div>
                <div className="d-flex card-text justify-content-end">
                  <div>
                    <button type="submit" className="btn-sm" onClick={onSave}><FontAwesomeIcon icon={faPlus} /></button>
                  </div>

                  <div>
                    <button type="submit" className="btn-sm"><FontAwesomeIcon icon={faTrash} /></button>
                  </div>
                </div>
              </div>
            );
          })}
          <div className="card-footer d-flex justify-content-between">
            <div>
              <button type="submit" className="btn btn-primary" onClick={onSubmit} ><FontAwesomeIcon icon={faHeart} /></button>
            </div>
            <button type="submit" className="btn btn-primary"><FontAwesomeIcon icon={faTrash} /></button>
          </div>

        </div>
      </div>
    </>
  );
};

