import { Outlet, Link } from "react-router-dom";
import "./Home.scss";

export default function Navbar({ children }) {
  return (
    <header>
      <nav className="header">
        <Link to="/">
          <h1 className="logo">NextFit</h1>
        </Link>
        <ul>
          <li>
            <Link to="/about">About </Link>
          </li>
          <li>
            <Link to="/workouts">Workouts</Link>
          </li>
          <li className="btn">
            <Link to="/Signup">Signup</Link>
          </li>
        </ul>
      </nav>
      <Outlet />
    </header>
  );
}
