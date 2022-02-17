import WorkoutListItem from "./WorkoutListItem";
import "./Exercises.scss";
import "./Workouts.scss";
import { useState } from 'react';
import Modal from "./Modal";


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
  },
  {
    workout_id: 1,
    workout_name: "Sunday Cardio",
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


  // useEffect(() => {
  //   const daysData = '/api/days';
  //   const apptData = '/api/appointments';
  //   const interviewersData = '/api/interviewers';

  // // use Promise all to get days and appointment data
  // Promise.all([
  //   axios.get(daysData),
  //   axios.get(apptData),
  //   axios.get(interviewersData)
  // ]).then((all) => {
  //   setState(prev => ({...prev, days: all[0].data, appointments: all[1].data, interviewers: all[2].data}));
  //   console.log(all);
  // })
  //   .catch((error) => {
  //     console.log('ERR status: ',error.status);
  //     console.log('ERR message: ',error.message);
  //   });
  // }, []);


  const workoutList = workoutData.map((workout) => {

    return (

      <WorkoutListItem
        key={workout.workout_id}
        workoutName={workout.workout_name}
        dateCreated={new Date(workout.created_date).toLocaleString()}
        exercises={workout.exercise}
      />

    );
  });

  return (
    <>
      <div className="topWrapper"></div>
      <div className="container-md">
        <div className="row noMrg">
          <div className="col-lg-12 d-flex">

            <div className="card-text d-flex">
              {workoutList}

            </div>
          </div>
        </div>
      </div>
    </>
    // {/* 
    //   <div className="container mt-4 pt-4">
    //     <div className="row">
    //       <div className="d-flex flex-column">
    //       {workoutList}
    //       </div>


    //     </div>
    // </div> */}




  );
}
