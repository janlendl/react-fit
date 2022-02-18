import { Outlet, Link } from "react-router-dom";
import "./Home.scss";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faHome } from '@fortawesome/free-solid-svg-icons'

export default function Footer(children) {
  return (

    <header>
      <div className="footer">
      
      </div>
      <Outlet />
    </header>
  );
}
