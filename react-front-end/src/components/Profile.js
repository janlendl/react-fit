import { useState, useEffect } from "react";

import "./Profile.scss";
import ExerciseListItem from "./ExerciseListItem";
//import { faPlayCircle } from "@fortawesome/free-solid-svg-icons";

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
      <div className="background"></div>
      <div className="profile">
        <img
          className="user-image"
          src="data:image/jpeg;base64,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"
        />
        {/* <h2> {user.first_name user.last_name} </h2> */}
        <h2>Alice Wonderland</h2>
        <hr />
        <h3>Workout Progress</h3>
      </div>

      <div className="stats">
        <div className="streak">
          <img
            className="streak-img"
            src="https://as2.ftcdn.net/v2/jpg/01/66/32/51/1000_F_166325100_KCL0mNRsMhRZxTdaI0VnH8IPhNGFjEHt.jpg"
          />
          <p>Streak: 1</p>
        </div>
        <div className="workout-count">
          <img
            className="count-img"
            src="https://st4.depositphotos.com/20838724/37759/v/950/depositphotos_377597326-stock-illustration-aerobic-exercise-vector-icon-filled.jpg"
          />
          <p>Workouts done: 1</p>
        </div>
        <div className="minutes">
          <img
            className="minute-img"
            src="https://www.kindpng.com/picc/m/114-1141852_alarm-clock-icon-svg-png-download-alarm-clock.png"
          />
          <p>Minutes done: 60</p>
        </div>
      </div>
      <hr />
      <div className="activity">
        <div>
          <h3>Favorite Exercises</h3>
        </div>
        <div className="col-md-auto row">{exerciseItem}</div>
      </div>
    </main>
  );
}
