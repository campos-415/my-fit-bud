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
  const [errors, setErrors] = useState("");

  const getExerciseList = async (
    time: {},
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
      console.log(response.data);
      setLoading(false);
    } catch (error: any) {
      console.log(error.message);
      setErrors(error.message);
      return null;
    }
  };

  return (
    <>
      <div className="mx-auto flex items-center gap-3 flex-col">
        <button
          className={` ${
            loading
              ? "bg-specialColor/60 cursor-not-allowed"
              : "bg-specialColor"
          } flex items-center justify-evenly hover:bg-specialColor/80 hover:scale-105 active:scale-95 transition-all duration-300 bg-specialColor text-sm py-2 px-4 hover:text-white rounded-md font-bold mx-auto  text-white`}
          onClick={() => getExerciseList(time, muscle, location, equipment)}>
          {!loading ? (
            "Generate Exercise List"
          ) : (
            <>
                {errors.length === 0 ? (
                  <>
                    Creating List...
                <span className="ml-6 block">
                  <CgSpinner size={20} className="inline animate-spin" />
                    </span>
                    </>
              ) : (
                <h2>Try Again </h2>
              )}
            </>
          )}
        </button>
        <div className="">
          <table className="w-full max-w-lg bg-slate-600 shadow-md rounded-lg overflow-hidden">
            <thead className="bg-specialColor">
              <tr>
                <th className="py-2 px-4 border-b border-specialColor">
                  Section
                </th>
                <th className="py-2 px-4 border-b border-specialColor">
                  Exercise
                </th>
                <th className="py-2 px-4 border-b border-specialColor">
                  Time/Reps
                </th>
                <th className="py-2 px-4 border-b border-specialColor">Sets</th>
              </tr>
            </thead>
            <tbody>
              {loading ? (
                <>
                  {workoutSets?.["Warm Up"]?.map(
                    (warmUp: any, index: number) => (
                      <tr key={index}>
                        {index === 0 && (
                          <td
                            className="py-2 px-4 border-b border-gray-200"
                            rowSpan={workoutSets?.["Warm Up"]?.length}>
                            Warm Ups
                          </td>
                        )}
                        <td className="py-2 px-4 border-b border-gray-200">
                          {warmUp.Exercise}
                        </td>
                        <td className="py-2 px-4 border-b border-gray-200">
                          {warmUp.Time}
                        </td>
                        <td className="py-2 px-4 border-b border-gray-200"></td>
                      </tr>
                    )
                  )}

                  {workoutSets?.["Exercises"]?.map(
                    (exercise: any, index: number) => (
                      <tr key={index}>
                        {index === 0 && (
                          <td
                            className="py-2 px-4 border-b border-gray-200"
                            rowSpan={workoutSets?.["Exercises"]?.length}>
                            Exercises
                          </td>
                        )}
                        <td className="py-2 px-4 border-b border-gray-200">
                          {exercise.Exercise}
                        </td>
                        <td className="py-2 px-4 border-b border-gray-200">
                          {exercise.Reps}
                        </td>
                        <td className="py-2 px-4 border-b border-gray-200">
                          {exercise.Sets}
                        </td>
                      </tr>
                    )
                  )}

                  {workoutSets?.["Cool Down"]?.map(
                    (coolDown: any, index: number) => (
                      <tr key={index}>
                        {index === 0 && (
                          <td
                            className="py-2 px-4 border-b border-gray-200"
                            rowSpan={workoutSets?.["Cool Down"]?.length}>
                            Cool Down
                          </td>
                        )}
                        <td className="py-2 px-4 border-b border-gray-200">
                          {coolDown.Exercise}
                        </td>
                        <td className="py-2 px-4 border-b border-gray-200">
                          {coolDown.Time}
                        </td>
                        <td className="py-2 px-4 border-b border-gray-200"></td>
                      </tr>
                    )
                  )}
                </>
              ) : (
                <>
                  {errors.length !== 0 ? (
                    <tr>
                      <td
                        className="py-2 px-4 border-b border-gray-200"
                        colSpan={4}>
                        <div className="flex items-center justify-center">
                          <CgSpinner size={50} className="block animate-spin" />
                        </div>
                      </td>
                    </tr>
                    ) : (
                        <tr>
                          <td>
                          </td>
                          <td className="flex flex-col items-center justify-center text-center w-32">
                            <span className="text-red-500">Our servers are at capacity at the moment </span> Please Try Again Later</td>
                        </tr>
                  )}
                </>
              )}
            </tbody>
          </table>
        </div>
      </div>
    </>
  );
};

export default Exercices;
