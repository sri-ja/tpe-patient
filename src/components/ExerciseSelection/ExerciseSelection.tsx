import React from "react";
import { ExerciseHeader } from "./ExerciseHeader";
import { ExerciseContent } from "./ExerciseContent";
import { ExerciseGoal } from "./ExerciseGoal";
import { StartButton } from "./StartButton";

const exerciseImageUrl = "https://i.postimg.cc/CLBgB3Cf/stairclimb.jpg" 

const ExerciseSelection: React.FC = () => {
  return (
    // Changed background to dark blue and added padding
    <div className="flex justify-center items-center min-h-screen bg-gradient-to-b from-green-200 via-teal-100 to-white p-4">
      {/* Centered card with max-width */}
      <div className="flex flex-col max-w-lg w-full bg-teal-500 rounded-2xl shadow-lg overflow-hidden text-white">
        {/* Header */}
        <div className="p-6">
          <ExerciseHeader
            title="Climbing Temple Stairs"
            // Using a placeholder icon - replace if a specific one is needed
            icon={
              <svg xmlns="http://www.w3.org/2000/svg" className="h-10 w-10 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                <path strokeLinecap="round" strokeLinejoin="round" d="M13 7h8m0 0v8m0-8l-8 8-4-4-6 6" /> {/* Example stairs icon */}
              </svg>
            }
          />
        </div>

        {/* Exercise Image with Interactive Badge */}
        <div className="relative p-4">
          <img
            src={exerciseImageUrl}
            alt="Exercise"
            className="w-full h-80 object-cover object-center"
          />
          <div className="absolute top-4 right-4 bg-white text-blue-600 font-bold px-3 py-1 rounded-md text-sm shadow">
            INTERACTIVE GAME
          </div>
        </div>

        {/* Content Area */}
        <div className="p-6 flex flex-col gap-4">
          <ExerciseContent
            description="Challenge yourself with this virtual stair climbing exercise designed to enhance motor skills, balance, and coordination." // Shortened description
            duration="10 mins" // Updated duration
            level="Beginner" // Updated level
          />
          <ExerciseGoal goal="Climb 30 steps" /> {/* Removed previousBest */}
          <StartButton />
        </div>
      </div>
    </div>
  );
};

export default ExerciseSelection;
