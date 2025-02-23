import React from "react";
import { useNavigate } from "react-router-dom";
import MetricCard from "./MetricCard";
import ProgressBar from "./ProgressBar";
import PerformanceCard from "./PerformanceCard";
import VirtualEnvironment from "./VirtualEnvironment";
import AdditionalMetrics from "./AdditionalMetrics";

const ExercisePage: React.FC = () => {
  const navigate = useNavigate();

  const handleEndExercise = () => {
    navigate('/exercise-complete'); // Adjust this path based on your routing configuration
  };
  return (
    <div className="flex overflow-hidden flex-col bg-white">
      <div className="flex flex-col p-6 w-full bg-gray-900 max-md:px-5 max-md:max-w-full">
        <div className="flex flex-wrap gap-5 justify-between items-start w-full max-md:max-w-full">
          <div className="flex flex-wrap gap-4 text-3xl font-semibold leading-tight text-white">
            <img
              loading="lazy"
              src="https://cdn.builder.io/api/v1/image/assets/fba9e468e5f04bb09ec724ada98a9a23/099df7457c52d7cc4b75e19bd2de63b17edec225ad328f05d652898e7868dda3?apiKey=fba9e468e5f04bb09ec724ada98a9a23&"
              className="object-contain shrink-0 rounded-lg aspect-square w-[50px]"
              alt="Temple Stairs logo"
            />
            <div className="flex-auto self-start max-md:max-w-full">
              Temple Stairs - Training Mode
            </div>
          </div>
          <div className="text-4xl font-bold leading-none text-blue-500">
            0:22
          </div>
        </div>
        <div className="mt-8 w-full max-md:mr-1 max-md:max-w-full">
          <div className="flex gap-5 max-md:flex-col">
            <MetricCard
              icon="https://cdn.builder.io/api/v1/image/assets/fba9e468e5f04bb09ec724ada98a9a23/24581ae1bcbce5bfc5cd36f371571a1665e993d90f3ed2960beabec3156f0350?apiKey=fba9e468e5f04bb09ec724ada98a9a23&"
              title="Heart Rate"
              value="93"
              unit="BPM"
            />
            <div className="flex flex-col ml-5 w-[33%] max-md:ml-0 max-md:w-full">
              <div className="flex flex-col px-6 pt-6 pb-11 mx-auto w-full bg-gray-800 rounded-2xl border border-gray-700 border-solid shadow-[0px_4px_6px_rgba(0,0,0,0.1)] max-md:px-5 max-md:mt-6">
                <div className="flex gap-3 self-start text-base text-gray-200">
                  <img
                    loading="lazy"
                    src="https://cdn.builder.io/api/v1/image/assets/fba9e468e5f04bb09ec724ada98a9a23/8b14de3034f1f00a51af4c7c768cc1b9035ee09baa27634e22ca25c6c1b38a1a?apiKey=fba9e468e5f04bb09ec724ada98a9a23&"
                    className="object-contain shrink-0 w-6 aspect-square"
                    alt="Speed icon"
                  />
                  <div className="basis-auto">Current Speed</div>
                </div>
                <div className="flex gap-1.5 self-start mt-2.5 whitespace-nowrap">
                  <div className="text-4xl font-bold leading-none text-white">
                    4
                  </div>
                  <div className="self-start mt-5 text-base text-gray-400">
                    steps/min
                  </div>
                </div>
                <ProgressBar value={50} max={342} />
                <div className="flex gap-5 justify-between mt-2 text-base text-gray-400">
                  <div>0</div>
                  <div>30 (target)</div>
                </div>
              </div>
            </div>
            <PerformanceCard
              icon="https://cdn.builder.io/api/v1/image/assets/fba9e468e5f04bb09ec724ada98a9a23/705af78238fc5cef964405765a4a4856ceedbeccc9d5ca8ff262f7015e73eac9?apiKey=fba9e468e5f04bb09ec724ada98a9a23&"
              distance="0.8m"
              calories="3 kcal"
            />
          </div>
        </div>
        <div className="mt-8 max-md:mr-1 max-md:max-w-full">
          <div className="flex gap-5 max-md:flex-col">
            <VirtualEnvironment />
            <AdditionalMetrics />
          </div>
        </div>
        <button 
          onClick={handleEndExercise}
          className="self-end px-2.5 py-3 mt-16 max-w-full text-base font-semibold text-center text-white bg-red-600 rounded-xl shadow-[0px_4px_6px_rgba(220,38,38,0.2)] w-[145px] max-md:pr-5 max-md:mt-10 max-md:mr-1"
        >
          End Exercise
        </button>
      </div>
    </div>
  );
};

export default ExercisePage;
