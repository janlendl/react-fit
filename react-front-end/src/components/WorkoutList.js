import WorkoutListItem from "./WorkoutListItem";
import Dialogue from "./Dialogue";

import { useState, useEffect, useRef } from 'react';
import { motion } from "framer-motion"
import axios from "axios";

import "./Exercises.scss";
import "./Workouts.scss";

export default function WorkoutList(props) {
  const carousel = useRef();
  const idRef = useRef();

  const [width, setWidth] = useState(0);

  const [workoutData, setworkoutData] = useState([]);
  const [isUpdated, setisUpdated] = useState(null);
  const [showDeleteWorkout, setShowDeleteWorkout] = useState(false);

  // Update workout state from child
  const [workoutID, setWorkoutID] = useState("");


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

    setTimeout(() => {
      setWidth(carousel.current.scrollWidth - carousel.current.offsetWidth);
    }, 300);

  }, [workoutData]);


  useEffect(() => {
    if (isUpdated === null) {
      return null
    } else {
      axios.delete(`/api/deleteWorkout/${isUpdated}`)
        .then(() => {
          console.log("Sending data for deletion")
          let newState = workoutData.filter((w) => w.workout_id !== isUpdated);
          setworkoutData(newState);
        })
        .catch((error) => {
          console.log("Error: ", error)
        });
    }
  }, [isUpdated]);


  const onDelete = (id) => {
    idRef.current = id;
    console.log("Deleting Workout ID: ", idRef)

    setisUpdated(id);
    setShowDeleteWorkout(false);
  };

  const onCancel = () => {
    setShowDeleteWorkout(false);
  }

  const workoutList = workoutData.map((workout, i) => {

    return (

      <WorkoutListItem
        key={i}
        id={workout.workout_id}
        workoutName={workout.workout_name}
        dateCreated={new Date(workout.created_date).toLocaleString()}
        exercises={workout.exercise}
        setShowDeleteWorkout={setShowDeleteWorkout}
        setWorkoutID={setWorkoutID}
        setWidth={setWidth}

      />

    );
  });

  return (
    <>
      <div className="topWrapper"></div>

      <Dialogue show={showDeleteWorkout}
        title="Delete Workout?"
        description="Are you sure you want to delete this Workout?"
        confirm={() => { onDelete(workoutID) }}
        confirmMessage="Yes"
        cancel={() => { onCancel() }}
        cancelMessage="No"
      />

      <motion.div ref={carousel} className="carousel" whileTap={{ cursor: 'grabbing' }}>
        <motion.div drag="x"
          dragConstraints={{ right: 0, left: -width }}
          className="inner-carousel">

          <motion.div className="container-lg">
            <div className="row noMrg">
              <div className="col-auto d-flex flex-wrap">
                <div className="card-text d-flex mb-4">
                  {workoutList}
                </div>
              </div>
            </div>
          </motion.div>

        </motion.div>
      </motion.div>
    </>
  );


}
