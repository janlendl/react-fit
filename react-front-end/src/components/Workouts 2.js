
// import { useState, useEffect } from "react";
// import "./Exercises.scss";



// export default function Workouts(props) {

//   const [exerciseList, setaddExerciseList] = useState([]);
//   console.log("this is the added Items", exerciseList);
//   const [repCount, setRepCount] = useState(0);
//   const [setsCount, setSetsCount] = useState(0);


//   const exercises = [
//     {
//       id: 1,
//       name: "arms",
//       sets: 3,
//       reps: 15,
//     },
//     {
//       id: 2,
//       name: "legs",
//       sets: 2,
//       reps: 15,
//     },
//     {
//       id: 3,
//       name: "shoulders",
//       sets: 5,
//       reps: 15,
//     },
//   ];
//   //add exercises to workout
//   const addToWorkouts = (item) => {
//     setaddExerciseList([...exerciseList, item]);
//   };

//   //remove Items from the Workout list
//   const removeFromWorkouts = (item) => {
//     let exerciselistCopy = [...exerciseList];
//     exerciselistCopy = exerciselistCopy.filter(workoutItems => workoutItems.id != item.id);
//     setaddExerciseList(exerciselistCopy);
//   };

//   const exerciseItems = exercises.map((item) => (
//     <div key={item.id}>
//       {`${item.name} Sets:${item.sets}, Reps:${item.reps}`}
//       <input type='submit' value='add' onClick={() => addToWorkouts(item)} />
//     </div>

//   ));

//   const workoutItems = exerciseList.map((item) => (
//     <div key={item.id}> {`${item.name} Sets:${item.sets}, Reps:${item.reps}`}
//       <input type='submit' value='add' onClick={() => removeFromWorkouts(item)} />
//     </div>

//   ));

//   return (
//     <div>
//       Exercises
//       <div>{exerciseItems}</div>

//     Workout
//     <div>{workoutItems}</div>
    
//     </div>
//   );
// }

