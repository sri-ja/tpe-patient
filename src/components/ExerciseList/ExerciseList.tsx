import React from "react";
import { useNavigate } from "react-router-dom";
import ExerciseGrid from "./ExerciseGrid";

const exercises = [
  {
    title: "Climbing Temple Stairs",
    description: "Enhance motor skills",
    duration: "10-15 minutes",
  },
  {
    title: "Pattern Puzzle",
    description: "Enhance cognitive abilities",
    duration: "15-20 minutes",
  },
  {
    title: "Quick Reflexes",
    description: "Test your reaction time",
    duration: "5-10 minutes",
  },
  {
    title: "Focus Flow",
    description: "Improve concentration",
    duration: "10-15 minutes",
  },
  {
    title: "Balance Master",
    description: "Improve coordination",
    duration: "15-20 minutes",
  },
  {
    title: "Rhythm Flow",
    description: "Enhance motor skills",
    duration: "10-15 minutes",
  },
  {
    title: "Strategic Thinking",
    description: "Boost problem solving",
    duration: "15-20 minutes",
  },
  {
    title: "Hand-Eye Master",
    description: "Improve coordination",
    duration: "10-15 minutes",
  },
  {
    title: "Flexibility Plus",
    description: "Enhance range of motion",
    duration: "15-20 minutes",
  },
];

const ExerciseSelection: React.FC = () => {
  const navigate = useNavigate();

  const handleExerciseClick = (exercise: typeof exercises[0]) => {
    navigate(`/exercise-details/${exercise.title.toLowerCase().replace(/\s+/g, '-')}`, {
      state: { exercise }
    });
  };

  return (
    <div className="flex overflow-hidden flex-col pb-7 bg-white">
      <div className="flex flex-col justify-center px-7 py-4 w-full bg-zinc-300 max-md:px-5 max-md:max-w-full">
        <div className="flex flex-col px-8 py-8 w-full bg-white rounded-2xl border border-indigo-50 border-solid shadow-[0px_8px_10px_rgba(0,0,0,0.1)] max-md:px-5 max-md:max-w-full">
          <h1 className="self-start text-2xl font-semibold leading-none text-black">
            Select an Exercise
          </h1>
          <p className="self-start mt-2.5 text-base text-stone-500">
            Choose from our collection of prescribed exercises
          </p>
          <div className="mt-8 max-md:max-w-full">
            <ExerciseGrid exercises={exercises.slice(0, 3)} onExerciseClick={handleExerciseClick} />
          </div>
          <div className="mt-6 max-md:max-w-full">
            <ExerciseGrid exercises={exercises.slice(3, 6)} onExerciseClick={handleExerciseClick} />
          </div>
          <div className="mt-6 max-md:max-w-full">
            <ExerciseGrid exercises={exercises.slice(6)} onExerciseClick={handleExerciseClick} />
          </div>
        </div>
      </div>
    </div>
  );
};

export default ExerciseSelection;