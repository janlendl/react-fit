import WorkoutListItem from "./WorkoutListItem";
import { useState, useEffect, useRef } from 'react';
import axios from "axios";
import "./Exercises.scss";
import "./Workouts.scss";


export default function WorkoutList(props) {

  const [workoutData, setworkoutData] = useState([]);
  const [isUpdated, setisUpdated] = useState(null);

  const idRef = useRef();

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

  useEffect(() => {

    axios.delete(`/api/deleteWorkout/${isUpdated}`)
      .then(() => {
        console.log("Sending data for deletion")
        let newState = workoutData.filter((w) => w.workout_id !== isUpdated);
        setworkoutData(newState);
      })
      .catch((error) => {
        console.log("Error: ", error)
      });

  }, [isUpdated]);


  const onDelete = (id) => {
    idRef.current = id;
    console.log("Deleting Workout ID: ", idRef)

    setisUpdated(id);
  };

  const workoutList = workoutData.map((workout, i) => {

    return (

      <WorkoutListItem
        key={i}
        id={workout.workout_id}
        workoutName={workout.workout_name}
        dateCreated={new Date(workout.created_date).toLocaleString()}
        exercises={workout.exercise}
        onDelete={onDelete}
      />

    );
  });

  return (
    <>
      <div className="topWrapper"></div>
      <div className="container-lg">
        <div className="row noMrg">
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
