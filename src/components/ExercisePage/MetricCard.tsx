import React from "react";

interface MetricCardProps {
  icon: string;
  title: string;
  value: string;
  unit: string;
}

const MetricCard: React.FC<MetricCardProps> = ({
  icon,
  title,
  value,
  unit,
}) => {
  return (
    <div className="flex flex-col w-[33%] max-md:ml-0 max-md:w-full">
      <div className="flex flex-col items-start pt-6 pr-20 pb-28 pl-6 mx-auto w-full bg-gray-800 rounded-2xl border border-gray-700 border-solid shadow-[0px_4px_6px_rgba(0,0,0,0.1)] max-md:px-5 max-md:pb-24 max-md:mt-6">
        <div className="flex gap-3 text-base text-gray-200">
          <img
            loading="lazy"
            src={icon}
            className="object-contain shrink-0 w-6 aspect-square"
            alt={`${title} icon`}
          />
          <div>{title}</div>
        </div>
        <div className="flex gap-2 mt-2.5 whitespace-nowrap">
          <div className="grow text-4xl font-bold leading-none text-white">
            {value}
          </div>
          <div className="self-start mt-5 text-base text-gray-400">{unit}</div>
        </div>
      </div>
    </div>
  );
};

export default MetricCard;
