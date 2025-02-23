import React from "react";
import { ExerciseHeader } from "./ExerciseHeader";
import { ExerciseContent } from "./ExerciseContent";
import { ExerciseGoal } from "./ExerciseGoal";
import { StartButton } from "./StartButton";

export const ClimbingExerciseCard: React.FC = () => {
  return (
    <div className="flex overflow-hidden flex-col bg-white">
      <div className="flex flex-col items-center px-20 pt-14 pb-1 bg-zinc-300 max-md:px-5 max-md:max-w-full">
        <div className="flex flex-col max-w-full w-[600px]">
          <div className="flex flex-col px-6 pt-6 pb-4 w-full bg-white rounded-2xl border border-indigo-50 border-solid shadow-[0px_20px_25px_rgba(0,0,0,0.1)] max-md:px-5 max-md:max-w-full">
            <ExerciseHeader
              title="Climbing Temple Stairs"
              imageSrc="https://cdn.builder.io/api/v1/image/assets/fba9e468e5f04bb09ec724ada98a9a23/fef237bdfcc35939576dff302faa65a936e44c3c0121c9ac97e8fa5eeedb8b0c?apiKey=fba9e468e5f04bb09ec724ada98a9a23&"
              imageAlt="Temple stairs icon"
            />
            <ExerciseContent
              description="Challenge yourself with this virtual temple stair climbing exercise designed to enhance motor skills, balance, and coordination. Navigate through ancient temple steps while improving lower body strength and spatial awareness. Perfect for developing precise movement control and building confidence in mobility."
              duration="10-15 minutes"
              level="Beginner Level"
            />
            <ExerciseGoal goal="Climb 30 steps" previousBest={25} />
          </div>
          <StartButton />
        </div>
      </div>
    </div>
  );
};
