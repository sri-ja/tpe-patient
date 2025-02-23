import React from "react";

interface ExerciseHeaderProps {
  title: string;
  imageSrc: string;
  imageAlt: string;
}

export const ExerciseHeader: React.FC<ExerciseHeaderProps> = ({
  title,
  imageSrc,
  imageAlt,
}) => {
  return (
    <div className="flex gap-4 self-start text-2xl font-semibold text-black">
      <img
        loading="lazy"
        src={imageSrc}
        alt={imageAlt}
        className="object-contain shrink-0 w-10 rounded-lg aspect-square"
      />
      <div className="flex-auto my-auto">{title}</div>
    </div>
  );
};
