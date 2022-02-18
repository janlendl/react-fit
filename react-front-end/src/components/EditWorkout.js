import axios from "axios";
import { useState, useEffect } from "react";



// import ExerciseListItem from "./ExerciseListItem";
import WorkoutListItem from "./WorkoutListItem";
import "./Exercises.scss";
// import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
// import { faTrash } from "@fortawesome/free-solid-svg-icons";
// import { faPlus } from "@fortawesome/free-solid-svg-icons";
// import { faHeart } from "@fortawesome/free-solid-svg-icons";

const workoutData = [
  {
    "workout_id": 1,
    "workout_name": "Terror Thursday",
    "created_date": "2022-02-03T05:00:00.000Z",
    "exercise": [
      {
        "id": 1,
        "name": "alternate lateral pulldown",
        "gifUrl": "http://d205bpvrqc9yn1.cloudfront.net/0007.gif",
        "body_part": "back",
        "equipment": "cable",
        "target_muscle": "lats",
        "number_of_sets": null,
        "number_of_reps": null
      },
      {
        "id": 3,
        "name": "astride jumps (male)",
        "gifUrl": "http://d205bpvrqc9yn1.cloudfront.net/3220.gif",
        "body_part": "cardio",
        "equipment": "body weight",
        "target_muscle": "cardiovascular system",
        "number_of_sets": null,
        "number_of_reps": null
      },
      {
        "id": 5,
        "name": "archer push up",
        "gifUrl": "http://d205bpvrqc9yn1.cloudfront.net/3294.gif",
        "body_part": "chest",
        "equipment": "body weight",
        "target_muscle": "pectorals",
        "number_of_sets": null,
        "number_of_reps": null
      },
      {
        "id": 7,
        "name": "band reverse wrist curl",
        "gifUrl": "http://d205bpvrqc9yn1.cloudfront.net/0994.gif",
        "body_part": "lower_arms",
        "equipment": "band",
        "target_muscle": "forearms",
        "number_of_sets": null,
        "number_of_reps": null
      },
      {
        "id": 9,
        "name": "ankle circles",
        "gifUrl": "http://d205bpvrqc9yn1.cloudfront.net/1368.gif",
        "body_part": "lower_legs",
        "equipment": "body weight",
        "target_muscle": "calves",
        "number_of_sets": null,
        "number_of_reps": null
      },
      {
        "id": 11,
        "name": "neck side stretch",
        "gifUrl": "http://d205bpvrqc9yn1.cloudfront.net/1403.gif",
        "body_part": "neck",
        "equipment": "body weight",
        "target_muscle": "levator scapulae",
        "number_of_sets": null,
        "number_of_reps": null
      }
    ]
  }];


export default function EditWorkout(props) {

  console.log("key",props)
  const workoutList = workoutData.map((workout) => {


    return (

      <WorkoutListItem
        key={workout.workout_id}
        exercises={workout.exercise}
      />
    );
  });

  console.log("this is the workouts", workoutList);

  const [values, setValues] = useState("");

  const handleInputChange = (e) => {
    const { name, value} = e.target;
    setValues({
      ...values,
      [name]: value,
    });
  };
  console.log(values)


  // const updateHandler = (index, data) => {

  //   setValues((exercises) => exercises.map((exercise, i) => {
  //     if(index === i) {
  //       return  {...exercise, ...data}; 
  //     }
  //     return exercise;
  //   }));
  // }

  // console.log("change me", exercise)

  const onSubmit = (event) => {
    event.preventDefault();

    const data = values;
    console.log("values", data);


    axios.put('/api/editExercise/', {values})
      .then((res) => {

        console.log(res.data);

      }).catch((error) => {
        console.log(error);
      });
   
  };
  console.log(onSubmit);

  return (
    <>
      <div className="d-flex col-auto widthModal">
        <form onSubmit={onSubmit} >

          <label>Sets</label>
 
          <input
            type="text" 
            // value={values}
            onChange={handleInputChange}
            name="sets"
            className=" d-inline-flex col-3 mx-1" /> 

          <label>Reps</label>

          <input
            type="text"
            // value={values}
            onChange={handleInputChange}
            name="reps"
            className="d-inline col-3 mx-1 mb-3" />
          <button type="submit" className="btn whitetxt">Submit</button>
        </form>
      </div>
    </>
  );

}
