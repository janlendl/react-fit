import axios from "axios";
import { Link } from "react-router-dom";

import "./CategoriesStyle.scss"

export default function categories() {

  let apiGetRequest = {
    method: 'GET',
    url: 'https://exercisedb.p.rapidapi.com/exercises/bodyPartList',
    headers: {
      'x-rapidapi-host': 'exercisedb.p.rapidapi.com',
      'x-rapidapi-key': 'c246264552msh38d3d1e59cd14a4p155348jsnd0dcd0a98213'
    }
  };

  // axios.request(apiGetRequest)
  //   .then((response) => {
  //     console.log('I am axios GET res', response.data)
  //   }).catch((error) => {
  //     console.log(error.message)
  //   })

  const allBodyparts = [ "back", "cardio", "chest", "lower arms", "lower legs", "neck", "shoulders", "upper arms", "upper legs", "waist" ]

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