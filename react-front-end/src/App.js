// import 'bootstrap/dist/css/bootstrap.min.css';
import { BrowserRouter, Routes, Route} from "react-router-dom"
import Categories from './components/Categories'
import Navbar from './components/Navbar';
import Workouts from './components/Workouts';
import Exercises from './components/Exercises';


function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Navbar/>}>
        <Route index element={<Categories/>}/>
        <Route path="Workouts" element={<Workouts/>}/>
        <Route path="Exercises" element={<Exercises/>}/>
        </Route>
      </Routes>
    </BrowserRouter>
  );
}
export default App;
