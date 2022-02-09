import "./Workouts.scss";

export default function workouts({ props }) {
  return (
    <>
    <div className="topWrapper">
      <div className="row">
        <div className="col-1 text-black sidebar fle flex-column boxstyle">
          <h3>Categories</h3>
          <ul className="nav flex-column">
            <li className="nav-item">
              <a className="nav-link active" aria-current="page" href="#">Active</a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="#">Cardio</a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="#">Chest</a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="#">Lower Arms</a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="#">Lower Legs</a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="#">Shoulders</a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="#">Upper Arms</a>
            </li>
          </ul>
        </div>
      

        <div className="workoutContainer col-4 clearfix">
          <div className="card boxstyle">
            <div className="row row-cols-2 flex-nowrap">
              <div className="col-md-5">
                <img src="https://fitonapp.com/wp-content/themes/fiton-20201105/images/Rectangle-7.png" className="img-fluid rounded-start" alt="..." />
              </div>
              <div className="col-md-10">
                <div className="card-body">
                  <h5 className="card-title">Exercise Information</h5>
                  <p className="card-text">{props}</p>
                  <a href="#" className="btn btn-primary">Add to Workout</a>
                </div>
              </div>
            </div>
          </div>

        </div>
        <div className="col-5">
          <div className='flex bg-light flex flex-column overflow-scroll boxstyle'>
            <div className="flex-1 py-6 overflow-auto px-4 sm:px-6">
              <div className="flex align-items-start justify-content-between">
                <h2 className="fw-bold text-black">Selected Exercises</h2>
                <div className="ms-3 h-7 flex align-items-center">
                  <button type="button" className="btn-close">X</button>
                </div>
              </div>
              <div className="mt-4">
                <div className="flow-root">
                  <ul className="list-group mt-4">
                    <li className="py-6 flex list-group-item purple">
                      <div className="flex-shrink-0 ps-1">
                        <img src="https://fitonapp.com/wp-content/themes/fiton-20201105/images/Rectangle-7.png" className="rounded-0 mrg-right sizeImg"></img>
                      </div>

                      <div className="ms-4 flex-1 flex flex-column">
                        <div>
                          <div className="flex justify-content-between text-close">
                            <h3>
                              <a>Name of product</a>
                            </h3>
                          </div>
                        </div>

                        <div className="flex-1 flex align-items-end justify-content-between fs-5">
                          <p> QTY</p>
                          <div className="flex">
                            <button type="button" className="btn btn-primary">Remove</button>
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