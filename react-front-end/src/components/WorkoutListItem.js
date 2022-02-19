import axios from 'axios';
import ExerciseListItem from './ExerciseListItem';
import './WorkoutListItem.scss';
import "./Exercises.scss";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faTrash } from "@fortawesome/free-solid-svg-icons";


export default function WorkoutListItem(props) {

  const onDelete = () => {
    const id = props.id

    axios.delete(`/api/deleteWorkout/${id}`)
      .then(() => {
        console.log("Sending data for deletion")
      })
      .catch((error) => {
        console.log("Error: ", error)
      });

  };

  return (
    <>
      <div className="container background margin-2">
        <button className="btn btn-primary m-1 float-right" onClick={() => onDelete(props.id)}><FontAwesomeIcon icon={faTrash} /></button>
        <div className="card-header text-center">
          <h2 className="capitalize">{props.workoutName}</h2>
          <p>Date Created: {props.dateCreated}</p>
        </div>

        <div className="card-text align-center px-4">
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


