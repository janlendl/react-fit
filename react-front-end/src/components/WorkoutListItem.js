import './WorkoutListItem.scss';
import ExerciseListItem from './ExerciseListItem';
import "./Exercises.scss";


export default function WorkoutListItem(props) {

  return (
    <>
      <div className="container background margin-2">
        <div className="card-header text-center">
          <h2 className="capitalize">{props.workoutName}</h2>
          <sm>Date Created: {props.dateCreated}</sm>
        </div>

        <div className="card-text align-center px-4">
          {props.exercises.map((exercise,i) => {

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


