import axios from "axios";
import { useState, useEffect } from "react";
import { Link, useParams } from "react-router-dom";

import ExerciseListItem from "./ExerciseListItem";

import "./Exercises.scss";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faTrash } from "@fortawesome/free-solid-svg-icons";
import { faPlus } from "@fortawesome/free-solid-svg-icons";
import { faHeart } from "@fortawesome/free-solid-svg-icons";



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
];

// Mimic API request for List All Body Parts
// const allBodyParts = ["back", "cardio", "chest", "lower arms", "lower legs", "neck", "shoulders", "upper arms", "upper legs", "waist"]

export default function ExerciseList() {
  let { category } = useParams();


  const [exerciseData, setExerciseData] = useState([]);
  const [exerciseCart, setExerciseCart] = useState([]);
  const [workoutName, setWorkoutName] = useState("");

  // let apiExerciseByBodyPart = {
  //   method: 'GET',
  //   url: `https://exercisedb.p.rapidapi.com/exercises/bodyPart/${category}`,
  //   headers: {
  //     'x-rapidapi-host': 'exercisedb.p.rapidapi.com',
  //     'x-rapidapi-key': 'c2c9da1eb8msh17b3797bf1980ddp197370jsn45878d3b3863'
  //   }
  // };

  // Loads previous state from Local Storage (from broswer)
  useEffect(() => {
    const data = localStorage.getItem('exercise-cart');
    if (data) {
      // console.log('I am saved exercise-cart data', data)
      setExerciseCart(JSON.parse(data))
    }
  }, [])

  useEffect(() => {
    // const getExercises = async () => {
    //   const response = await axios.request(apiExerciseByBodyPart);
    //   setExerciseData(response.data).catch((error) => {
    //     console.log(error.message);
    //   });
    // };
    // getExercises();

    // Saved exercise cart items to Local Storage (from browser)
    localStorage.setItem('exercise-cart', JSON.stringify(exerciseCart))
  }, [category]);

  const onAdd = (exercise) => {
    // console.log('INPUT: exercise param', exercise)
    const singleExercise = backExercises.find(erex => erex.id === exercise);
    // console.log('Match singleExercise', singleExercise)
    const exists = exerciseCart.find(erex => erex.id === exercise);
    if (exists) {
      return null;
    } else {
      setExerciseCart([...exerciseCart, {...singleExercise, sets: "", reps: ""} ]);
    }
  };

  // console.log(exerciseCart);

  //=====FOR REVIEW BY GABY IF KEEP OR DELETE======
  // const onSave = (event) => {
  //    event.preventDefault();
  //   console.log("submission prevented");
  //  };
  //=============================================
  const onSubmit = () => {
    const date = new Date().toLocaleDateString('en-CA');
    const workoutData = {
      workoutName,
      date,
      exercises: exerciseCart  
    }

    console.log(workoutData);

    axios.put('/api/createWorkout', {workoutData})
      .then((res) => {
        console.log(res.data)
      }).catch((error) => {
        console.log(error)
      });
  };
  console.log(onSubmit)


  const onDelete = (exercise) => {
    setExerciseCart(
      exerciseCart.filter(item => item !== exercise)
    )
  }

  const exerciseItem = backExercises.map((exercise) => {

    return (
      <ExerciseListItem
        {...exercise}
        key={exercise.id}
        gif={exercise.gifUrl}
        name={exercise.name}
        bodyPart={exercise.bodyPart}
        target={exercise.target}
        equipment={exercise.equipment}
        onAdd={onAdd}
      />
    );
  });

// handler to update the sets and reps to the cart
const updateHandler = (index, data) => {

  setExerciseCart((carts) => carts.map((cart, i) => {
    if(index === i) {
      return  {...cart, ...data}; 
    }
    return cart;
  }));
}

  return (
    <>
      <div className="topWrapper"></div>
      <div className="container-lg mt-4 pt-4">
        <div className="row noMrg justify-content-md-center">
          <div className="col col-2">
            <h3>Categories</h3>
            <ul className="nav flex-column">
              <li className="nav-item">
                <Link to="/exercises/back">
                  <span className="nav-link">Back</span>
                </Link>
              </li>
              <li className="nav-item">
                <Link to="/exercises/cardio">
                  <span className="nav-link">Cardio</span>
                </Link>
              </li>
              <li className="nav-item">
                <Link to="/exercises/chest">
                  <span className="nav-link">Chest</span>
                </Link>
              </li>
              <li className="nav-item">
                <Link to="/exercises/lower%20arms">
                  <span className="nav-link">Lower Arms</span>
                </Link>
              </li>
              <li className="nav-item">
                <Link to="/exercises/lower%20legs">
                  <span className="nav-link">Lower Legs</span>
                </Link>
              </li>
              <li className="nav-item">
                <Link to="/exercises/shoulders">
                  <span className="nav-link">Shoulders</span>
                </Link>
              </li>
              <li className="nav-item">
                <Link to="/exercises/upper%20arms">
                  <span className="nav-link">Upper Arms</span>
                </Link>
              </li>
              <li className="nav-item">
                <Link to="/exercises/upper%20legs">
                  <span className="nav-link">Upper Legs</span>
                </Link>
              </li>
              <li className="nav-item">
                <Link to="/exercises/waist">
                  <span className="nav-link">Core</span>
                </Link>
              </li>
            </ul>
          </div>

          <div className="col-md-auto">
            {exerciseItem}
          </div>

          <div className="col col-lg-4">
            <div className="card d-grid">
              <div className="card-header">
                <h5 className="card-title text-center capitalize">Create Your Workout</h5>
              </div>
              <div>
                <div>
                  <input
                    type="text"
                    name="workout_name"
                    id="workout_id"
                    placeholder="Add Workout Name"
                    onChange={(event) => setWorkoutName(event.target.value)}
                    className="form-control w100" />
                </div>
              </div>

              {exerciseCart.map((exercise, index) => {
                return (

                  <div className="card-body w-0" key={exercise.id}>
                    <h5 className="capitalize">{exercise.name}</h5>
                    <div className="card-text flex align-items-center">
                      <div >
                        <label htmlFor="Sets" className="form-label">Sets</label>
                        <input
                          type="text"
                          pattern="[0-9]"
                          name="sets"
                          id='sets'
                          value={exercise.sets}
                          onChange={(event) => updateHandler(index, {sets: event.target.value})}
                          className="form-control" />
                      </div>
                      <div>
                        <label htmlFor="Sets" className="form-label">Reps</label>
                        <input
                          type="text"
                          pattern="[0-9]"
                          name="reps"
                          id="reps"
                          value={exercise.reps}
                          onChange={(event) => updateHandler(index, {reps: event.target.value})}
                          className="form-control" />
                      </div>
                      <button className="btn btn-primary" onClick={() => onDelete(exercise)}><FontAwesomeIcon icon={faTrash} /></button>
                    </div>
                    <div className="d-flex card-text justify-content-end">
                      {/*======= FOR REVIEW BY GABY============ */}
                      {/* <div>
                        <button type="submit" className="btn-sm" onClick={onSave}><FontAwesomeIcon icon={faPlus} /></button>
                      </div> */}
                      {/* <div>
                        <button type="submit" className="btn-sm"><FontAwesomeIcon icon={faTrash} /></button>
                      </div> */}
                      {/* ==================================== */}
                    </div>
                  </div>

                );
              })}
              
              <div className="card-footer d-flex justify-content-between">
                <div>
                  <button type="submit" className="btn btn-primary" onClick={onSubmit} ><FontAwesomeIcon icon={faHeart} /></button>
                </div>
                <button type="submit" className="btn btn-primary"><FontAwesomeIcon icon={faTrash} /></button>
              </div>

            </div>
          </div>
        </div>
      </div>


    </>
  );
};

