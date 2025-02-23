import React from "react";
import { useNavigate } from "react-router-dom";
import StatCard from "./StatCard";
import PerformanceStat from "./PerformanceStat";

interface ExerciseCompleteProps {
  stepsClimbed: number;
  timeTaken: string;
  averageSpeed: string;
  isPersonalBest: boolean;
}

const ExerciseComplete: React.FC<ExerciseCompleteProps> = ({
  stepsClimbed,
  timeTaken,
  averageSpeed,
  isPersonalBest,
}) => {
  const navigate = useNavigate();

  const handleReturn = () => {
    navigate('/');
  };
  return (
    <div className="flex overflow-hidden flex-col bg-white">
      <div className="flex flex-col justify-center items-center px-20 py-20 bg-zinc-300 max-md:px-5 max-md:max-w-full">
        <div className="flex flex-col py-8 max-w-full bg-white rounded-2xl border border-indigo-50 border-solid shadow-[0px_8px_10px_rgba(0,0,0,0.1)] w-[600px]">
          <div className="flex flex-col px-8 w-full max-md:px-5 max-md:max-w-full">
            <img
              loading="lazy"
              src="https://cdn.builder.io/api/v1/image/assets/fba9e468e5f04bb09ec724ada98a9a23/625d2997ba7a1f9fccf7b5119d287e91cfba8e3a0ead214f9bfd0fbe1515353a?apiKey=fba9e468e5f04bb09ec724ada98a9a23&"
              className="object-contain self-center w-20 rounded-lg aspect-square"
              alt="Temple Climb Logo"
            />
            <h1 className="self-start mt-8 ml-9 text-2xl font-semibold text-center text-black max-md:ml-2.5">
              Temple Climb Complete!
            </h1>
            <div className="p-6 mt-6 rounded-xl bg-stone-50 max-md:px-5 max-md:max-w-full">
              <div className="flex gap-5 max-md:flex-col">
                <StatCard
                  title="Steps Climbed"
                  value={`${stepsClimbed} steps`}
                />
                <StatCard title="Time Taken" value={timeTaken} />
              </div>
            </div>
            <div className="flex flex-col items-start py-6 pr-16 pl-6 mt-6 w-full text-sm rounded-lg bg-stone-50 text-stone-500 max-md:px-5 max-md:max-w-full">
              <h2 className="text-base font-medium text-black">
                Performance Stats
              </h2>
              <PerformanceStat
                iconSrc="https://cdn.builder.io/api/v1/image/assets/fba9e468e5f04bb09ec724ada98a9a23/26227b9e054b1db504fa4a17b25b579b3f71f63d6cfd3deac6b0bb34caf12c98?apiKey=fba9e468e5f04bb09ec724ada98a9a23&"
                text={`Average speed: ${averageSpeed}`}
              />
              {isPersonalBest && (
                <PerformanceStat
                  iconSrc="https://cdn.builder.io/api/v1/image/assets/fba9e468e5f04bb09ec724ada98a9a23/f21609f58963d936306aa7a5be8570414beb6511ffa05c33eb908f10c18e75b3?apiKey=fba9e468e5f04bb09ec724ada98a9a23&"
                  text="New personal best time!"
                />
              )}
            </div>
            <p className="self-center mt-6 text-lg text-center text-blue-500">
              Excellent Climb!
            </p>
            <p className="self-center mt-2.5 text-sm text-center text-stone-500">
              You're getting stronger each day
            </p>
          </div>
          <button 
            onClick={handleReturn}
            className="flex flex-col justify-center items-center px-16 py-3 mx-8 mt-6 text-base font-medium text-center text-white bg-blue-500 rounded-xl shadow-[0px_4px_6px_rgba(74,144,226,0.2)] max-md:px-5 max-md:mr-2.5 max-md:max-w-full"
          >
            <div className="flex gap-9 w-56 max-w-full">
              <span className="grow shrink w-[164px]">Return to Dashboard</span>
              <img
                loading="lazy"
                src="https://cdn.builder.io/api/v1/image/assets/fba9e468e5f04bb09ec724ada98a9a23/83f8029fff518f71d2211ab61c7b5b217f9ee5717e56d7e1ddfa661936c6cad8?apiKey=fba9e468e5f04bb09ec724ada98a9a23&"
                className="object-contain shrink-0 my-auto w-5 aspect-square"
                alt=""
              />
            </div>
          </button>
        </div>
      </div>
    </div>
  );
};

export default ExerciseComplete;
