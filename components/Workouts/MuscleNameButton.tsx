import React from "react";

interface Props {
  slug: string;
  active: boolean;
  id: number;
  name: string;
  addMuscle: (slug: string, active: boolean, id: number, name: string) => void;
}

const MuscleNameButton = ({ slug, active, id, name, addMuscle }: Props) => {
  return (
    <button
      key={id}
      type="button"
      className={`${
        active ? " bg-specialColor text-white" : " bg-slate-600"
      } py-2 px-4 text-specialColor hover:text-white rounded-md hover:bg-specialColor text-sm`}
      onClick={() => addMuscle(slug, active, id, name)}>
      {name}
    </button>
  );
};

export default MuscleNameButton;
