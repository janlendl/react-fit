import ExerciseListItem from './ExerciseListItem';
// import Dialogue from "./Dialogue";

import './WorkoutListItem.scss';
import "./Exercises.scss";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faTrash } from "@fortawesome/free-solid-svg-icons";

export default function WorkoutListItem(props) {

  const workout = props;

  return (
    <>
      <div className="container background margin-2">
      {/* <Dialogue show={props.showDeleteWorkout}
      title="Delete Workout?"
      description="Are you sure you want to delete this Workout?"
      confirm={() => {props.onDelete(workout.id)}}
      confirmMessage="Yes"
      cancel={() => {props.onCancel()}}
      cancelMessage="No"
      /> */}
        <button className="btn btn-primary m-1 float-right" onClick={() => { props.setShowDeleteWorkout(true)}}><FontAwesomeIcon icon={faTrash} /></button>
        <div className="card-header text-center">
          <h2 className="capitalize">{workout.workoutName}</h2>
          <p>Date Created: {workout.dateCreated}</p>
        </div>

        <div className="card-text align-center px-4 border-1">
          {props.exercises.map((exercise, i) => {

            return (
              <ExerciseListItem
                key={i}
                id={exercise.id}
                gif={exercise.gifUrl}
                name={exercise.name}
                bodyPart={exercise.body_part}
                target={exercise.target_muscle}
                equipment={exercise.equipment}
                sets={exercise.number_of_sets}
                reps={exercise.number_of_reps}
              />

            );
          })}
        </div>
      </div>
    </>
  );
}


