import React from "react";

interface Props {
  active: boolean;
  locationId: number;
  locationName: string;
  addLocation: (active: boolean, locationId: number, locationName: string, locationSlug: string) => void;
  locationSlug: string
}

const LocationNameButton = ({ active, locationId, locationName, addLocation, locationSlug }: Props) => {
  return (
    <button
      key={locationId}
      type="button"
      className={`${
        active ? "bg-specialColor text-white" : " bg-slate-600"
      } py-2 px-4 text-specialColor hover:text-white rounded-md hover:bg-specialColor`}
      onClick={() => addLocation( active, locationId, locationName, locationSlug)}>
      {locationName}
    </button>
  );
};

export default LocationNameButton;
