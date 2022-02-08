import {Outlet, Link} from "react-router-dom"
import "./Home.scss"

export default function Navbar(children) {
  return (
  <>
    <div className="header">
      <h1 className="logo">NextFit</h1>
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
    </div>
  <Outlet/>
  </>
  )
}


