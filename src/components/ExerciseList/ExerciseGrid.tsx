import React from "react";
import ExerciseCard from "./ExerciseCard";

interface Exercise {
  title: string;
  description: string;
  duration: string;
  imageUrl?: string;
}

interface ExerciseGridProps {
  exercises: Exercise[];
}

const ExerciseGrid: React.FC<ExerciseGridProps> = ({ exercises }) => {
  return (
    <div className="flex gap-5 max-md:flex-col">
      {exercises.map((exercise, index) => (
        <div
          key={index}
          className="flex flex-col w-[33%] max-md:ml-0 max-md:w-full"
        >
          <ExerciseCard
            title={exercise.title}
            description={exercise.description}
            duration={exercise.duration}
            imageUrl={exercise.imageUrl}
          />
        </div>
      ))}
    </div>
  );
};

export default ExerciseGrid;
