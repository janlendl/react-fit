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
        <Route path="/workouts" element={<Workouts/>}/>
        <Route path="/exercises/:bodypart" element={<Exercises/>}/>
        </Route>
      </Routes>
    </BrowserRouter>
  );
}
export default App;
