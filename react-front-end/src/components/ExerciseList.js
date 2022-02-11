import axios from "axios";
import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";

import ExerciseListItem from "./ExerciseListItem";

const backExercises = [
  {
    bodyPart: "back",
    equipment: "cable",
    gifUrl: "http://d205bpvrqc9yn1.cloudfront.net/0007.gif",
    id: "0007",
    name: "alternate lateral pulldown",
    target: "lats"
  },
  {
    bodyPart: "back",
    equipment: "body weight",
    gifUrl: "http://d205bpvrqc9yn1.cloudfront.net/3293.gif",
    id: "3293",
    name: "archer pull up",
    target: "lats"
  },
  {
    bodyPart: "back",
    equipment: "leverage machine",
    gifUrl: "http://d205bpvrqc9yn1.cloudfront.net/0015.gif",
    id: "0015",
    name: "assisted parallel close grip pull-up",
    target: "lats"
  },
  {
    bodyPart: "back",
    equipment: "leverage machine",
    gifUrl: "http://d205bpvrqc9yn1.cloudfront.net/0017.gif",
    id: "0017",
    name: "assisted pull-up",
    target: "lats"
  }
]

export default function ExerciseList() {
  let { category } = useParams();

  const [exerciseData, setExerciseData] = useState([])

  let apiExerciseByBodyPart = {
    method: 'GET',
    url: `https://exercisedb.p.rapidapi.com/exercises/bodyPart/${category}`,
    headers: {
      'x-rapidapi-host': 'exercisedb.p.rapidapi.com',
      'x-rapidapi-key': 'c2c9da1eb8msh17b3797bf1980ddp197370jsn45878d3b3863'
    }
  };

  useEffect(() => {
    const getExercises = async () => {
      const response = await axios.request(apiExerciseByBodyPart)
      setExerciseData(response.data).catch((error) => {
        console.log(error.message);
      });
    };
    getExercises();
  }, [category])

  const exerciseItem = backExercises.map((exercise) => {
    return (
      <ExerciseListItem
      key={exercise.id}
      gif={exercise.gifUrl}
      name={exercise.name}
      bodyPart={exercise.bodyPart}
      target={exercise.target}
      equipment={exercise.equipment}
      />
    )
  })

  return (
    <div>
      {exerciseItem}
    </div>
  );
};