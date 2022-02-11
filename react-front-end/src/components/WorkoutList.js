import WorkoutListItem from "./WorkoutListItem";

const workoutData = [
{
  exercise_id: 1,
  workout_name: "Terror Thursday",
  created_date: "2022-02-03T07:00:00.000Z",
  exercise_name: "alternate lateral pulldown",
  gifurl: "http://d205bpvrqc9yn1.cloudfront.net/0007.gif",
  equipment: "cable",
  number_of_sets: 3,
  number_of_reps: 6
  },
  {
  exercise_id: 2,
  workout_name: "Terror Thursday",
  created_date: "2022-02-01T07:00:00.000Z",
  exercise_name: "archer pull up",
  gifurl: "http://d205bpvrqc9yn1.cloudfront.net/3293.gif",
  equipment: "body weight",
  number_of_sets: 3,
  number_of_reps: 10
  },
  {
  exercise_id: 3,
  workout_name: "Terror Thursday",
  created_date: "2022-02-03T07:00:00.000Z",
  exercise_name: "astride jumps (male)",
  gifurl: "http://d205bpvrqc9yn1.cloudfront.net/3220.gif",
  equipment: "body weight",
  number_of_sets: 2,
  number_of_reps: 12
  },
  {
  exercise_id: 4,
  workout_name: "Terror Thursday",
  created_date: "2022-02-01T07:00:00.000Z",
  exercise_name: "back and forth step",
  gifurl: "http://d205bpvrqc9yn1.cloudfront.net/3672.gif",
  equipment: "body weight",
  number_of_sets: 4,
  number_of_reps: 12
  }
];

export default function WorkoutList() {

  const workoutList = workoutData.map((workout) => {
    return (
      <WorkoutListItem
        key={workout.exercise_id}
        workoutName={workout.workout_name}
        dateCreated={workout.created_date}
        exerciseName={workout.exercise_name}
        gif={workout.gifurl}
        equipment={workout.equipment}
        numSets={workout.number_of_sets}
        numReps={workout.number_of_reps}
      />
    )
  })

  return (
    <div>
    {workoutList}
    </div>
  )
}
