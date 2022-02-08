import axios from "axios";
import { Link } from "react-router-dom";

import "./CategoriesStyle.scss"

export default function categories() {

  // 1. Declare a onClick FN, name: getBodyPartName, Parameter = (bodyPartName)
  // 2. onClick pass bodyPartName to Exercises Component
  // 3. Implement useState [ exerciseData, setExerciseData ] 
  // 4. Declare FN, name: getAxiosExerciseByBodyPartOne WITHIN setExerciseData
  // 5. Upon initial render of the page execute setExerciseData using the bodyPartName as Arguement to String Interpolate Axios URL and render respective Exercise List

  let apiAllBodyParts = {
    method: 'GET',
    url: 'https://exercisedb.p.rapidapi.com/exercises/bodyPartList',
    headers: {
      'x-rapidapi-host': 'exercisedb.p.rapidapi.com',
      'x-rapidapi-key': 'c246264552msh38d3d1e59cd14a4p155348jsnd0dcd0a98213'
    }
  };

  // axios.request(apiAllBodyParts)
  //   .then((response) => {
  //     console.log('I am axios GET res', response.data)
  //   }).catch((error) => {
  //     console.log(error.message)
  //   })
  // Mimic API request for List All Body Parts
  const allBodyParts = [ "back", "cardio", "chest", "lower arms", "lower legs", "neck", "shoulders", "upper arms", "upper legs", "waist" ]

  let apiExerciseByBodyPart = {
    method: 'GET',
    // Note: the END of the URL is dynamic to render the corresponding list of exercises
    // For example: 'https://exercisedb.p.rapidapi.com/exercises/bodyPart/${ BODY PART }',
    url: 'https://exercisedb.p.rapidapi.com/exercises/bodyPart/back',
    headers: {
      'x-rapidapi-host': 'exercisedb.p.rapidapi.com',
      'x-rapidapi-key': 'c246264552msh38d3d1e59cd14a4p155348jsnd0dcd0a98213'
    }
  };

  // axios.request(apiExerciseByBodyPart)
  //   .then((response) => {
  //     console.log('I am axios GET res', response.data)
  //   }).catch((error) => {
  //     console.log(error.message)
  //   })

  // Mimi API request for List Exercise By Body Part = Back
  const backExercises = [
    {
      bodyPart: "back",
      equipment: "cable",
      gifUrl: "http://d205bpvrqc9yn1.cloudfront.net/0007.gif",
      id: "0007",
      name: "alternate lateral pulldown",
      target: "lats"
    },
    {
      bodyPart: "back",
      equipment: "body weight",
      gifUrl: "http://d205bpvrqc9yn1.cloudfront.net/3293.gif",
      id: "3293",
      name: "archer pull up",
      target: "lats"
    },
    {
      bodyPart: "back",
      equipment: "leverage machine",
      gifUrl: "http://d205bpvrqc9yn1.cloudfront.net/0015.gif",
      id: "0015",
      name: "assisted parallel close grip pull-up",
      target: "lats"
    },
    {
      bodyPart: "back",
      equipment: "leverage machine",
      gifUrl: "http://d205bpvrqc9yn1.cloudfront.net/0017.gif",
      id: "0017",
      name: "assisted pull-up",
      target: "lats"
    }
  ]

  return (
  
    <div className="containerMain categoriesWrapper">

      <div className="workoutCategories">
        {/* This is an example of how each Category Image will be used as a Link to the Exercise Component */}
      <Link to="Exercises"><img src="https://fitonapp.com/wp-content/themes/fiton-20201105/images/Rectangle-7.png"/></Link>
        <div className="title">Back</div>
      </div>

      <div className="workoutCategories">
        <Link to="Exercises">Cardio</Link>
      </div>

      <div className="workoutCategories">
      <Link to="Exercises">Chest</Link>
      </div>

      <div className="workoutCategories">
      <Link to="Exercises">Lower Arms</Link>
      </div>

      <div className="workoutCategories">
      <Link to="Exercises">Lower Legs</Link>
      </div>

      <div className="workoutCategories">
      <Link to="Exercises">Shoulders</Link>
      </div>

      <div className="workoutCategories">
      <Link to="Exercises">Upper Arms</Link>
      </div>

      <div className="workoutCategories">
      <Link to="Exercises">Upper Legs</Link>
      </div>

      <div className="workoutCategories">
      <Link to="Exercises">Core</Link>
      </div>

    </div>
  )
}