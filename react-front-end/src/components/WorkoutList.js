import WorkoutListItem from "./WorkoutListItem";
import { useState, useEffect } from 'react';
import axios from "axios";
import "./Exercises.scss";
import "./Workouts.scss";


export default function WorkoutList(props) {

  const [workoutData, setworkoutData] = useState([]);


  // ----- CALL API, DEPENDENT ON CATEGORY (URL) CHANGE -----
  useEffect(() => {
    const workoutApi = '/api/workouts';

    axios.get(workoutApi)
      .then((res) => {
        setworkoutData(res.data)
      })
      .catch((err) => {
        console.log("ERROR: ", err);
      })

  }, []);

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
      <div className="container-lg">
        <div className="row m-0">
          <div className="col-auto d-flex flex-wrap">
            <div className="card-text d-flex">
              {workoutList}
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
