import React from "react";

interface ExerciseCardProps {
  title: string;
  description: string;
  duration: string;
  imageUrl?: string;
}

const ExerciseCard: React.FC<ExerciseCardProps> = ({
  title,
  description,
  duration,
  imageUrl,
}) => {
  return (
    <div className="flex flex-col grow pb-4 w-full text-sm leading-none rounded-xl bg-stone-50 max-md:mt-6">
      <div
        className="flex shrink-0 h-48 bg-zinc-300"
        style={
          imageUrl
            ? {
                backgroundImage: `url(${imageUrl})`,
                backgroundSize: "cover",
                backgroundPosition: "center",
              }
            : {}
        }
      />
      <div className="flex flex-col items-start px-4 mt-4 w-full">
        <div className="text-lg font-medium leading-loose text-black">
          {title}
        </div>
        <div className="mt-1 text-stone-500">{description}</div>
        <div className="flex gap-5 justify-between self-stretch mt-4">
          <div className="my-auto text-blue-500">{duration}</div>
          <button className="px-2.5 py-2 text-center text-white bg-blue-500 rounded-lg shadow-[0px_4px_6px_rgba(74,144,226,0.2)] max-md:pr-5">
            Start Game
          </button>
        </div>
      </div>
    </div>
  );
};

export default ExerciseCard;
