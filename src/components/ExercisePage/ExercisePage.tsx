import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import MetricCard from "./MetricCard";
import ProgressBar from "./ProgressBar";
import PerformanceCard from "./PerformanceCard";
import VirtualEnvironment from "./VirtualEnvironment";
import AdditionalMetrics from "./AdditionalMetrics";

const ExercisePage: React.FC = () => {
  const navigate = useNavigate();
  const [time, setTime] = useState(0);
  const [heartRate, setHeartRate] = useState(80);
  const [currentSpeed, setCurrentSpeed] = useState(0);
  const [distance, setDistance] = useState(0);
  const [calories, setCalories] = useState(0);

  useEffect(() => {
    // Timer update
    const timer = setInterval(() => {
      setTime(prev => prev + 1);
    }, 1000);
  
    // Metrics update
    const metricsInterval = setInterval(() => {
      // Simulate heart rate changes (80-120 BPM)
      setHeartRate(prev => Math.floor(80 + Math.random() * 40));
      
      // Simulate speed changes with only increasing values
      setCurrentSpeed(prev => {
        const newSpeed = prev + (Math.random() * 0.5); // Only positive increments
        return Math.min(10, newSpeed); // Cap at maximum speed of 10
      });
      
      // Update distance based on speed
      setDistance(prev => prev + (currentSpeed * 0.1));
      
      // Update calories
      setCalories(prev => prev + (currentSpeed * 1));
    }, 2000);
  
    return () => {
      clearInterval(timer);
      clearInterval(metricsInterval);
    };
  }, [currentSpeed]);

  const formatTime = (seconds: number): string => {
    const minutes = Math.floor(seconds / 60);
    const remainingSeconds = seconds % 60;
    return `${minutes}:${remainingSeconds.toString().padStart(2, '0')}`;
  };

  const handleEndExercise = () => {
    navigate('/exercise-complete'); 
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
            {formatTime(time)}
          </div>
        </div>
        <div className="mt-8 w-full max-md:mr-1 max-md:max-w-full">
          <div className="flex gap-5 max-md:flex-col">
            <MetricCard
              icon="https://cdn.builder.io/api/v1/image/assets/fba9e468e5f04bb09ec724ada98a9a23/24581ae1bcbce5bfc5cd36f371571a1665e993d90f3ed2960beabec3156f0350?apiKey=fba9e468e5f04bb09ec724ada98a9a23&"
              title="Heart Rate"
              value={heartRate.toString()}
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
                    {currentSpeed.toFixed(1)}
                  </div>
                  <div className="self-start mt-5 text-base text-gray-400">
                    steps/min
                  </div>
                </div>
                <ProgressBar value={currentSpeed} max={30} />
                <div className="flex gap-5 justify-between mt-2 text-base text-gray-400">
                  <div>0</div>
                  <div>30 (target)</div>
                </div>
              </div>
            </div>
            <PerformanceCard
              icon="https://cdn.builder.io/api/v1/image/assets/fba9e468e5f04bb09ec724ada98a9a23/705af78238fc5cef964405765a4a4856ceedbeccc9d5ca8ff262f7015e73eac9?apiKey=fba9e468e5f04bb09ec724ada98a9a23&"
              distance={`${distance.toFixed(1)}m`}
              calories={`${Math.floor(calories)} kcal`}
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