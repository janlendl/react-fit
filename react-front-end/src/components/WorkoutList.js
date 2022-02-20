import WorkoutListItem from "./WorkoutListItem";
import { useState, useEffect, useRef } from 'react';
import { motion } from "framer-motion"
import axios from "axios";
import "./Exercises.scss";
import "./Workouts.scss";



export default function WorkoutList(props) {
  const [width, setWidth] = useState(0);
  const carousel = useRef();

  useEffect(()=> {
    setWidth(carousel.current.scrollWidth - carousel.current.offsetWidth);
  })

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
    <motion.div ref={carousel} className="carousel" whileTap={{cursor:'grabbing'}}>
    <motion.div drag="x"
          dragConstraints={{right: 0, left: -width}}
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
