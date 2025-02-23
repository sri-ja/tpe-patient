import React from "react";

interface PerformanceStatProps {
  iconSrc: string;
  text: string;
}

const PerformanceStat: React.FC<PerformanceStatProps> = ({ iconSrc, text }) => {
  return (
    <div className="flex gap-3 mt-4">
      <img
        loading="lazy"
        src={iconSrc}
        className="object-contain shrink-0 self-start w-5 aspect-square"
        alt=""
      />
      <div className="basis-auto">{text}</div>
    </div>
  );
};

export default PerformanceStat;
