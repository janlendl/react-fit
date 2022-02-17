import { useState, useEffect } from "react";
import "./Profile.scss";
import ExerciseListItem from "./ExerciseListItem";

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
    bodyPart: "back",
    equipment: "body weight",
    gifUrl: "http://d205bpvrqc9yn1.cloudfront.net/3293.gif",
    id: "3293",
    name: "archer pull up",
    target: "lats",
  },
];

export default function Profile() {
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
          src="data:image/png;base64,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"
        />
        <h2>User Name</h2>
        <hr />
        <h3>Workout Progress</h3>
      </div>

      <div className="stats">
        <div className="streak">
          <img
            className="streak-img"
            src="https://as2.ftcdn.net/v2/jpg/01/66/32/51/1000_F_166325100_KCL0mNRsMhRZxTdaI0VnH8IPhNGFjEHt.jpg"
          />
          <p>Streak: 0</p>
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
          <p>Minutes done: 1</p>
        </div>
      </div>
      <hr />
      <div className="activity">
        <div>
          <h3>Recent Activity</h3>
        </div>
        <div className="exercise">{exerciseItem}</div>
      </div>
    </main>
  );
}
