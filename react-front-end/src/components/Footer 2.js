import { Outlet, Link } from "react-router-dom";
import "./Home.scss";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faHeart } from '@fortawesome/free-solid-svg-icons'

export default function Footer(children) {



  return (
    <div>
      <div className="footer">
      <p className="m-2" style={{color:'black'}}>Made with <FontAwesomeIcon icon={faHeart} style={{color:'black'}}/></p>
      </div>
      <Outlet />
    </div>
  );
}
