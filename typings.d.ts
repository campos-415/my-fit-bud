export interface exerciseList {
  key: string;
  _id: string;
  WarmUp: WarmUp;
  Exercise: Exercise;
  CoolDown: CoolDown;
  length: any;
}

export interface WarmUp {
  map: any
  WarmUp: WarmUp | ReactNode
  Exercise: string;
  Time: string;
}
export interface Exercise {
  map: any;
  Exercise: Exercise | ReactNode;
  Exercise: string;
  Reps: string;
  Sets: string;
}
export interface CoolDown {
  map: any
  CoolDown: CoolDown | ReactNode;
  Exercise: string;
  Time: string;
}

export interface ExerciseListProps {
  time: {};
  muscle: [];
  location: string;
  equipment: string;
}