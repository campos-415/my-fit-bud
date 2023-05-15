import React, { useState } from "react";
import axios from "axios";
import { ExerciseListProps } from "@/typings";

import { CgSpinner } from "react-icons/cg";
const Exercices = ({
  time,
  muscle,
  location,
  equipment,
}: ExerciseListProps) => {
  const [loading, setLoading] = useState(false);
  const [workoutSets, setWorkoutSets] = useState<any>([]);

  const getExerciseList = async (
    time: string,
    muscle: [],
    location: string,
    equipment: string
  ) => {
    setLoading(true);
    const options = {
      method: "GET",
      url: "https://workout-planner1.p.rapidapi.com/",
      params: {
        time: `${time}`,
        muscle: `${muscle.join(", ")}`,
        location: `${location}`,
        equipment: `${equipment}`,
      },
      headers: {
        "X-RapidAPI-Key": "707b32fad2mshc384f1c4790c3e8p110ffbjsnfe4e85cc70ac",
        "X-RapidAPI-Host": "workout-planner1.p.rapidapi.com",
      },
    };

    try {
      const response = await axios.request(options);
      setWorkoutSets(response.data);
      setLoading(false);
    } catch (error: any) {
      setLoading(true);
      return null;
    }
  };

  return (
    <>
      <div className="mx-auto flex items-center  flex-col">
        <button
          className=" flex items-center justify-evenly text-sm py-2 px-4 hover:text-white rounded-full w-48 mx-auto bg-specialColor text-white"
          onClick={() => getExerciseList(time, muscle, location, equipment)}>
          {!loading ? (
            "Generate Exercise List"
          ) : (
            <>
              Creating List
                <span className="block">
                  {" "}
                  <CgSpinner size={20} className="inline animate-spin" />
                </span>
            </>
          )}
        </button>

        
        <div>
          <h1 className="text-3xl text-center">{muscle.join(" & ")}</h1>
          <div className="flex items-start flex-wrap justify-betweend">
            <div className=" flex items-start flex-col justify-between flex-wrap">
              <h2 className="text-xl text-center text-specialColor">Warm Ups</h2>
              {!loading ? (
                <div>
                  {workoutSets?.["Warm Up"]?.map(
                    (Exercise: any, index: number) => (
                      <div
                        className="flex flex-col items-start justify-center "
                        key={index}>
                        <p>
                          {" "}
                          <span className="text-slate-600">Exercise:</span>{" "}
                          {Exercise.Exercise}
                        </p>
                        <p>
                          {" "}
                          <span className="text-slate-600">Time: </span>{" "}
                          {Exercise.Time}
                        </p>
                      </div>
                    )
                  )}
                </div>
              ) : (
                <>
                  <div className="flex items-center  justify-center">
                    {" "}
                    <CgSpinner size={50} className="block animate-spin" />
                  </div>
                </>
              )}
            </div>
            <div className="flex items-start justify-between flex-col">
              <h2 className="text-xl text-specialColor">Exercises</h2>
              {!loading ? (
                <>
                  {workoutSets?.Exercises?.map(
                    (Exercise: any, index: number) => (
                      <div
                        key={index}
                        className="flex flex-col items-start flex-wrap justify-center ">
                        <p>
                          <span className="text-slate-600">Exercise: </span>{" "}
                          {Exercise.Exercise}
                        </p>
                        <p>
                          <span className="text-slate-600">Reps: </span>
                          {Exercise.Reps}
                        </p>
                        <p>
                          <span className="text-slate-600">Sets: </span>
                          {Exercise.Sets}
                        </p>
                      </div>
                    )
                  )}
                </>
              ) : (
                <>
                  <div className="flex items-center justify-center">
                    {" "}
                    <CgSpinner size={50} className="block animate-spin" />
                  </div>
                </>
              )}
            </div>
            <div className="flex items-start justify-between flex-col">
              <h2 className="text-xl text-specialColor">Cool Downs</h2>
              {!loading ? (
                <>
                  {workoutSets?.["Cool Down"]?.map(
                    (Exercise: any, index: number) => (
                      <div
                        key={index}
                        className="flex flex-col items-start justify-center">
                        <p>
                          <span className="text-slate-600">Exercise:</span>{" "}
                          {Exercise.Exercise}
                        </p>
                        <p>
                          {" "}
                          <span className="text-slate-600">Time:</span>{" "}
                          {Exercise.Time}
                        </p>
                      </div>
                    )
                  )}
                </>
              ) : (
                <>
                  <div className="">
                    {" "}
                    <CgSpinner size={50} className="block animate-spin" />
                  </div>
                </>
              )}
            </div>
          </div>
        </div>

        {/* {!loading ? (
          <>
            <h1 className="text-3xl text-center">{muscle.join(" & ")}</h1>
            <div className="flex flex-warp items-start justify-center gap-24">
              <div className=" flex items-start flex-col justify-between flex-wrap">
                <h2 className="text-xl text-specialColor">Warm Ups</h2>
                {workoutSets?.["Warm Up"]?.map(
                  (Exercise: any, index: number) => (
                    <div
                      className="flex flex-col items-start justify-center "
                      key={index}>
                      <p>
                        {" "}
                        <span className="text-slate-600">Exercise:</span>{" "}
                        {Exercise.Exercise}
                      </p>
                      <p>
                        {" "}
                        <span className="text-slate-600">Time: </span>{" "}
                        {Exercise.Time}
                      </p>
                    </div>
                  )
                )}
              </div>
              <div className="flex items-start justify-between flex-col">
                <h2 className="text-xl text-specialColor">Exercises</h2>
                {workoutSets?.Exercises?.map((Exercise: any, index: number) => (
                  <div
                    key={index}
                    className="flex flex-col items-start flex-wrap justify-center ">
                    <p>
                      <span className="text-slate-600">Exercise: </span>{" "}
                      {Exercise.Exercise}
                    </p>
                    <p>
                      <span className="text-slate-600">Reps: </span>
                      {Exercise.Reps}
                    </p>
                    <p>
                      <span className="text-slate-600">Sets: </span>
                      {Exercise.Sets}
                    </p>
                  </div>
                ))}
              </div>
              <div className="flex items-start justify-between flex-col">
                <h2 className="text-xl text-specialColor">Cool Downs</h2>
                {workoutSets?.["Cool Down"]?.map(
                  (Exercise: any, index: number) => (
                    <div
                      key={index}
                      className="flex flex-col items-start justify-center">
                      <p>
                        <span className="text-slate-600">Exercise:</span>{" "}
                        {Exercise.Exercise}
                      </p>
                      <p>
                        {" "}
                        <span className="text-slate-600">Time:</span>{" "}
                        {Exercise.Time}
                      </p>
                    </div>
                  )
                )}
              </div>
            </div>
          </>
        ) : (
          <>
            <div className="flex items-center pt-48 justify-center">
              {" "}
              <CgSpinner size={50} className="block animate-spin" />
            </div>
          </>
        )} */}
      </div>
    </>
  );
};

export default Exercices;
