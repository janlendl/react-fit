// import 'bootstrap/dist/css/bootstrap.min.css';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Categories from "./components/Categories";
import ExerciseList from "./components/ExerciseList";
import Navbar from "./components/Navbar";
import WorkoutList from "./components/WorkoutList";
import About from "./components/About";

function App() {

  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Navbar/>}>
        <Route index element={<Categories/>}/>
        <Route path="/about" element={<About/>}/>
        <Route path="/exercises/:category" element={<ExerciseList/>}/>
        <Route path="/workouts" element={<WorkoutList/>}/>
        </Route>
      </Routes>
    </BrowserRouter>
  );
}
export default App;
