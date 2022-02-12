// import 'bootstrap/dist/css/bootstrap.min.css';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Categories from "./components/Categories";
import ExerciseList from "./components/ExerciseList";
import Navbar from "./components/Navbar";
import WorkoutList from "./components/WorkoutList";
import About from "./components/About";
import WorkoutsListsItems from "./components/WorkoutsListsItems";

function App() {

  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Navbar/>}>
        <Route index element={<Categories/>}/>
        <Route path="/about" element={<About/>}/>
        <Route path="/exercises/:category" element={<ExerciseList/>}/>
<<<<<<< HEAD
        <Route path="/workouts" element={<WorkoutList/>}/>
=======
        <Route path="/workouts" element={<Workouts/>}/>
        <Route path="/workoutListsItems" element={<WorkoutsListsItems/>}/>
>>>>>>> 3a79182d028edb4c899939ea91565aa21e16ac78
        </Route>
      </Routes>
    </BrowserRouter>
  );
}
export default App;
