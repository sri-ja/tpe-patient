import React from "react";
import { useNavigate } from "react-router-dom";
import ExerciseGrid from "./ExerciseGrid";

// Updated exercise data based on the image
const exercises = [
  // == Gross Motor & Mobility ==
  {
    title: "Stair Climbing Practice", // Keeping similar to your example but more general
    description: "Improve leg strength, balance, and endurance",
    duration: "10-20 min",
    imageUrl: "https://i.postimg.cc/hvB6hGnS/stairs.png",
    icon: "stairs", // Placeholder icon name
  },
  {
    title: "Obstacle Course Navigation",
    description: "Improve motor planning, balance, and coordination",
    duration: "15-25 min",
    imageUrl: "https://i.postimg.cc/hvQv4pSF/obstacle.png",
    icon: "cone-walk", // Placeholder icon name
  },
  {
    title: "Target Reaching",
    description: "Improve arm control and coordination",
    duration: "15-20 min",
    imageUrl: "https://i.postimg.cc/8s857M57/target.png",
    icon: "target-arrow", // Placeholder icon name
  },
  {
    title: "Ball Toss Coordination",
    description: "Enhance hand-eye coordination and reaction time",
    imageUrl: "https://i.postimg.cc/c1vB8WCW/throw.png",
    duration: "10-20 min",
    icon: "ball-catch", // Placeholder icon name
  }
];
const ExerciseList: React.FC = () => {
  const navigate = useNavigate();

  const handleExerciseClick = (exercise: typeof exercises[0]) => {
    navigate(`/exercise-details/${exercise.title.toLowerCase().replace(/\s+/g, '-')}`, {
      state: { exercise }
    });
  };

  return (
    // Apply gradient background and adjust padding
    <div className="flex flex-col min-h-screen bg-gradient-to-b from-teal-100 via-green-100 to-white p-8">
      {/* Center content */}
      <div className="w-full max-w-4xl mx-auto">
        {/* Update title and subtitle */}
        <h1 className="text-4xl font-bold text-center text-gray-800">
          Treat yourself to a powerful workout!
        </h1>
        <p className="mt-2 text-lg text-center text-teal-700">
          Choose one accelerate your journey to recovery
        </p>
        {/* Render all exercises in a single grid */}
        <div className="mt-10">
          <ExerciseGrid exercises={exercises} onExerciseClick={handleExerciseClick} />
        </div>
      </div>
    </div>
  );
};

export default ExerciseList;
