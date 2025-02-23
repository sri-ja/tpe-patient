import React from "react";

interface ProgressBarProps {
  percentage: number;
}

const ProgressBar: React.FC<ProgressBarProps> = ({ percentage }) => {
  return (
    <>
      <div className="flex flex-col items-start self-center mt-2 max-w-full rounded-xl bg-zinc-100 w-[1192px] max-md:pr-5">
        <div
          className="flex shrink-0 max-w-full h-6 bg-blue-500 rounded-xl"
          style={{ width: `${percentage}%` }}
          role="progressbar"
          aria-valuenow={percentage}
          aria-valuemin={0}
          aria-valuemax={100}
        />
      </div>
      <div className="self-start mt-2 ml-6 text-sm font-medium text-stone-500 max-md:ml-2.5">
        {percentage}% Complete
      </div>
    </>
  );
};

export default ProgressBar;
