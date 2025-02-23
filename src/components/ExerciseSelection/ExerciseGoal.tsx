import React from "react";

interface ExerciseGoalProps {
  goal: string;
  previousBest: number;
}

export const ExerciseGoal: React.FC<ExerciseGoalProps> = ({
  goal,
  previousBest,
}) => {
  return (
    <div className="flex flex-col px-4 py-5 mt-6 w-full rounded-lg border border-indigo-50 border-solid bg-stone-50 max-md:max-w-full">
      <div className="flex gap-2 self-start text-base font-medium text-black">
        <img
          loading="lazy"
          src="https://cdn.builder.io/api/v1/image/assets/fba9e468e5f04bb09ec724ada98a9a23/e16c49df46a775352bae411982f504077adf2015af63ff3fb3737274cc04f573?apiKey=fba9e468e5f04bb09ec724ada98a9a23&"
          alt="Goal icon"
          className="object-contain shrink-0 my-auto w-5 aspect-square"
        />
        <div className="basis-auto">Today's Goal</div>
      </div>
      <div className="flex flex-wrap gap-10 mt-4 w-full text-sm text-stone-500 max-md:max-w-full">
        <div className="flex flex-1 gap-2">
          <img
            loading="lazy"
            src="https://cdn.builder.io/api/v1/image/assets/fba9e468e5f04bb09ec724ada98a9a23/ac420b3c4a5c10e774d1bbcc903f2e3fc033837823b90ca74d61f88e171410d7?apiKey=fba9e468e5f04bb09ec724ada98a9a23&"
            alt="Steps icon"
            className="object-contain shrink-0 my-auto w-4 aspect-square"
          />
          <div className="basis-auto">{goal}</div>
        </div>
        <div>Previous best: {previousBest}</div>
      </div>
    </div>
  );
};
