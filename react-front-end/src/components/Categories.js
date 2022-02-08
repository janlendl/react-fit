import axios from "axios";
import "./CategoriesStyle.scss"

export default function categories({ }) {

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
        <img src="https://fitonapp.com/wp-content/themes/fiton-20201105/images/Rectangle-7.png"/>
        <div className="title">Back</div>
      </div>
      <div className="workoutCategories">
        Cardio
      </div>
      <div className="workoutCategories">
        Chest
      </div>
      <div className="workoutCategories">
        Lower Arms
      </div>
      <div className="workoutCategories">
        Lower Legs
      </div>
      <div className="workoutCategories">
        Shoulders
      </div>
      <div className="workoutCategories">
        Upper Arms
      </div>
      <div className="workoutCategories">
        Upper Legs
      </div>
      <div className="workoutCategories">
        Core
      </div>

    </div>



    
  )
}