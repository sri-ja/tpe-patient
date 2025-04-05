import React, { useState, useEffect } from "react"; // Import useState and useEffect
import { useNavigate } from "react-router-dom";
import Confetti from 'react-confetti'; // Import Confetti
import StatCard from "./StatCard";
import PerformanceStat from "./PerformanceStat";

interface ExerciseCompleteProps {
  stepsClimbed: number; // Renamed from heartClimbed for clarity, assuming steps
  timeTaken: string; // e.g., "08:45"
  averageSpeed: string; // e.g., "29 steps/minute"
  isPersonalBest: boolean;
  exerciseName?: string; // Optional: To display "Temple Climb Complete!"
}

const ExerciseComplete: React.FC<ExerciseCompleteProps> = ({
  stepsClimbed,
  timeTaken,
  averageSpeed,
  isPersonalBest,
  exerciseName = "Exercise", // Default exercise name
}) => {
  const navigate = useNavigate();
  const [windowSize, setWindowSize] = useState({ width: window.innerWidth, height: window.innerHeight });
  const [showConfetti, setShowConfetti] = useState(true);

  // Effect to get window size
  useEffect(() => {
    const handleResize = () => {
      setWindowSize({ width: window.innerWidth, height: window.innerHeight });
    };
    window.addEventListener('resize', handleResize);
    // Cleanup listener on unmount
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  // Effect to stop confetti after a delay
  useEffect(() => {
    const timer = setTimeout(() => {
      setShowConfetti(false);
    }, 20000); // Stop confetti after 20 seconds

    // Cleanup timer on unmount
    return () => clearTimeout(timer);
  }, []);


  const handleReturn = () => {
    navigate('/'); // Navigate to dashboard or appropriate route
  };

  // Using light theme styles inspired by RecoveryDashboard and ExerciseList
  return (
    // Main container with light gradient background and padding
    // Added relative positioning for confetti overlay
    <div className="relative flex flex-col items-center min-h-screen bg-gradient-to-b from-green-100 via-teal-100 to-white p-8">
       {/* Confetti Overlay */}
       {showConfetti && (
         <Confetti
           width={windowSize.width}
           height={windowSize.height}
           recycle={false} // Set to false so it stops after pieces fall
           numberOfPieces={200} // Adjust number of pieces
           gravity={0.1} // Adjust gravity
         />
       )}
      {/* Checkmark Icon - Adjusted for light theme */}
      <div className="bg-green-500 p-4 rounded-full mb-6 shadow-md z-10"> {/* Added z-10 to keep above confetti */}
        <svg xmlns="http://www.w3.org/2000/svg" className="h-10 w-10 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
        </svg>
      </div>

      {/* Main Title - Adjusted text color */}
      <h1 className="text-4xl font-bold text-gray-800 mb-2 text-center z-10"> {/* Added z-10 */}
        Awesome Work!
      </h1>
      {/* Subtitle - Adjusted text color */}
      <p className="text-lg text-teal-700 mb-8 text-center z-10"> {/* Added z-10 */}
        {exerciseName} Complete!
      </p>

      {/* Stat Cards Section - Using white background cards */}
      <div className="flex flex-col md:flex-row gap-6 w-full max-w-2xl mb-8 z-10"> {/* Added z-10 */}
        {/* StatCard components will be updated separately */}
        <StatCard
          title="Steps Climbed"
          value={stepsClimbed.toString()}
        />
        <StatCard title="Time Taken" value={timeTaken} />
      </div>

      {/* Performance Stats Section - Using white background card */}
      <div className="flex flex-col p-6 rounded-xl bg-white w-full max-w-2xl mb-8 shadow-md z-10"> {/* Added z-10 */}
        {/* Adjusted title color */}
        <h2 className="text-xl font-semibold text-gray-800 mb-3">
          Performance Stats
        </h2>
        {/* Use ul for list items, removed default list styles */}
        <ul className="space-y-1"> {/* Removed list-disc list-inside */}
          {/* PerformanceStat with Speed Icon */}
          <PerformanceStat
            icon={
              <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                <path strokeLinecap="round" strokeLinejoin="round" d="M13 10V3L4 14h7v7l9-11h-7z" /> {/* Simple lightning bolt for speed */}
              </svg>
            }
            text={`Average speed: ${averageSpeed}`}
          />
          {/* PerformanceStat with Star Icon and Highlight for Personal Best */}
          {isPersonalBest && (
            <PerformanceStat
              icon={
                <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                  <path strokeLinecap="round" strokeLinejoin="round" d="M11.049 2.927c.3-.921 1.603-.921 1.902 0l1.519 4.674a1 1 0 00.95.69h4.915c.969 0 1.371 1.24.588 1.81l-3.976 2.888a1 1 0 00-.363 1.118l1.518 4.674c.3.922-.755 1.688-1.538 1.118l-3.976-2.888a1 1 0 00-1.176 0l-3.976 2.888c-.783.57-1.838-.196-1.538-1.118l1.518-4.674a1 1 0 00-.363-1.118l-3.976-2.888c-.783-.57-.38-1.81.588-1.81h4.914a1 1 0 00.951-.69l1.519-4.674z" /> {/* Star icon */}
                </svg>
              }
              text="New personal best time!"
              highlight={true} // Enable highlighting
            />
          )}
        </ul>
      </div>

      {/* Enhanced Motivational Message Section with Background */}
      {/* Added padding, light background, rounded corners, and subtle shadow */}
      <div className="flex flex-col items-center text-center rounded-lg bg-teal-50 shadow-sm mb-10 z-10 w-full max-w-md">
        {/* Trophy Icon */}
        <svg xmlns="http://www.w3.org/2000/svg" className="h-12 w-12 text-yellow-500 mb-3" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
           <path strokeLinecap="round" strokeLinejoin="round" d="M19 11a7 7 0 01-7 7m0 0a7 7 0 01-7-7m7 7v4m0 0H8m4 0h4m-4-8a3 3 0 01-3-3V5a3 3 0 116 0v3a3 3 0 01-3 3z" /> {/* Trophy Icon */}
        </svg>
        {/* Main Motivational Text - Larger and using accent color */}
        <p className="text-3xl font-bold text-teal-600 mb-2">
          Fantastic Effort!
        </p>
        {/* Sub-text */}
        <p className="text-md text-gray-700">
          Keep it up and get even better
        </p>
      </div>


      {/* Return Button - Adjusted for light theme (e.g., teal button) */}
      <button
        onClick={handleReturn}
        className="px-8 py-3 bg-teal-600 text-white text-lg font-semibold rounded-xl shadow-md hover:bg-teal-700 transition-colors z-10" // Added z-10
      >
        Back to Dashboard
      </button>
    </div>
  );
};

export default ExerciseComplete;
