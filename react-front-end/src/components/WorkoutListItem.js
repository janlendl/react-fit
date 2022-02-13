import './WorkoutListItem.scss';
import ExerciseListItem from './ExerciseListItem';
export default function WorkoutListItem(props) {

  
  return (
    <>
      <h2>{props.workoutName}</h2>
      <li>Date Created: {props.dateCreated}</li>

      {props.exercises.map((exercise,i) => {
        return (
          <ExerciseListItem
          key={exercise.id}
          gif={exercise.gifUrl}
          name={exercise.name}
          bodyPart={exercise.body_part}
          target={exercise.target_muscle}
          equipment={exercise.equipment}
          sets={exercise.number_of_sets}
          reps={exercise.number_of_reps}
          />
        )
      })}
    </>
  );
}


