import axios from "axios";
import { useState, useEffect } from "react";
import { Link, useParams } from "react-router-dom";

import ExerciseListItem from "./ExerciseListItem";

import "./Exercises.scss";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faTrash } from "@fortawesome/free-solid-svg-icons";
import { faSquarePlus } from "@fortawesome/free-solid-svg-icons";


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

export default function ExerciseList() {
  let { category } = useParams();

  const [exerciseData, setExerciseData] = useState([]);
  const [exerciseCart, setExerciseCart] = useState([]);

  // let apiExerciseByBodyPart = {
  //   method: 'GET',
  //   url: `https://exercisedb.p.rapidapi.com/exercises/bodyPart/${category}`,
  //   headers: {
  //     'x-rapidapi-host': 'exercisedb.p.rapidapi.com',
  //     'x-rapidapi-key': 'c2c9da1eb8msh17b3797bf1980ddp197370jsn45878d3b3863'
  //   }
  // };

  // useEffect(() => {
  //   const getExercises = async () => {
  //     const response = await axios.request(apiExerciseByBodyPart);
  //     setExerciseData(response.data).catch((error) => {
  //       console.log(error.message);
  //     });
  //   };
  //   getExercises();
  // }, [category]);

  const onAdd = (exercise) => {
    // console.log('INPUT: exercise param', exercise)
    const singleExercise = backExercises.find(erex => erex.id === exercise);
    // console.log('Match singleExercise', singleExercise)
    const exists = exerciseCart.find(erex => erex.id === exercise);
    if (exists) {
      return null;
    } else {
      setExerciseCart([...exerciseCart, { ...singleExercise }]);
      // setExerciseCart(prev => ({
      //    ...prev, singleExercise
      // }))
    }
  };
  // console.log(exerciseCart);
  // exerciseCart.map((exercise) => {
  //   console.log('Map exer name', exercise.name);
  // });

  const onDelete = (exercise) => {
    // console.log('This is a working button')
    // console.log('single exercise', exercise)
    // console.log('PRE entire exercisecart', exerciseCart)
    setExerciseCart(
      exerciseCart.filter(item => item !== exercise)
    )
    // console.log('POST entire exercisecart', exerciseCart)
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

  return (
    <>
      <div class="topWrapper"></div>
      <div className="container-lg mt-4 pt-4">
        <div className="row noMrg justify-content-md-center">
          <div class="col col-2">
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

          <div class="col-md-auto">
            {exerciseItem}
          </div>

          <div class="col col-lg-4">
            <div class="card d-grid">
              <div class="card-header">
                <h5 className="card-title capitalize">Create Custom Workout</h5>
              </div>
              {exerciseCart.map((exercise) => {
                return (
                  <div class="card-body" key={exercise.id}>

                    <h5 class="capitalize">{exercise.name}</h5>
                    <ul class="card-text">
                      <li >
                        <form>
                          <label for="Sets" class="form-label">Sets</label>
                          <input type="text" class="form-control"></input>
                          <label for="Sets" class="form-label">Reps</label>
                          <input type="text" class="form-control"></input>
                        </form>
                      </li>
                    </ul>
                    <button className="btn btn-primary" onClick={() => onDelete(exercise)}><FontAwesomeIcon icon={faTrash} /></button>
                  </div>
                );
              })}
              <div class="card-footer d-flex justify-content-between">
                <FontAwesomeIcon icon={faSquarePlus} />
                <FontAwesomeIcon icon={faTrash} />
              </div>

            </div>
          </div>
        </div>
      </div>


    </>
  );
};

