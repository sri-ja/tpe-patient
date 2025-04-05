import React from "react";
import ExerciseCard from "./ExerciseCard";

interface Exercise {
  title: string;
  description: string;
  duration: string;
  imageUrl: string; 
  icon: string; // Make icon required
}

interface ExerciseGridProps {
  exercises: Array<Exercise>;
  onExerciseClick: (exercise: Exercise) => void;
}

const ExerciseGrid: React.FC<ExerciseGridProps> = ({ exercises, onExerciseClick }) => {
  return (
    // Use CSS Grid for layout: 2 columns on medium screens+, 1 column below
    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
      {exercises.map((exercise, index) => (
        // Remove fixed width, grid handles sizing
        <div
          key={index}
          onClick={() => onExerciseClick(exercise)}
          className="cursor-pointer" // Add cursor pointer for better UX
        >
          <ExerciseCard
            title={exercise.title}
            description={exercise.description}
            duration={exercise.duration}
            imageUrl={exercise.imageUrl} // Keep imageUrl for now
            icon={exercise.icon} // Pass the icon prop
          />
        </div>
      ))}
    </div>
  );
};

export default ExerciseGrid;
