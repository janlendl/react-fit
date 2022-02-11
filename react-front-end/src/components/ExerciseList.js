import axios from "axios";
import { useState, useEffect } from "react";
import { Link, useParams } from "react-router-dom";

import ExerciseListItem from "./ExerciseListItem";

import "./Exercises.scss";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faTrash } from "@fortawesome/free-solid-svg-icons";

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

export default function ExerciseList() {
  let { category } = useParams();

  const [exerciseData, setExerciseData] = useState([])

  let apiExerciseByBodyPart = {
    method: 'GET',
    url: `https://exercisedb.p.rapidapi.com/exercises/bodyPart/${category}`,
    headers: {
      'x-rapidapi-host': 'exercisedb.p.rapidapi.com',
      'x-rapidapi-key': 'c2c9da1eb8msh17b3797bf1980ddp197370jsn45878d3b3863'
    }
  };

  useEffect(() => {
    const getExercises = async () => {
      const response = await axios.request(apiExerciseByBodyPart)
      setExerciseData(response.data).catch((error) => {
        console.log(error.message);
      });
    };
    getExercises();
  }, [category])

  const exerciseItem = backExercises.map((exercise) => {
    return (
      <ExerciseListItem
        key={exercise.id}
        gif={exercise.gifUrl}
        name={exercise.name}
        bodyPart={exercise.bodyPart}
        target={exercise.target}
        equipment={exercise.equipment}
        />
        )
      })
      
      return (
        <>
       <div className="topWrapper">
        <div className="row">
          <div className="col-1 text-black sidebar fle flex-column boxstyle">
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

        {exerciseItem}
      
          <div className="col-5">
            <div className='flex bg-light flex flex-column overflow-scroll boxstyle'>
              <div className="flex-1 py-6 overflow-auto px-4 sm:px-6">
                <div className="flex align-items-start justify-content-between">
                  <h2 className="fw-bold text-black">Selected Exercises</h2>
                  <div className="ms-3 h-7 flex align-items-center">
                    {/* <button type="button" className="btn-close">X</button> */}
                  </div>
                </div>
                <div className="mt-4">
                  <div className="flow-root">
                    {/* Begining of Exercise List */}
                    <ul className="list-group mt-4">
                      <li className="py-6 flex list-group-item purple">
                        <div className="flex-shrink-0 ps-1">
                          {/* <img src="https://fitonapp.com/wp-content/themes/fiton-20201105/images/Rectangle-7.png" className="rounded-0 mrg-right sizeImg"></img> */}
                        </div>
                        <div className="ms-4 flex-1 flex flex-column">
                          <div>
                            <div className="flex justify-content-between text-close">
                              <span>
                                Exercise Name
                              </span>
                              <form>
                                Sets
                                Reps
                              </form>
                              <FontAwesomeIcon className="trashIcon" icon={faTrash} />
                            </div>
                          </div>
                          <div className="flex-1 flex align-items-end justify-content-between fs-5">
                            <div className="flex">
                            </div>
                          </div>
                        </div>
                      </li>
                    </ul>
                    {/* End of Exercise List */}
                    <button className="mv btn btn-primary">Save</button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

    </>
  );
};