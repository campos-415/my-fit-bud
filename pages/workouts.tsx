import MuscleGroupImage from "@/components/Workouts/MuscleGroupImage";
import { LocationsName, workOuts, Time } from "@/constants/constants";
import React, { useState } from "react";
import Exercices from "@/components/Workouts/Exercices";
import MuscleNameButton from "@/components/Workouts/MuscleNameButton";
import LocationNameButton from "@/components/Workouts/LocationNameButton";
import DurationButton from "@/components/Workouts/DurationButton";

const workouts = () => {
  const [muscles, setMuscles] = useState(workOuts);
  const [locations, setLocations] = useState(LocationsName);
  const [duration, setDuration] = useState(Time);
  const [selectedMusclesBySlug, setSelectedMusclesBySlug] = useState<any>([]);
  const [selectedMusclesByName, setSelectedMusclesByName] = useState<any>([]);
  const [selectedLocationBySlug, setSelectedLocationBySlug] = useState<any>([]);
  const [selectedLocationByName, setSelectedLocationByName] = useState<any>([]);
  const [selectedTime, setSelectedTime] = useState<[] | string | any>([]);

  const toggleMuscleActive = (active: boolean, id: number) => {
    const newMuscles = muscles.map((muscle: any) =>
      muscle.id === id ? { ...muscle, active: !active } : muscle
    );
    setMuscles(newMuscles);
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

  const toggleLocationActive = (active: boolean, id: number) => {
    const newLocation = locations.map((location: any) =>
      location.locationId === id ? { ...location, active: !active } : location
    );
    setLocations(newLocation);
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
  const toggleTimeActive = (active: boolean, id: number) => {
    const newDuration = duration.map((time: any) =>
      time.durationId === id ? { ...time, active: !active } : time
    );
    setDuration(newDuration);
  };

  const addTime = (active: boolean, id: number, time: number) => {
    if (!selectedTime.includes(time)) {
      toggleTimeActive(active, id);
      setSelectedTime((prevSelectedTime: []) => [...prevSelectedTime, time]);
    } else {
      setSelectedTime((prevSelectedTime: []) =>
        prevSelectedTime.filter((duration: number) => duration !== time)
      );
      toggleTimeActive(active, id);
    }
  };

  return (
    <>
      <div className="flex-col flex lg:flex-row items-center justify-center lg:items-start gap-12 lg:justify-between mx-auto max-w-[1240px] pt-12">
        <div className="lg:w-1/3">
        
          <div className="space-y-2">
            <h2 className="text-lg font-bold">Select Location</h2>
            <div className="grid grid-cols-3 gap-2 flex-wrap max-w-full mx-auto pb-4 ">
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
          </div>
          <div className="space-y-2">
            <h2 className="text-lg font-bold">Select Muscles</h2>
            <div className={`grid max-w-full gap-1 grid-cols-3 pb-4`}>
              {muscles.map((muscle: any) => (
                <MuscleNameButton
                  key={muscle.id}
                  slug={muscle.slug}
                  active={muscle.active}
                  id={muscle.id}
                  name={muscle.name}
                  addMuscle={() =>
                    addMuscle(
                      muscle.slug,
                      muscle.active,
                      muscle.id,
                      muscle.name
                    )
                  }
                />
              ))}
            </div>
          </div>
          <div className="space-y-2">
            <h2 className="text-lg font-bold">Select Duration</h2>
            <div className="mt-12 grid grid-cols-3 gap-2 flex-wrap max-w-full mx-auto pb-4">
              {duration.map((durationTime) => (
                <DurationButton
                  key={durationTime.durationId}
                  active={durationTime.active}
                  durationId={durationTime.durationId}
                  durationTime={durationTime.durationTime}
                  addTime={() =>
                    addTime(
                      durationTime.active,
                      durationTime.durationId,
                      durationTime.durationTime
                    )
                  }
                />
              ))}
            </div>
          </div>
        </div>
        <div className="lg:w-1/3">
          <Exercices
            time={selectedTime}
            muscle={selectedMusclesByName}
            location={selectedLocationByName}
            equipment="all"
          />
        </div>
        <div className=" flex items-center justify-between mx-auto lg:w-1/3">
          <MuscleGroupImage muscleGroups={selectedMusclesBySlug} />
        </div>
      </div>
    </>
  );
};

export default workouts;
