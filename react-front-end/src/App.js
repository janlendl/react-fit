import axios from "axios";
// import 'bootstrap/dist/css/bootstrap.min.css';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Categories from "./components/Categories";
import Exercises from "./components/Exercises";
import Navbar from "./components/Navbar";
import Workouts from "./components/Workouts";
import About from "./components/About";
import Profile from "./components/Profile";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Navbar />}>
          <Route index element={<Categories />} />
          <Route path="/about" element={<About />} />
          <Route path="/exercises/:category" element={<Exercises />} />
          <Route path="/workouts" element={<Workouts />} />
          <Route path="/profile" element={<Profile />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}
export default App;
