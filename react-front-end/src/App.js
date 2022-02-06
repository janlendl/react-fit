import axios from 'axios';
// import 'bootstrap/dist/css/bootstrap.min.css';
import { BrowserRouter, Routes, Route} from "react-router-dom"
import Categories from './components/Categories'
import Navbar from './components/Navbar';
import Workouts from './components/Workouts';


function App() {

  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Navbar/>}>
        <Route index element={<Categories/>}/>
        <Route path="Workouts" element={<Workouts/>}/>
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
