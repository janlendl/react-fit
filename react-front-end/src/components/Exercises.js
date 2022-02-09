import axios from "axios";
import { Link, useParams } from "react-router-dom"
import { useState, useEffect } from "react";

export default function Exercises(props) {
  console.log("You've reached the Exercises Page")

  let { category } = useParams();

  const [exerciseData, setExerciseData] = useState([])

  console.log(category)

  let apiExerciseByBodyPart = {
    method: 'GET',
    url: `https://exercisedb.p.rapidapi.com/exercises/bodyPart/${category}`,
    headers: {
      'x-rapidapi-host': 'exercisedb.p.rapidapi.com',
      'x-rapidapi-key': 'c246264552msh38d3d1e59cd14a4p155348jsnd0dcd0a98213'
    }
  };

  useEffect(() => {
    const getExercises = async (category) => {
      const response = await axios.request(apiExerciseByBodyPart)
      setExerciseData(response.data)
    };
    getExercises();
  }, [category])


  return (

    <section className="containerMain categoriesWrapper">

      <article>
        <Link to="/exercises/back">
          <button>back</button>
        </Link>
      </article>

      <article>
        <Link to="/exercises/cardio">
          <button>cardio</button>
        </Link>
      </article>

      <article>
        <Link to="/exercises/chest">
          <button>chest</button>
        </Link>
      </article>

      <article>
        <Link to="/exercises/lower%20arms">
          <button>lower arms</button>
        </Link>
      </article>

      <article>
        <Link to="/exercises/lower%20legs">
          <button>lower legs</button>
        </Link>
      </article>

      <article>
        <Link to="/exercises/shoulders">
          <button>shoulders</button>
        </Link>
      </article>

      <article>
        <Link to="/exercises/upper%20arms">
          <button>upper arms</button>
        </Link>
      </article>

      <article>
        <Link to="/exercises/upper%20legs">
          <button>upper legs</button>
        </Link>
      </article>

      <article>
        <Link to="/exercises/waist">
          <button>core</button>
        </Link>
      </article>

    </section>


  )
}

// Mimi API request for List Exercise By Body Part = Back

// const backExercises = [
//   {
//     bodyPart: "back",
//     equipment: "cable",
//     gifUrl: "http://d205bpvrqc9yn1.cloudfront.net/0007.gif",
//     id: "0007",
//     name: "alternate lateral pulldown",
//     target: "lats"
//   },
//   {
//     bodyPart: "back",
//     equipment: "body weight",
//     gifUrl: "http://d205bpvrqc9yn1.cloudfront.net/3293.gif",
//     id: "3293",
//     name: "archer pull up",
//     target: "lats"
//   },
//   {
//     bodyPart: "back",
//     equipment: "leverage machine",
//     gifUrl: "http://d205bpvrqc9yn1.cloudfront.net/0015.gif",
//     id: "0015",
//     name: "assisted parallel close grip pull-up",
//     target: "lats"
//   },
//   {
//     bodyPart: "back",
//     equipment: "leverage machine",
//     gifUrl: "http://d205bpvrqc9yn1.cloudfront.net/0017.gif",
//     id: "0017",
//     name: "assisted pull-up",
//     target: "lats"
//   }
// ]

// Mimic API request for List All Body Parts

// const allBodyParts = ["back", "cardio", "chest", "lower arms", "lower legs", "neck", "shoulders", "upper arms", "upper legs", "waist"]