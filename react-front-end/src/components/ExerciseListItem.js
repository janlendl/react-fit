import { Link } from "react-router-dom"

import "./Exercises.scss";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faTrash } from "@fortawesome/free-solid-svg-icons";

export default function ExerciseListItem(props) {
  console.log("You've reached the Exercises Page")
  
  const { gif, name, bodyPart, target, equipment } = props

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

          <div className="workoutContainer col-4 clearfix">
            <div className="card boxstyle">
              <div className="row row-cols-2 flex-nowrap">
                <table>
                  <tbody>
                    <tr>

                      <td className="exerciseContainer">
                        <div className="col-md-5">
                          <h5 className="card-title">{name}</h5>
                          <img src={gif} className="img-fluid rounded-start" alt={name} />
                        </div>
                        <div className="exerciseInfo col-md-10">
                          <div className="card-body">

                            <div className="exerciseContainer">
                              <ul className="card-text">
                                <li>
                                  Category: {bodyPart}
                                </li>
                                <li>
                                  Target: {target}
                                </li>
                                <li>
                                  Equipment: {equipment}
                                </li>
                              </ul>
                            </div>
                            <a className="btn btn-primary">Add</a>
                          </div>
                        </div>
                      </td>

                    </tr>
                  </tbody>
                </table>
              </div>
            </div>
          </div>

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
                    <a className="mv btn btn-primary">Save</a>


                  </div>
                </div>
              </div>
            </div>
          </div>


        </div>
      </div>

    </>
  )
}

// Mimi API request for List Exercise By Body Part = Back



// Mimic API request for List All Body Parts

// const allBodyParts = ["back", "cardio", "chest", "lower arms", "lower legs", "neck", "shoulders", "upper arms", "upper legs", "waist"]