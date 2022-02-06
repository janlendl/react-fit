import axios from 'axios';
// import 'bootstrap/dist/css/bootstrap.min.css';
import { BrowserRouter, Routes, Route} from "react-router-dom"
import Categories from './components/Categories'
import Navbar from './components/Navbar';
import Workouts from './components/Workouts';


function App() {

  let apiGetRequest = {
    method: 'GET',
    url: 'https://exercisedb.p.rapidapi.com/exercises/bodyPartList',
    headers: {
      'x-rapidapi-host': 'exercisedb.p.rapidapi.com',
      'x-rapidapi-key': 'c246264552msh38d3d1e59cd14a4p155348jsnd0dcd0a98213'
    }
  };

  axios.request(apiGetRequest)
    .then((response) => {
      console.log('I am axios GET res', response.data)
    }).catch((error) => {
      console.log(error.message)
    })
    
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
