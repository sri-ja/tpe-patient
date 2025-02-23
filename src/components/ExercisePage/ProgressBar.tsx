import React from "react";

interface ProgressBarProps {
  value: number;
  max: number;
}

const ProgressBar: React.FC<ProgressBarProps> = ({ value, max }) => {
  return (
    <div className="flex flex-col items-start mt-5 max-w-full bg-gray-700 rounded-lg w-[342px] max-md:pr-5">
      <div
        className="flex shrink-0 h-2 bg-blue-500 rounded-lg"
        style={{ width: `${(value / max) * 100}%` }}
      />
    </div>
  );
};

export default ProgressBar;
