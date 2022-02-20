// import 'bootstrap/dist/css/bootstrap.min.css';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Categories from "./components/Categories";
import ExerciseList from "./components/ExerciseList";
import Navbar from "./components/Navbar";
import WorkoutList from "./components/WorkoutList";
import About from "./components/About";
import Profile from "./components/Profile";
// import WorkoutsListsItems from "./components/WorkoutsListsItems";
import EditWorkout from "./components/EditWorkout";
import Footer from "./components/Footer";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Navbar />}>
          <Route index element={<Categories />} />
          <Route path="/about" element={<About />} />
          <Route path="/exercises/:category" element={<ExerciseList />} />
          <Route path="/editworkout" element={<EditWorkout />} />
          {/* <Route path="/workoutListsItems" element={<WorkoutsListsItems/>}/> */}
          <Route path="/workouts" element={<WorkoutList />} />
          <Route path="/profile" element={<Profile />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}
export default App;
