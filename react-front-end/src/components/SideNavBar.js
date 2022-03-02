import "./Exercises.scss";
import { Link } from "react-router-dom";

export default function SideNavBar() {

  return (
    // <div className="row noMrg justify-content-md-center rounded-2">
      <div className="col col-1 mr-4">
        {/* Inserted: position-fixed */}
        <ul className="nav flex-column position-fixed">
          <h3>Categories</h3>
          <li className="nav-item">
            <Link to="/exercises/back">
              <span className="nav-link">Back</span>
            </Link>
          </li>
          <li className="nav-item">
            <Link to="/exercises/cardio">
              <span className="nav-link">Cardio</span>
            </Link>
          </li>
          <li className="nav-item">
            <Link to="/exercises/chest">
              <span className="nav-link">Chest</span>
            </Link>
          </li>
          <li className="nav-item">
            <Link to="/exercises/lower%20arms">
              <span className="nav-link">Lower Arms</span>
            </Link>
          </li>
          <li className="nav-item">
            <Link to="/exercises/lower%20legs">
              <span className="nav-link">Lower Legs</span>
            </Link>
          </li>
          <li className="nav-item">
            <Link to="/exercises/shoulders">
              <span className="nav-link">Shoulders</span>
            </Link>
          </li>
          <li className="nav-item">
            <Link to="/exercises/upper%20arms">
              <span className="nav-link">Upper Arms</span>
            </Link>
          </li>
          <li className="nav-item">
            <Link to="/exercises/upper%20legs">
              <span className="nav-link">Upper Legs</span>
            </Link>
          </li>
          <li className="nav-item">
            <Link to="/exercises/waist">
              <span className="nav-link">Core</span>
            </Link>
          </li>
        </ul>
      </div>
    // </div>

  );
};