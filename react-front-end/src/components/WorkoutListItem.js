import './WorkoutListItem.scss';

export default function WorkoutListItem(props) {
  return (
    <>
      <h2>{props.workoutName}</h2>
      <li>Date Created: {props.dateCreated}</li>
      <div className="workoutContainer col-4 clearfix">
        <div className="card boxstyle">
          <div className="row row-cols-2 flex-nowrap">
            <table>
              <tbody>
                <tr>
                  <td className="exerciseContainer">
                    <div className="col-md-5">
                      <h5 className="card-title">{props.exerciseName}</h5>
                      <img src={props.gif} className="img-fluid rounded-start" alt={props.exerciseName} />
                    </div>
                    <div className="exerciseInfo col-md-10">
                      <div className="card-body">
                        <div className="exerciseContainer">
                          <ul className="card-text">
                            <li>Target: {props.equipment}</li>
                            <li>Number of Sets: {props.numSets}</li>
                            <li>Number of Reps: {props.numReps}</li>
                          </ul>
                        </div>
                      </div>
                    </div>
                  </td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </>
  );
}


