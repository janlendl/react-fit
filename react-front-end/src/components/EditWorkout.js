import axios from "axios";
import { useState } from "react";
import "./Exercises.scss";

export default function EditWorkout(props) {

  console.log('edit workout', props)
  
  const { sets, reps, setSets, setReps, setModalShow } = props;
  const [inputSets, setInputSets] = useState(sets);
  const [inputReps, setInputReps] = useState(reps);


  const onSubmit = (event) => {
    event.preventDefault();

    const values = {
      sets:inputSets,
      reps:inputReps,
    }
    const exerciseData = { ...values, id: JSON.stringify(props.id) };

    axios.put('/api/editExercise/', { exerciseData })
      .then((res) => {
        console.log("Sending data to backend: ", exerciseData);
        setSets(inputSets);
        setReps(inputReps);

      }).catch((error) => {
        console.log(error);
      });
      
      setModalShow(false);
  };
  console.log(onSubmit);

  return (
    <>
      <div className="d-flex col-auto widthModal">
        <form onSubmit={onSubmit} >

          <label>Sets</label>

          <input
            type="text"
            value={inputSets}
            onChange={(event) => setInputSets(event.target.value)}
            name="sets"
            className=" d-inline-flex col-3 mx-1" />

          <label>Reps</label>
          <input
            type="text"
            value={inputReps}
            onChange={(event) => setInputReps(event.target.value)}
            name="reps"
            className="d-inline col-3 mx-1 mb-3" />
          <button type="submit" className="btn whitetxt">Submit</button>
        </form>
      </div>
    </>
  );

}
