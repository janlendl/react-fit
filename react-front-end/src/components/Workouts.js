import "./Workouts.scss"
// import 'bootstrap/dist/css/bootstrap.min.css';
// import { permittedCrossDomainPolicies } from "helmet";


export default function Workouts(props) {
  return (
    <div className="WorkoutWrapper">
      <div className="row">
        <div className="col-md-5">
          <img src="https://fitonapp.com/wp-content/themes/fiton-20201105/images/Rectangle-7.png" className="img-fluid rounded-start" alt="..."/>
        </div>
        <div className="col-md-6">
          <div className="card-body">
            <h5 className="card-title">Exercise Information</h5>
            <p className="card-text">Props</p>
 
          </div>
        </div>
      </div>
    </div>
  )
}