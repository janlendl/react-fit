import axios from "axios";
import { useState } from "react";
import "./Exercises.scss";

export default function EditWorkout(props) {

  const [sets, setSets] = useState(props.sets);
  const [reps, setReps] = useState(props.reps);
  
  const onSubmit = (event) => {
    event.preventDefault();
    
    const values = {
      sets,
      reps,
    }
    const exerciseData = { ...values, id: JSON.stringify(props.id) };

    axios.post('/api/editExercise/', { exerciseData })
      .then((res) => {

        console.log("Sending data to backend: ", exerciseData);

      }).catch((error) => {
        console.log(error);
      });

  };
  console.log(onSubmit);

  return (
    <>
      <div className="d-flex col-auto">
        <form onSubmit={onSubmit}>
          <input
            type="text"
            defaultValue={sets}
            onChange={(event) => setSets(event.target.value)}
            name="sets"
            className=" d-inline-flex col-3 mx-1" />
          <input
            type="text"
            defaultValue={reps}
            onChange={(event) => setReps(event.target.value)}
            name="reps"
            className="d-inline col-3 mx-1 mb-3" />
          <button type="submit" className="btn">Submit</button>
        </form>
      </div>
    </>
  );

}
