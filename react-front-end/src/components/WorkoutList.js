import WorkoutListItem from "./WorkoutListItem";

const workoutData = [
  {
    workout_id: 1,
    workout_name: "Terror Thursday",
    created_date: "2022-02-03T07:00:00.000Z",
    exercise: [
      {
      name: "alternate lateral pulldown",
      gifUrl: "http://d205bpvrqc9yn1.cloudfront.net/0007.gif",
      body_part: "back",
      equipment: "cable",
      target_muscle: "lats",
      number_of_sets: 5,
      number_of_reps: 5
      },
      {
      name: "astride jumps (male)",
      gifUrl: "http://d205bpvrqc9yn1.cloudfront.net/3220.gif",
      body_part: "cardio",
      equipment: "body weight",
      target_muscle: "cardiovascular system",
      number_of_sets: 10,
      number_of_reps: 10
      },
      {
      name: "archer push up",
      gifUrl: "http://d205bpvrqc9yn1.cloudfront.net/3294.gif",
      body_part: "chest",
      equipment: "body weight",
      target_muscle: "pectorals",
      number_of_sets: 12,
      number_of_reps: 4
      },
      {
      name: "band reverse wrist curl",
      gifUrl: "http://d205bpvrqc9yn1.cloudfront.net/0994.gif",
      body_part: "lower_arms",
      equipment: "band",
      target_muscle: "forearms",
      number_of_sets: 6,
      number_of_reps: 3
      },
      {
      name: "ankle circles",
      gifUrl: "http://d205bpvrqc9yn1.cloudfront.net/1368.gif",
      body_part: "lower_legs",
      equipment: "body weight",
      target_muscle: "calves",
      number_of_sets: 10,
      number_of_reps: 5
      },
      {
      name: "neck side stretch",
      gifUrl: "http://d205bpvrqc9yn1.cloudfront.net/1403.gif",
      body_part: "neck",
      equipment: "body weight",
      target_muscle: "levator scapulae",
      number_of_sets: 8,
      number_of_reps: 2
      }
    ]
  }
];  

export default function WorkoutList() {

  const workoutList = workoutData.map((workout) => {
    console.log("EXERCISE DATA",workout.exercise);
    return (
      <WorkoutListItem
        key={workout.workout_id}
        workoutName={workout.workout_name}
        dateCreated={workout.created_date}
        exercise={workout.exercise}
      />
    )
  })

  // const exerciseList = workoutData.exercise.map((exercise, i) => {
  //   return (
  //     <WorkoutListItem
  //       key={i}
  //       name={exercise.name}
  //       gif={exercise.gifUrl}
  //       body_part={exercise.body_part}
  //       equipment={exercise.equipment}
  //       target_muscle={exercise.target_muscle}
  //       number_of_sets={exercise.number_of_sets}
  //       number_of_reps={exercise.number_of_reps}
  //     />
  //   )
  // })

  return (
    <div className="workoutlist">
    {workoutList}
    </div>
  )
}