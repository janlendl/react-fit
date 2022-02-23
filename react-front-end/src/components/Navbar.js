import { Link } from "react-router-dom";
import "./Home.scss";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faHome, faUser, faDumbbell, faUserFriends} from "@fortawesome/free-solid-svg-icons";
import Footer from "./Footer";
import { useState } from "react";


export default function Navbar(children) {

  const[name, setName]=useState("LogOut");  

  const onClickButton = ({}) => {
    setName ("SignUp")
  }

  const presence = () => {
    if (name === 'LogOut') {
      return (
        <li className="m-3">
              <FontAwesomeIcon icon={faUser} className="mr-1 purple"/>
              <Link to="/Profile">Alice Wonderland</Link>
            </li> 
      )
    }
  
  };

  
  return (
    <>
      <header>
        <nav className="header">
          <div className="d-flex">
          <Link to="/">
            <img src="./logo192.png" className="logo"></img>
            {/* <h1 className="logo">REACT</h1> */}
            <span className="logo2">Fitness</span>
          </Link>
          </div>
          <ul>
            <li className="m-3">
              <Link to="/" >
                <FontAwesomeIcon icon={faHome} className="purple"/>
                <span className="ml-1 purple">Home</span>
              </Link>
            </li>
            <li className="m-3">
              <Link to="/about">
                <FontAwesomeIcon icon={faUserFriends} className="purple"/><span className="ml-1 purple">
                  About
                </span>
              </Link>
            </li>
            
            <li className="m-3">
              <Link to="/workouts">
                <FontAwesomeIcon icon={faDumbbell} className="purple"/>
                <span className="ml-1 purple">Workouts</span></Link>
            </li>

            {presence()}
            
            <li className="btn btn-primary">
             { <Link to="/SignUp">
              <div className="text_color" onClick={onClickButton}>{name}</div>
              </Link>
              }
            </li>
          </ul>
        </nav>

        <Footer />
      </header>
    </>
  );
}
