import Exercises from "./Exercises";
import { useState, useEffect } from "react";





export default function Workouts(props) {

  const [exerciseList, setaddExerciseList] = useState([]);
  console.log("this is the added Items", exerciseList);
  const [repCount, setRepCount] = useState(0);
  const [setsCount, setSetsCount] = useState(0);


  const exercises = [
    {
      id: 1,
      name: "arms",
      sets: 3,
      reps: 15,
    },
    {
      id: 2,
      name: "legs",
      sets: 2,
      reps: 15,
    },
    {
      id: 3,
      name: "shoulders",
      sets: 5,
      reps: 15,
    },
  ];
  //add exercises to workout
  const addToWorkouts = (item) => {
    setaddExerciseList([...exerciseList, item]);
  };

  //remove Items from the Workout list
  const removeFromWorkouts = (item) => {
    let exerciselistCopy = [...exerciseList];
    exerciselistCopy = exerciselistCopy.filter(workoutItems => workoutItems.id != item.id);
    setaddExerciseList(exerciselistCopy);
  };

  const exerciseItems = exercises.map((item) => (
    <div key={item.id}>
      {`${item.name} Sets:${item.sets}, Reps:${item.reps}`}
      <input type='submit' value='add' onClick={() => addToWorkouts(item)} />
    </div>

  ));

  const workoutItems = exerciseList.map((item) => (
    <div key={item.id}> {`${item.name} Sets:${item.sets}, Reps:${item.reps}`}
      <input type='submit' value='add' onClick={() => removeFromWorkouts(item)} />
    </div>

  ));

  return (
    <div>
      Exercises
      <div className="text-black">{exerciseItems}</div>

    Workout
    <div className="text-black">{workoutItems}</div>
    
    </div>
  );
}



{/* <div className="col-5">
            <div className='flex bg-light flex flex-column overflow-scroll boxstyle'>
              <div className="flex-1 py-6 overflow-auto px-4 sm:px-6">
                <div className="flex align-items-start justify-content-between">
                  <h2 className="fw-bold text-black">Selected Exercises</h2>
                  <div className="ms-3 h-7 flex align-items-center">
                    <button type="button" className="btn-close">X</button>
                  </div>
                </div>
                <div className="mt-4">
                  <div className="flow-root">
                    <ul className="list-group mt-4">
                      <li className="py-6 flex list-group-item purple">
                        <div className="flex-shrink-0 ps-1">
                          <img src="https://fitonapp.com/wp-content/themes/fiton-20201105/images/Rectangle-7.png" className="rounded-0 mrg-right sizeImg"></img>
                        </div>

                        <div className="ms-4 flex-1 flex flex-column">
                          <div>
                            <div className="flex justify-content-between text-close">
                              <h3>
                                <a>Name of product</a>
                              </h3>
                            </div>
                          </div>

                          <div className="flex-1 flex align-items-end justify-content-between fs-5">
                            <p> QTY</p>
                            <div className="flex">
                              <button type="button" className="btn btn-primary">Remove</button>
                            </div>
                          </div>
                        </div>
                      </li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>
          </div> */}