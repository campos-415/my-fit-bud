import MuscleGroupImage from "@/components/Workouts/MuscleGroupImage";
import { LocationsName, workOuts } from "@/constants/constants";
import React, { useState } from "react";
import Exercices from "@/components/Workouts/Exercices";
import MuscleNameButton from "@/components/Workouts/MuscleNameButton";
import LocationNameButton from "@/components/Workouts/LocationNameButton";

const workouts = () => {
  const [muscles, setMuscles] = useState(workOuts);
  const [locations, setLocations] = useState(LocationsName);
  const [selectedMusclesBySlug, setSelectedMusclesBySlug] = useState<
    [] | string | any
  >([]);
  const [selectedMusclesByName, setSelectedMusclesByName] = useState<
    [] | string | any
  >([]);
  const [selectedLocationBySlug, setSelectedLocationBySlug] = useState<
    [] | string | any
  >([]);
  const [selectedLocationByName, setSelectedLocationByName] = useState<
    [] | string | any
  >([]);

  const toggleMuscleActive = (active: boolean, id: number) => {
    const newMuscles = muscles.map((muscle: any) =>
      muscle.id === id ? { ...muscle, active: !active } : muscle
    );
    setMuscles(newMuscles);
  };

  const toggleLocationActive = (active: boolean, id: number) => {
    const newLocation = locations.map((location: any) =>
      location.locationId === id ? { ...location, active: !active } : location
    );
    setLocations(newLocation);
  };

  const addMuscle = (
    slug: string,
    active: boolean,
    id: number,
    name: string
  ) => {
    if (
      !selectedMusclesBySlug.includes(slug) &&
      !selectedMusclesByName.includes(name)
    ) {
      toggleMuscleActive(active, id);
      setSelectedMusclesByName((prevSelectedWorkout: []) => [
        ...prevSelectedWorkout,
        name,
      ]);
      setSelectedMusclesBySlug((prevSelectedWorkout: []) => [
        ...prevSelectedWorkout,
        slug,
      ]);
    } else {
      setSelectedMusclesBySlug((prevSelectedWorkout: []) =>
        prevSelectedWorkout.filter((workout: string) => workout !== slug)
      );
      setSelectedMusclesByName((prevSelectedWorkout: []) =>
        prevSelectedWorkout.filter((workout: string) => workout !== name)
      );
      toggleMuscleActive(active, id);
    }
  };

 const addLocation = (
   active: boolean,
   id: number,
   locationName: string,
   locationSlug: string
 ) => {
   if (
     !selectedLocationByName.includes(locationName) &&
     !selectedLocationBySlug.includes(locationSlug)
   ) {
     toggleLocationActive(active, id);
     setSelectedLocationByName((prevSelectedLocation: []) => [
       ...prevSelectedLocation,
       locationName,
     ]);
     setSelectedLocationBySlug((prevSelectedLocation: []) => [
       ...prevSelectedLocation,
       locationSlug,
     ]);
   } else {
     setSelectedLocationByName((prevSelectedLocation: []) =>
       prevSelectedLocation.filter(
         (location: string) => location !== locationName
       )
     );
     setSelectedLocationBySlug((prevSelectedLocation: []) =>
       prevSelectedLocation.filter(
         (location: string) => location !== locationSlug
       )
     );
     toggleLocationActive(active, id);
   }
 };
  
  ;

  return (
    <>
      <div className="flex-col flex md:flex-row items-center md:items-start gap-12 md:justify-between mx-auto max-w-[1240px] pt-12">
        <div className="md:w-1/3">
          <div className="grid grid-cols-3 gap-2 flex-wrap max-w-full mx-auto pb-4">
            {locations.map((location) => (
              <LocationNameButton
                key={location.locationId}
                locationName={location.locationName}
                locationId={location.locationId}
                active={location.active}
                addLocation={() =>
                  addLocation(
                    location.active,
                    location.locationId,
                    location.locationName,
                    location.locationSlug
                  )
                }
                locationSlug={location.locationSlug}
              />
            ))}
          </div>
          <div className={`grid max-w-full gap-1 grid-cols-3`}>
            {muscles.map((muscle: any) => (
              <MuscleNameButton
                key={muscle.id}
                slug={muscle.slug}
                active={muscle.active}
                id={muscle.id}
                name={muscle.name}
                addMuscle={() =>
                  addMuscle(muscle.slug, muscle.active, muscle.id, muscle.name)
                }
              />
            ))}
          </div>
        </div>
        <div className="md:w-1/3">
          <Exercices
            time="120"
            muscle={selectedMusclesByName}
            location={selectedLocationByName}
            equipment="all"
          />
        </div>
        <div className=" flex items-center justify-between mx-auto md:w-1/3">
          <MuscleGroupImage muscleGroups={selectedMusclesBySlug} />
        </div>
      </div>
    </>
  );
};

export default workouts;
