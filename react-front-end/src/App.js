// import 'bootstrap/dist/css/bootstrap.min.css';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Categories from "./components/Categories";
import ExerciseList from "./components/ExerciseList";
import Navbar from "./components/Navbar";
import WorkoutList from "./components/WorkoutList";
import About from "./components/About";
<<<<<<< HEAD
import Profile from "./components/Profile";
=======
// import WorkoutsListsItems from "./components/WorkoutsListsItems";
import CreateWorkout from "./components/CreateWorkout";
// import Workouts from "./components/Workouts"

>>>>>>> 39058b60f21d1257dec9d1e0ebb54650bd7c72de

function App() {
  return (
    <BrowserRouter>
      <Routes>
<<<<<<< HEAD
        <Route path="/" element={<Navbar />}>
          <Route index element={<Categories />} />
          <Route path="/about" element={<About />} />
          <Route path="/exercises/:category" element={<ExerciseList />} />
          <Route path="/workouts" element={<WorkoutList />} />
          <Route path="/profile" element={<Profile />} />
=======
        <Route path="/" element={<Navbar/>}>
        <Route index element={<Categories/>}/>
        <Route path="/about" element={<About/>}/>
        <Route path="/exercises/:category" element={<ExerciseList/>}/>
        <Route path="/createWorkout" element={<CreateWorkout/>}/>
        {/* <Route path="/workouts" element={<Workouts/>}/> */}
        {/* <Route path="/workoutListsItems" element={<WorkoutsListsItems/>}/> */}
        <Route path="/workouts" element={<WorkoutList/>}/>
          
>>>>>>> 39058b60f21d1257dec9d1e0ebb54650bd7c72de
        </Route>
      </Routes>
    </BrowserRouter>
  );
}
export default App;
