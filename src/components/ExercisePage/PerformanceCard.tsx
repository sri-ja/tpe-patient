import React from "react";

interface PerformanceCardProps {
  icon: string;
  distance: string;
  calories: string;
}

const PerformanceCard: React.FC<PerformanceCardProps> = ({
  icon,
  distance,
  calories,
}) => {
  return (
    <div className="flex flex-col ml-5 w-[33%] max-md:ml-0 max-md:w-full">
      <div className="flex grow gap-5 justify-between items-start pt-6 pr-20 pb-20 pl-6 w-full bg-gray-800 rounded-2xl border border-gray-700 border-solid shadow-[0px_4px_6px_rgba(0,0,0,0.1)] max-md:px-5 max-md:mt-6">
        <div className="flex flex-col items-start self-start whitespace-nowrap">
          <div className="flex gap-3 self-stretch text-base text-gray-200">
            <img
              loading="lazy"
              src={icon}
              className="object-contain shrink-0 w-6 aspect-square"
              alt="Performance icon"
            />
            <div className="grow shrink w-[99px]">Performance</div>
          </div>
          <div className="mt-4 text-sm leading-none text-gray-400">
            Distance
          </div>
          <div className="text-2xl font-bold leading-none text-white">
            {distance}
          </div>
        </div>
        <div className="flex flex-col self-end mt-10">
          <div className="self-start text-sm leading-none text-gray-400">
            Calories
          </div>
          <div className="text-2xl font-bold leading-none text-white">
            {calories}
          </div>
        </div>
      </div>
    </div>
  );
};

export default PerformanceCard;
