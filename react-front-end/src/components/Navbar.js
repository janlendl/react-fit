import { Outlet, Link } from "react-router-dom";

import "./Home.scss";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faHome } from "@fortawesome/free-solid-svg-icons";

export default function Navbar(children) {
  return (
    <header>
      <nav className="header">
        <Link to="/">
          <h1 className="logo">NextFit</h1>
        </Link>
        <ul>
          <Link to="/">
            <FontAwesomeIcon icon={faHome} />
          </Link>
          <li>
            <Link to="/about">About </Link>
          </li>
          <li>
            <Link to="/workouts">Workouts</Link>
          </li>
          <li className="btn">
            <Link to="/Signup">Log out</Link>
          </li>
          <li>
            <Link to="/profile">Alice Wonderland</Link>
          </li>
        </ul>
      </nav>
      <Outlet />
    </header>
  );
}
