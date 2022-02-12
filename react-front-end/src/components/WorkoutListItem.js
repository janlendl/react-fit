import './WorkoutListItem.scss';

export default function WorkoutListItem(props) {
  
  return (
    <>
      <h2>{props.workoutName}</h2>
      <li>Date Created: {props.dateCreated}</li>

      {props.exercise.map((e,i) => {
        return(
          <div key={i} className="row noMrg">
            <div className="card mb-3">
              <div className="row noMrg">
                <div className="col-sm-3">
                  <img src={e.gifUrl} className="img-fluid rounded-start" alt={e.name} />
                </div>
                <div className="card-body">
                  <h5 className="card-title capitalize">{e.name}</h5>
                  <ul className="card-text">
                    <li>
                      Category: {e.body_part}
                    </li>
                    <li>
                      Target: {e.target_muscle}
                    </li>
                    <li>
                      Equipment: {e.equipment}
                    </li>
                    <li>
                      Sets: {e.number_of_sets}
                    </li>
                    <li>
                      Reps: {e.number_of_reps}
                    </li>
                  </ul>
                </div>
                <div className="card-footer d-flex align-items-end">
                </div>
              </div>
            </div>
          </div>
        )
      })}
    </>
  );
}


