import React from "react";

interface ExerciseGoalProps {
  goal: string;
  previousBest?: number; // Made previousBest optional
}

export const ExerciseGoal: React.FC<ExerciseGoalProps> = ({
  goal,
  // previousBest is no longer used in the rendering based on the new design
}) => {
  return (
    // Removed container styling (bg, border, padding, margin)
    // Added flex column and gap
    <div className="flex flex-col gap-2 w-full text-white">
      {/* Today's Goal Title - Increased font size */}
      <div className="text-xl font-semibold">Today's Goal</div>
      {/* Goal with Checkmark Icon */}
      <div className="flex items-center gap-2 text-lg">
        {/* Checkmark Icon */}
        <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-green-800" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={3}>
          <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
        </svg>
        <span className="text-xl">{goal}</span>
      </div>
      {/* Removed Previous Best display */}
    </div>
  );
};
