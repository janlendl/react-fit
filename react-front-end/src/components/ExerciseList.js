import axios from "axios";
import { useState, useEffect } from "react";
import { Link, useParams } from "react-router-dom";

import ExerciseListItem from "./ExerciseListItem";
import Dialogue from "./Dialogue";

import "./Exercises.scss";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faTrash } from "@fortawesome/free-solid-svg-icons";
import { faHeart } from "@fortawesome/free-solid-svg-icons";
import { faMinus } from "@fortawesome/free-solid-svg-icons";

// const backExercises = [
//   {
//     bodyPart: "back",
//     equipment: "cable",
//     gifUrl: "http://d205bpvrqc9yn1.cloudfront.net/0007.gif",
//     id: "1",
//     name: "alternate lateral pulldown",
//     target: "lats"
//   },
//   {
//     bodyPart: "back",
//     equipment: "body weight",
//     gifUrl: "http://d205bpvrqc9yn1.cloudfront.net/3293.gif",
//     id: "2",
//     name: "archer pull up",
//     target: "lats"
//   },
//   {
//     bodyPart: "back",
//     equipment: "leverage machine",
//     gifUrl: "http://d205bpvrqc9yn1.cloudfront.net/0015.gif",
//     id: "3",
//     name: "assisted parallel close grip pull-up",
//     target: "lats"
//   },
//   {
//     bodyPart: "back",
//     equipment: "leverage machine",
//     gifUrl: "http://d205bpvrqc9yn1.cloudfront.net/0017.gif",
//     id: "4",
//     name: "assisted pull-up",
//     target: "lats"
//   }, {
//     bodyPart: "back",
//     equipment: "cable",
//     gifUrl: "http://d205bpvrqc9yn1.cloudfront.net/0007.gif",
//     id: "5",
//     name: "alternate lateral pulldown",
//     target: "lats"
//   },
//   {
//     bodyPart: "back",
//     equipment: "body weight",
//     gifUrl: "http://d205bpvrqc9yn1.cloudfront.net/3293.gif",
//     id: "6",
//     name: "archer pull up",
//     target: "lats"
//   },
//   {
//     bodyPart: "back",
//     equipment: "leverage machine",
//     gifUrl: "http://d205bpvrqc9yn1.cloudfront.net/0015.gif",
//     id: "7",
//     name: "assisted parallel close grip pull-up",
//     target: "lats"
//   },
//   {
//     bodyPart: "back",
//     equipment: "leverage machine",
//     gifUrl: "http://d205bpvrqc9yn1.cloudfront.net/0017.gif",
//     id: "8",
//     name: "assisted pull-up",
//     target: "lats"
//   }, {
//     bodyPart: "back",
//     equipment: "cable",
//     gifUrl: "http://d205bpvrqc9yn1.cloudfront.net/0007.gif",
//     id: "9",
//     name: "alternate lateral pulldown",
//     target: "lats"
//   },
//   {
//     bodyPart: "back",
//     equipment: "body weight",
//     gifUrl: "http://d205bpvrqc9yn1.cloudfront.net/3293.gif",
//     id: "10",
//     name: "archer pull up",
//     target: "lats"
//   },
//   {
//     bodyPart: "back",
//     equipment: "leverage machine",
//     gifUrl: "http://d205bpvrqc9yn1.cloudfront.net/0015.gif",
//     id: "11",
//     name: "assisted parallel close grip pull-up",
//     target: "lats"
//   },
//   {
//     bodyPart: "back",
//     equipment: "leverage machine",
//     gifUrl: "http://d205bpvrqc9yn1.cloudfront.net/0017.gif",
//     id: "12",
//     name: "assisted pull-up",
//     target: "lats"
//   },
//   {
//     bodyPart: "back",
//     equipment: "cable",
//     gifUrl: "http://d205bpvrqc9yn1.cloudfront.net/0007.gif",
//     id: "13",
//     name: "alternate lateral pulldown",
//     target: "lats"
//   },
//   {
//     bodyPart: "back",
//     equipment: "body weight",
//     gifUrl: "http://d205bpvrqc9yn1.cloudfront.net/3293.gif",
//     id: "14",
//     name: "archer pull up",
//     target: "lats"
//   },
//   {
//     bodyPart: "back",
//     equipment: "leverage machine",
//     gifUrl: "http://d205bpvrqc9yn1.cloudfront.net/0015.gif",
//     id: "15",
//     name: "assisted parallel close grip pull-up",
//     target: "lats"
//   },
//   {
//     bodyPart: "back",
//     equipment: "leverage machine",
//     gifUrl: "http://d205bpvrqc9yn1.cloudfront.net/0017.gif",
//     id: "16",
//     name: "assisted pull-up",
//     target: "lats"
//   }, {
//     bodyPart: "back",
//     equipment: "cable",
//     gifUrl: "http://d205bpvrqc9yn1.cloudfront.net/0007.gif",
//     id: "17",
//     name: "alternate lateral pulldown",
//     target: "lats"
//   },
//   {
//     bodyPart: "back",
//     equipment: "body weight",
//     gifUrl: "http://d205bpvrqc9yn1.cloudfront.net/3293.gif",
//     id: "18",
//     name: "archer pull up",
//     target: "lats"
//   },
//   {
//     bodyPart: "back",
//     equipment: "leverage machine",
//     gifUrl: "http://d205bpvrqc9yn1.cloudfront.net/0015.gif",
//     id: "19",
//     name: "assisted parallel close grip pull-up",
//     target: "lats"
//   },
//   {
//     bodyPart: "back",
//     equipment: "leverage machine",
//     gifUrl: "http://d205bpvrqc9yn1.cloudfront.net/0017.gif",
//     id: "20",
//     name: "assisted pull-up",
//     target: "lats"
//   }, {
//     bodyPart: "back",
//     equipment: "cable",
//     gifUrl: "http://d205bpvrqc9yn1.cloudfront.net/0007.gif",
//     id: "21",
//     name: "alternate lateral pulldown",
//     target: "lats"
//   },
//   {
//     bodyPart: "back",
//     equipment: "body weight",
//     gifUrl: "http://d205bpvrqc9yn1.cloudfront.net/3293.gif",
//     id: "22",
//     name: "archer pull up",
//     target: "lats"
//   },
//   {
//     bodyPart: "back",
//     equipment: "leverage machine",
//     gifUrl: "http://d205bpvrqc9yn1.cloudfront.net/0015.gif",
//     id: "23",
//     name: "assisted parallel close grip pull-up",
//     target: "lats"
//   },
//   {
//     bodyPart: "back",
//     equipment: "leverage machine",
//     gifUrl: "http://d205bpvrqc9yn1.cloudfront.net/0017.gif",
//     id: "24",
//     name: "assisted pull-up",
//     target: "lats"
//   }
// ];

export default function ExerciseList() {
  let { category } = useParams();

  const [exerciseData, setExerciseData] = useState([]);
  const [exerciseCart, setExerciseCart] = useState([]);
  const [workoutName, setWorkoutName] = useState("");
  const [showSaveDialogue, setShowSaveDialogue] = useState(false);
  const [showDeleteDialogue, setShowDeleteDialogue] = useState(false);

  // ----- API REQUEST SETTINGS -----
  let apiExerciseByBodyPart = {
    method: 'GET',
    url: `https://exercisedb.p.rapidapi.com/exercises/bodyPart/${category}`,
    headers: {
      'x-rapidapi-host': 'exercisedb.p.rapidapi.com',
      'x-rapidapi-key': '9555d07c58msh23cc2d21a1fd290p1a3f88jsn6e3ffdf744a3'
    }
  };

  // ----- CALL API, DEPENDENT ON CATEGORY (URL) CHANGE -----
  useEffect(() => {

    axios.request(apiExerciseByBodyPart)
      .then((res) => {
        console.log("RESPONSE", res.data);
        setExerciseData(res.data);
      })
      .catch((err) => {
        console.log("Error: ", err)
      });
  }, [category]);

  // ----- PERSISTENT STATE pt2 ----- Loads previous state from Local Storage (from broswer)
  // Note: pt2 must stay above pt1 or State will be overwritten.
  useEffect(() => {
    const data2 = localStorage.getItem('workout-name')
    const data = localStorage.getItem('exercise-cart');
    if (data) {
      // console.log('I am saved exercise-cart data', data)
      setWorkoutName(JSON.parse(data2))
      setExerciseCart(JSON.parse(data))
    }
  }, [])

  // ----- PERSISTENT STATE pt1 ----- Save exercise cart items to Local Storage
  useEffect(() => {
    localStorage.setItem('workout-name', JSON.stringify(workoutName))
    localStorage.setItem('exercise-cart', JSON.stringify(exerciseCart))
  })

  const onAdd = (exercise) => {
    // console.log('INPUT: exercise param', exercise)
    const singleExercise = exerciseData.find(erex => erex.id === exercise);
    // console.log('Match singleExercise', singleExercise)
    const exists = exerciseCart.find(erex => erex.id === exercise);
    if (exists) {
      return null;
    } else {
      setExerciseCart([...exerciseCart, { ...singleExercise, sets: "", reps: "" }]);
    }
  };

  const reset = () => {
    setExerciseCart([]);
    setWorkoutName("Add Workout Name");
    setShowSaveDialogue(false);
    setShowDeleteDialogue(false);
  };

  const cancel = () => {
    setShowSaveDialogue(false);
    setShowDeleteDialogue(false);
  }

  const onSubmit = () => {
    const date = new Date().toLocaleDateString('en-CA');
    const workoutData = {
      workoutName,
      date,
      exercises: exerciseCart
    }
    // console.log(workoutData);

    axios.put('/api/createWorkout', { workoutData })
      .then((res) => {
        console.log("Sending New Workout data to Backend: ", workoutData);
      }).catch((error) => {
        console.log(error)
      });

    reset();
  };
  // console.log(onSubmit)

  const onDelete = (exercise) => {
    setExerciseCart(
      exerciseCart.filter(item => item !== exercise)
    )
  }

  const exerciseItem = exerciseData.map((exercise, i) => {

    return (
      <ExerciseListItem
        {...exercise}
        key={i}
        id={exercise.id}
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
      if (index === i) {
        return { ...cart, ...data };
      }
      return cart;
    }));
  }

  return (
    <>

      <div className="topWrapper"></div>
      <div className="container-lg mt-4 pt-4">
        <div className="row noMrg justify-content-md-center rounded-2">
          <div className="col col-1 mr-4">
            {/* Inserted: position-fixed */}
            <ul className="nav flex-column position-fixed">
              <h3>Categories</h3>
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

          {/* Inserted: 'section' tag to contain exerciseItem and exerciseCart */}
          <section className="d-flex">

            <div className="col-md-auto rounded-2">
              {exerciseItem}
            </div>

            <div className="col col-lg-4 rounded-2 custom-scroll">
              <div className="card d-grid rounded-2 stick-cart scroll">
                <div className="card-header bg-light rounded-2">
                  <h5 className="card-title text-center capitalize">Create Your Workout</h5>
                </div>
                <div>
                  <input
                    type="text"
                    name="workout_name"
                    id="workout_id"
                    value={workoutName}
                    placeholder="Add Workout Name"
                    onChange={(event) => setWorkoutName(event.target.value)}
                    className="form-control w100 inputborder" />
                </div>
                {exerciseCart.map((exercise, index) => {
                  return (

                    <div className="card-body w-0" id={exercise.id}>
                      <h5 className="capitalize">{exercise.name}</h5>
                      <div className="card-text flex align-items-center">

                        <div>
                          <label htmlFor="Sets" className="form-label">Sets</label>
                          <input
                            type="text"
                            pattern='^[1-9]\d*(?:\.\d+)?$'
                            name="sets"
                            id='sets'
                            value={exercise.sets}
                            onChange={(event) => updateHandler(index, { sets: event.target.value })}
                            className="form-control" />
                        </div>

                        <div>
                          <label htmlFor="Sets" className="form-label">Reps</label>
                          <input
                            type="text"
                            pattern='^[1-9]\d*(?:\.\d+)?$'
                            name="reps"
                            id="reps"
                            value={exercise.reps}
                            onChange={(event) => updateHandler(index, { reps: event.target.value })}
                            className="form-control" />
                        </div>

                        <button className="btn btn-primary" onClick={() => onDelete(exercise)}><FontAwesomeIcon icon={faMinus} /></button>
                      </div>
                    </div>

                  );
                })}

                <div className="card-footer d-flex justify-content-between bg-light rounded-2">
                  <div>
                    <Dialogue show={showSaveDialogue}
                      title="Workout Saved!"
                      description="Visit the Workout Page to Edit Sets and Reps!"
                      confirm={onSubmit}
                      confirmMessage="close" />
                    <button type="submit" className="btn btn-primary" onClick={() => { setShowSaveDialogue(true) }} ><FontAwesomeIcon icon={faHeart} /></button>
                  </div>

                  <Dialogue show={showDeleteDialogue}
                    title="Delete Workout?"
                    description="Are you sure you want to delete this Workout?"
                    confirm={reset}
                    confirmMessage="Yes"
                    cancel={cancel}
                    cancelMessage="No"
                  />

                  <button type="submit" className="btn btn-primary" onClick={() => { setShowDeleteDialogue(true) }}><FontAwesomeIcon icon={faTrash} /></button>
                </div>

              </div>
            </div>

          </section >

        </div>
      </div>

    </>
  );
};