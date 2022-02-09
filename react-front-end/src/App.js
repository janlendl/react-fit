import axios from "axios";
// import 'bootstrap/dist/css/bootstrap.min.css';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Categories from "./components/Categories";
import Navbar from "./components/Navbar";
import Workouts from "./components/Workouts";
import About from "./components/about";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Navbar />}>
          <Route index element={<Categories />} />
          <Route path="Workouts" element={<Workouts />} />
          <Route path="About" element={<About />} />
        </Route>
      </Routes>
    </BrowserRouter>
    // <div>
    // <Navbar/>
    // <Categories/>
    // </div>
  );
}
export default App;
