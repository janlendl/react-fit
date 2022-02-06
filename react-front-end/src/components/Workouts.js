import "./Workouts.scss"
// import 'bootstrap/dist/css/bootstrap.min.css';
// import { permittedCrossDomainPolicies } from "helmet";


export default function workouts({ props}) {
  return (
    <div class="WorkoutWrapper">
      <div class="row">
        <div class="col-md-5">
          <img src="https://fitonapp.com/wp-content/themes/fiton-20201105/images/Rectangle-7.png" class="img-fluid rounded-start" alt="..."/>
        </div>
        <div class="col-md-6">
          <div class="card-body">
            <h5 class="card-title">Exercise Information</h5>
            <p class="card-text">{props}</p>
 
          </div>
        </div>
      </div>
    </div>
  )
}