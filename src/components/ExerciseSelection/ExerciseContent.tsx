import React from "react";

interface ExerciseContentProps {
  description: string;
  duration: string;
  level: string;
}

export const ExerciseContent: React.FC<ExerciseContentProps> = ({
  description,
  duration,
  level,
}) => {
  return (
    <>
      <div className="pr-4 pb-16 pl-8 mt-8 rounded-xl bg-stone-50 max-md:pl-5 max-md:max-w-full">
        <div className="flex gap-5 max-md:flex-col">
          <div className="flex flex-col w-[76%] max-md:ml-0 max-md:w-full">
            <div className="flex shrink-0 mx-auto max-w-full rounded-lg bg-zinc-300 h-[250px] w-[486px]" />
          </div>
          <div className="flex flex-col ml-5 w-[24%] max-md:ml-0 max-md:w-full">
            <div className="px-4 py-2 mt-3 w-full text-sm text-blue-500 bg-white rounded-lg shadow-[0px_10px_15px_rgba(0,0,0,0.1)]">
              Interactive Game
            </div>
          </div>
        </div>
      </div>
      <div className="mt-6 text-base leading-6 text-stone-500 max-md:mr-2.5 max-md:max-w-full">
        {description}
      </div>
      <div className="flex gap-4 self-start mt-8 text-sm text-stone-500">
        <div className="flex gap-2 px-4 py-2 bg-white rounded-lg shadow-[0px_1px_3px_rgba(0,0,0,0.1)]">
          <img
            loading="lazy"
            src="https://cdn.builder.io/api/v1/image/assets/fba9e468e5f04bb09ec724ada98a9a23/0bd998cb75a5aff8e42b1b65200fc3d5539a30fa43151f17a82cc6649b1636ee?apiKey=fba9e468e5f04bb09ec724ada98a9a23&"
            alt="Duration icon"
            className="object-contain shrink-0 self-start w-5 aspect-square"
          />
          <div>{duration}</div>
        </div>
        <div className="flex gap-2 px-4 py-2 bg-white rounded-lg shadow-[0px_1px_3px_rgba(0,0,0,0.1)]">
          <img
            loading="lazy"
            src="https://cdn.builder.io/api/v1/image/assets/fba9e468e5f04bb09ec724ada98a9a23/54863fb4bad9c7127f0c3e13b395fdb6aa20a7b08c8609f561d60ea6438c91cf?apiKey=fba9e468e5f04bb09ec724ada98a9a23&"
            alt="Level icon"
            className="object-contain shrink-0 self-start w-5 aspect-square"
          />
          <div className="basis-auto">{level}</div>
        </div>
      </div>
    </>
  );
};
