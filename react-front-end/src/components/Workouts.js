import "./Workouts.scss";
// import 'bootstrap/dist/css/bootstrap.min.css';
// import { permittedCrossDomainPolicies } from "helmet";




export default function workouts({ props }) {
  return (
    <>
    <div class="topWrapper">
      <div class="row">
        <div class="col-1 text-black sidebar fle flex-column boxstyle">
          <h3>Categories</h3>
          <ul class="nav flex-column">
            <li class="nav-item">
              <a class="nav-link active" aria-current="page" href="#">Active</a>
            </li>
            <li class="nav-item">
              <a class="nav-link" href="#">Cardio</a>
            </li>
            <li class="nav-item">
              <a class="nav-link" href="#">Chest</a>
            </li>
            <li class="nav-item">
              <a class="nav-link" href="#">Lower Arms</a>
            </li>
            <li class="nav-item">
              <a class="nav-link" href="#">Lower Legs</a>
            </li>
            <li class="nav-item">
              <a class="nav-link" href="#">Shoulders</a>
            </li>
            <li class="nav-item">
              <a class="nav-link" href="#">Upper Arms</a>
            </li>
          </ul>
        </div>
      

        <div class="workoutContainer col-4 clearfix">
          <div class="card boxstyle">
            <div class="row row-cols-2 flex-nowrap">
              <div class="col-md-5">
                <img src="https://fitonapp.com/wp-content/themes/fiton-20201105/images/Rectangle-7.png" class="img-fluid rounded-start" alt="..." />
              </div>
              <div class="col-md-10">
                <div class="card-body">
                  <h5 class="card-title">Exercise Information</h5>
                  <p class="card-text">{props}</p>
                  <a href="#" class="btn btn-primary">Add to Workout</a>
                </div>
              </div>
            </div>
          </div>


          {/* <div class="card">
       <div class="card-header">
        Selected Exercises
        </div>
        <div class="row">
          <img src="https://fitonapp.com/wp-content/themes/fiton-20201105/images/Rectangle-7.png" class="img-fluid rounded-start" alt="..."/>
          <ul class="list-group list-group-flush">
            <li class="list-group-item">An item</li>
            <li>Sets</li>
            <li>Reps</li>
          </ul>
        </div>
          <li class="list-group-item">A second item</li>
          <li class="list-group-item">A third item</li>
        
      </div> */}
        </div>
        <div class="col-6">
          <div class='flex bg-light flex flex-column overflow-scroll boxstyle'>
            <div class="flex-1 py-6 overflow-auto px-4 sm:px-6">
              <div class="flex align-items-start justify-content-between">
                <h2 class="fw-bold text-black">Selected Exercises</h2>
                <div class="ms-3 h-7 flex align-items-center">
                  <button type="button" class="btn-close">X</button>
                </div>
              </div>
              <div class="mt-4">
                <div class="flow-root">
                  <ul class="list-group mt-4">
                    <li class="py-6 flex list-group-item purple">
                      <div class="flex-shrink-0 ps-1">
                        <img src="https://fitonapp.com/wp-content/themes/fiton-20201105/images/Rectangle-7.png" class="rounded-0 mrg-right"></img>
                      </div>

                      <div class="ms-4 flex-1 flex flex-column">
                        <div>
                          <div class="flex justify-content-between text-close">
                            <h3>
                              <a>Name of product</a>
                            </h3>
                          </div>
                        </div>

                        <div class="flex-1 flex align-items-end justify-content-between fs-5">
                          <p> QTY</p>
                          <div class="flex">
                            <button type="button" class="btn btn-primary">Remove</button>
                          </div>
                        </div>
                      </div>
                    </li>
                    <li>Hello</li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      </div>
    </>



  );
}