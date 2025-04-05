import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import MetricCard from "./MetricCard";
import ProgressBar from "./ProgressBar";
import PerformanceCard from "./PerformanceCard";
import VirtualEnvironment from "./VirtualEnvironment";
import AdditionalMetrics from "./AdditionalMetrics";
import MotivationalMessage from "./MotivationalMessage"; // Import the new component

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
    // Apply consistent gradient background and padding
    <div className="flex overflow-hidden flex-col min-h-screen bg-gradient-to-b from-green-200 via-teal-100 to-white px-4 sm:px-6 lg:px-8 py-8"> 
      {/* Removed separate header background div, content directly on gradient */}
      <div className="flex flex-wrap gap-5 justify-between items-start w-full max-w-7xl mx-auto mb-8"> 
        {/* Changed text color to dark gray for contrast, increased size */}
        <div className="flex flex-wrap gap-4 text-3xl sm:text-4xl font-bold text-gray-800 items-center"> 
          <img
            loading="lazy"
            src="https://cdn.builder.io/api/v1/image/assets/fba9e468e5f04bb09ec724ada98a9a23/099df7457c52d7cc4b75e19bd2de63b17edec225ad328f05d652898e7868dda3?apiKey=fba9e468e5f04bb09ec724ada98a9a23&"
            // Removed border, adjusted size slightly
            className="object-contain shrink-0 rounded-lg aspect-square w-[50px] sm:w-[60px]" 
              alt="Temple Stairs logo"
            />
            <div className="flex-auto self-center"> {/* Centered text vertically */}
              Temple Stairs - Training Mode
            </div>
          </div>
          {/* Changed timer text color to dark gray, increased size */}
          <div className="text-5xl sm:text-6xl font-bold leading-none text-gray-800"> 
            {formatTime(time)}
          </div>
        </div>
      {/* Main content area with max-width and centering */}
      <div className="w-full max-w-7xl mx-auto"> 
        <div className="w-full"> {/* Removed max-md:max-w-full as parent handles width */}
          {/* Adjusted gap for responsiveness */}
          <div className="flex flex-wrap gap-6"> 
            {/* Updated MetricCard call - ensure props/internal styles match */}
            <MetricCard 
              icon="https://cdn.builder.io/api/v1/image/assets/fba9e468e5f04bb09ec724ada98a9a23/24581ae1bcbce5bfc5cd36f371571a1665e993d90f3ed2960beabec3156f0350?apiKey=fba9e468e5f04bb09ec724ada98a9a23&"
              title="Heart Rate"
              value={heartRate.toString()}
              unit="BPM"
            />
            {/* Speed Card - Now part of the flex-wrap layout */}
            <div className="flex flex-col flex-1 min-w-[280px]"> {/* Added flex-1 and min-width */}
              {/* Consistent card styling */}
              <div className="flex flex-col grow p-6 w-full bg-white rounded-xl shadow-md"> 
                {/* Increased title size */}
                <div className="flex gap-3 self-start text-lg font-medium text-gray-700"> 
                  <img
                    loading="lazy"
                    // Consider using an SVG icon here that can inherit color
                    src="https://cdn.builder.io/api/v1/image/assets/fba9e468e5f04bb09ec724ada98a9a23/8b14de3034f1f00a51af4c7c768cc1b9035ee09baa27634e22ca25c6c1b38a1a?apiKey=fba9e468e5f04bb09ec724ada98a9a23&"
                    className="object-contain shrink-0 w-6 aspect-square" 
                    alt="Speed icon"
                  />
                  <div className="basis-auto">Current Speed</div>
                </div>
                <div className="flex gap-1.5 items-baseline mt-2 whitespace-nowrap"> {/* Adjusted alignment */}
                  {/* Increased value size, changed color */}
                  <div className="text-5xl font-bold leading-none text-teal-600"> 
                    {currentSpeed.toFixed(1)}
                  </div>
                  {/* Increased unit size */}
                  <div className="text-lg text-gray-600"> 
                    steps/min
                  </div>
                </div>
                {/* Updated ProgressBar call */}
                <ProgressBar value={currentSpeed} max={30} /> 
                {/* Increased label size */}
                <div className="flex justify-between mt-2 text-base text-gray-600"> 
                  <div>0</div>
                  <div>Target: 30</div> {/* Slightly more descriptive */}
                </div>
              </div>
            </div>
            {/* Updated PerformanceCard call */}
            <PerformanceCard 
              icon="https://cdn.builder.io/api/v1/image/assets/fba9e468e5f04bb09ec724ada98a9a23/705af78238fc5cef964405765a4a4856ceedbeccc9d5ca8ff262f7015e73eac9?apiKey=fba9e468e5f04bb09ec724ada98a9a23&"
              distance={`${distance.toFixed(1)}m`}
              calories={`${Math.floor(calories)} kcal`}
            />
          </div>
        </div>
        {/* Adjusted margin top */}
        <div className="mt-6"> 
          {/* Adjusted gap for responsiveness */}
          <div className="flex flex-wrap gap-6"> 
            {/* Updated VirtualEnvironment call */}
            {/* <VirtualEnvironment />  */}
            {/* Updated AdditionalMetrics call */}
            <AdditionalMetrics /> 
          </div>
        </div>
        {/* Updated Motivational Message call */}
        <MotivationalMessage /> 
        {/* Centered Button */}
        <div className="flex justify-center mt-10"> 
          <button 
            onClick={handleEndExercise}
            // Increased size, adjusted styling
            className="px-8 py-4 text-lg font-semibold text-center text-white bg-red-600 rounded-xl shadow-lg hover:bg-red-700 focus:outline-none focus:ring-2 focus:ring-red-500 focus:ring-opacity-75 transition duration-150 ease-in-out" 
          >
            End Exercise
          </button>
        </div>
      </div> 
    </div> 
  );
};

export default ExercisePage;
