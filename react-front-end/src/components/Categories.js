import axios from "axios";
import { Link, useNavigate } from "react-router-dom";

import "./CategoriesStyle.scss"

export default function Categories() {

  // 1. Declare a onClick FN, name: getBodyPartName, Parameter = (bodyPartName)
  // 2. onClick pass bodyPartName to Exercises Component
  // 3. Implement useState [ exerciseData, setExerciseData ] 
  // 4. Declare FN, name: getAxiosExerciseByBodyPartOne WITHIN setExerciseData
  // 5. Upon initial render of the page execute setExerciseData using the bodyPartName as Arguement to String Interpolate Axios URL and render respective Exercise List
  // 6. Req Params to Grab BodyPart


  return (

    <section className="containerMain categoriesWrapper">

      <article className="workoutCategories">
        <Link to="/exercises/back">
          <img src="https://fitonapp.com/wp-content/themes/fiton-20201105/images/Rectangle-7.png" />
        </Link>
        <span className="title">Back</span>
      </article>

      <div className="workoutCategories">
        <div className="title">Cardio</div>
      </div>

      <div className="workoutCategories">
        <div className="title">Chest</div>
      </div>

      <div className="workoutCategories">
        <div className="title">Lower Arms</div>
      </div>

      <div className="workoutCategories">
        <div className="title">Lower Legs</div>
      </div>

      <div className="workoutCategories">
        <div className="title">Shoulders</div>
      </div>

      <div className="workoutCategories">
        <div className="title">Upper Arms</div>
      </div>

      <div className="workoutCategories">
        <div className="title">Upper Legs</div>
      </div>

      <div className="workoutCategories">
        <div className="title">Core</div>
      </div>

    </section>
  )
}
