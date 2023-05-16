import React from "react";

interface Props {
  active: boolean;
  durationId: number;
  durationTime: number;
  addTime: (
    active: boolean,
    durationId: number,
    durationTime: number,
  ) => void;
}

const DurationButton = ({
  active,
  durationId,
  durationTime,
  addTime,
}: Props) => {
  return (
    <button
      key={durationId}
      type="button"
      className={`${
        active ? "bg-specialColor text-white" : " bg-slate-600"
      } py-2 px-4 text-specialColor hover:text-white rounded-md hover:bg-specialColor`}
      onClick={() =>
        addTime(active, durationId, durationTime)
      }>
      {durationTime}
    </button>
  );
};

export default DurationButton;
