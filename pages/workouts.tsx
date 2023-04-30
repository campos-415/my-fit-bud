import MuscleGroupImage from "@/components/Workouts/MuscleGroupImage";
import { workOut } from "@/constants/constants";
import React, { useState } from "react";
import bodyImg from "/public/assets/bodyImg.png";
import Image from "next/image";

const workouts = () => {
  const [muscles, setMuscles] = useState(workOut);
  const [selectedMuscle, setSelectedMuscle] = useState<[] | string | any>([]);

  const getMuscleExcercise = () => {

  }

  const addMuscle = (
    slug: string,
    active: boolean,
    id: number,
    name: string
  ) => {
    if (!selectedMuscle.includes(slug)) {
      const newMuscles = muscles.map((muscle: any) =>
        muscle.id === id ? { ...muscle, active: !active } : muscle
      );
      setMuscles(newMuscles);
      setSelectedMuscle((prevSelectedWorkout: any) => [
        ...prevSelectedWorkout,
        slug,
      ]);
    } else {
      setSelectedMuscle((prevSelectedWorkout: any) =>
        prevSelectedWorkout.filter((workout: string) => workout !== slug)
      );
      const newMuscles = muscles.map((muscle: any) =>
        muscle.id === id ? { ...muscle, active: !active } : muscle
      );
      setMuscles(newMuscles);
    }
  };
  console.log(muscles);

  return (
    <div
      className={`flex flex-wrap items-center justify-center max-w-screen-md mx-auto`}>
      {muscles.map((muscle: any) => (
        <button
          key={muscle.id}
          type="button"
          className={`${
            muscle.active ? "bg-specialColor text-white" : " bg-slate-600"
          } py-2 px-4 text-specialColor hover:text-white rounded-full hover:bg-specialColor`}
          onClick={() =>
            addMuscle(muscle.slug, muscle.active, muscle.id, muscle.name)
          }>
          {muscle.name}
        </button>
      ))}
      <MuscleGroupImage muscleGroups={selectedMuscle} />
    </div>
  );
};

export default workouts;
