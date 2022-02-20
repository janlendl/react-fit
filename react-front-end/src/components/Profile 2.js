import { useState, useEffect } from "react";
// import "./Exercises.scss";
import "./Profile.scss";
import ExerciseListItem from "./ExerciseListItem";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faDumbbell, faFire, faUserClock } from "@fortawesome/free-solid-svg-icons";

const recentExercises = [
  {
    bodyPart: "back",
    equipment: "cable",
    gifUrl: "http://d205bpvrqc9yn1.cloudfront.net/0007.gif",
    id: "0007",
    name: "alternate lateral pulldown",
    target: "lats",
  },
  {
    bodyPart: "cardio",
    equipment: "body weight",
    gifUrl: "http://d205bpvrqc9yn1.cloudfront.net/3220.gif",
    id: "3220",
    name: "astride jumps (male)",
    target: "cardiovascular system",
  },
  {
    bodyPart: "cardio",
    equipment: "body weight",
    gifUrl: "http://d205bpvrqc9yn1.cloudfront.net/3672.gif",
    id: "3672",
    name: "back and forth step",
    target: "cardiovascular system",
  },
  {
    bodyPart: "lower_arms",
    equipment: "band",
    gifUrl: "http://d205bpvrqc9yn1.cloudfront.net/1016.gif",
    id: "1016",
    name: "band wrist curl",
    target: "forearms",
  },
  {
    bodyPart: "back",
    equipment: "body weight",
    gifUrl: "http://d205bpvrqc9yn1.cloudfront.net/3293.gif",
    id: "3293",
    name: "archer pull up",
    target: "lats",
  },
  {
    bodyPart: "chest",
    equipment: "body weight",
    gifUrl: "http://d205bpvrqc9yn1.cloudfront.net/3294.gif",
    id: "3294",
    name: "archer push up",
    target: "pectorals",
  },
  {
    bodyPart: "lower_legs",
    equipment: "assisted",
    gifUrl: "http://d205bpvrqc9yn1.cloudfront.net/1708.gif",
    id: "1708",
    name: "assisted lying calves stretch",
    target: "calves",
  },
  {
    bodyPart: "lower_arms",
    equipment: "band",
    gifUrl: "http://d205bpvrqc9yn1.cloudfront.net/0994.gif",
    id: "0994",
    name: "band reverse wrist curl",
    target: "forearms",
  },
];

export default function Profile() {
  //const [users, setUsers] = useState({});
  //const [workout, setWorkout] = useState([]);
  //const [sessions, setSessions] = useState();

  /* useEffect(() => {
    fetch("http://localhost:8001/api/users")
      .then((response) => response.json())
      .then((responseJson) => {
        setUsers(responseJson.data);
      });
  }); */

  /* useEffect(() => {
    fetch(`http://localhost:8001/api/workouts`)
      .then((response) => response.json())
      .then((responseJson) => {
        setWorkout(responseJson.data);
      });
  }); */

  /* useEffect(() => {
    fetch("http://local:8001/api/worksessions")
      .then((response) => response.json())
      .then((responseJson) => {
        setSessions(responseJson.data);
      });
  }); */

  const exerciseItem = recentExercises.map((exercise) => {
    return (
      <ExerciseListItem
        {...exercise}
        key={exercise.id}
        gif={exercise.gifUrl}
        name={exercise.name}
        bodyPart={exercise.bodyPart}
        target={exercise.target}
        equipment={exercise.equipment}
      />
    );
  });

  return (
    <main>
      <div className="topWrapper"></div>
      <div className="profile">
        <img
          className="user-image"
          src="/Alice.png"
        />
        {/* <h2> {user.first_name user.last_name} </h2> */}
        <h2>Alice Wonderland</h2>
        <hr/>
        
      </div>
      {/* <h3 className="text-center">Workout Progress</h3> */}
      <div className="stats">
        <div className="streak">

        <FontAwesomeIcon icon={faFire}  className="iconSize faFire"/>
          {/* <img
            className="streak-img"
            src="https://as2.ftcdn.net/v2/jpg/01/66/32/51/1000_F_166325100_KCL0mNRsMhRZxTdaI0VnH8IPhNGFjEHt.jpg"
          /> */}
          <p>Streak: 1</p>
        </div>
        <div className="workout-count">
        <FontAwesomeIcon icon={faDumbbell} className="iconSize faDumbbell"/>
          {/* <img
            className="count-img"
            src="https://st4.depositphotos.com/20838724/37759/v/950/depositphotos_377597326-stock-illustration-aerobic-exercise-vector-icon-filled.jpg"
          /> */}
          <p>Workouts: 1</p>
        </div>
        <div className="minute-img">
        <FontAwesomeIcon icon={faUserClock} className="iconSize faUserClock" />
          {/* <img
            className="minute-img"
            src="https://www.kindpng.com/picc/m/114-1141852_alarm-clock-icon-svg-png-download-alarm-clock.png"
          /> */}
          <p>Time: 60</p>
        </div>
      </div>
      <hr className="hrLine mb-0"/>
      <div className="activity bg-light">
        <div className="m-4">
          <h3>FAVORITE EXERCISES</h3>
        </div>
        <div className="row-col col-md-auto mrg-bottom ml-4 row">
          {exerciseItem}</div>
      </div>
    </main>
  );
}

/* const Profile = props => {
  console.log("props",props)
  if (!props.show) {
    return null
  }

  return (
    <div className="container">
      <div>

        
      </div>

    </div>
  )
}

export default  Profile */
