import axios from "axios";
import { useState, useEffect } from "react";


// import ExerciseListItem from "./ExerciseListItem";

import "./Exercises.scss";
// import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
// import { faTrash } from "@fortawesome/free-solid-svg-icons";
// import { faPlus } from "@fortawesome/free-solid-svg-icons";
// import { faHeart } from "@fortawesome/free-solid-svg-icons";


const initialValues = {
  reps: "",
  sets: "",
};

export default function EditWorkout() {

  const [values, setValues] = useState(initialValues);

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setValues({
      ...values,
      [name]: value,
    });
  };

  const onSubmit = (event) => {
    event.preventDefault();
    
    const data = values;
    console.log("values",data)

 

    // axios.put('http://localhost:8001/api/workouts', values)
    //   .then((res) => {
    //     console.log(res.data);
    //   }).catch((error) => {
    //     console.log(error);
    //   });
    // setnewWorkout({...exerciseCart})
  };
  console.log(onSubmit);


 
return (
  <>
  <div>
    <form>
       <input
        type="text"
        value={values.sets}
        onChange={handleInputChange}
        name="sets"
        className="form-control" /> 
        <input
        type="text"
        value={values.reps}
        onChange={handleInputChange}
        name="reps"
        className="form-control" />   
      <button type="submit">Submit</button>  
    </form>
  </div>
  </>
)

}