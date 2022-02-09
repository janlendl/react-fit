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
          <div className="title">Back</div>
        </Link>
      </article>

      <article className="workoutCategories">
        <Link to="/exercises/cardio">
          <img src="" />
          <div className="title">Cardio</div>
        </Link>
      </article>

      <article className="workoutCategories">
        <Link to="/exercises/chest">
          <img src="" />
          <div className="title">Chest</div>
        </Link>
      </article>

      <article className="workoutCategories">
        <Link to="/exercises/lower_arms">
          <img src="" />
          <div className="title">Lower Arms</div>
        </Link>
      </article>

      <article className="workoutCategories">
        <Link to="/exercises/lower_legs">
          <img src="" />
          <div className="title">Lower Legs</div>
        </Link>
      </article>

      <article className="workoutCategories">
        <Link to="/exercises/shoulders">
          <img src="" />
          <div className="title">Shoulders</div>
        </Link>
      </article>

      <article className="workoutCategories">
        <Link to="/exercises/upper_arms">
          <img src="" />
          <div className="title">Upper Arms</div>
        </Link>
      </article>

      <article className="workoutCategories">
        <Link to="/exercises/upper_legs">
          <img src="" />
          <div className="title">Upper Legs</div>
        </Link>
      </article>

      <article className="workoutCategories">
        <Link to="/exercises/core">
          <img src="" />
          <div className="title">Core</div>
        </Link>
      </article>

    </section>
  )
}
