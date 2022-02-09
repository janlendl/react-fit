import { useParams } from "react-router-dom"

export default function Exercises(props) {
  console.log("You've reached the Exercises Page")

  console.log('Exercise Props', props)

  const { id } = useParams();
  
  console.log(id)

  return (
    <>




    </>
  )
}


// Run API call on this page OR Create Category List Item Component VIA useEffect

// let apiAllBodyParts = {
//   method: 'GET',
//   url: 'https://exercisedb.p.rapidapi.com/exercises/bodyPartList',
//   headers: {
//     'x-rapidapi-host': 'exercisedb.p.rapidapi.com',
//     'x-rapidapi-key': 'c246264552msh38d3d1e59cd14a4p155348jsnd0dcd0a98213'
//   }
// };

// axios.request(apiAllBodyParts)
//   .then((response) => {
//     console.log('I am axios GET res', response.data)
//   }).catch((error) => {
//     console.log(error.message)
//   })
// Mimic API request for List All Body Parts

// const allBodyParts = ["back", "cardio", "chest", "lower arms", "lower legs", "neck", "shoulders", "upper arms", "upper legs", "waist"]

// let apiExerciseByBodyPart = {
//   method: 'GET',
//   // Note: the END of the URL is dynamic to render the corresponding list of exercises
//   // For example: 'https://exercisedb.p.rapidapi.com/exercises/bodyPart/${ BODY PART }',
//   url: 'https://exercisedb.p.rapidapi.com/exercises/bodyPart/back',
//   headers: {
//     'x-rapidapi-host': 'exercisedb.p.rapidapi.com',
//     'x-rapidapi-key': 'c246264552msh38d3d1e59cd14a4p155348jsnd0dcd0a98213'
//   }
// };

// axios.request(apiExerciseByBodyPart)
//   .then((response) => {
//     console.log('I am axios GET res', response.data)
//   }).catch((error) => {
//     console.log(error.message)
//   })

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