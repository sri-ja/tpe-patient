import React from "react";

interface StatCardProps {
  title: string;
  value: string;
}

const StatCard: React.FC<StatCardProps> = ({ title, value }) => {
  return (
    <div className="flex flex-col w-6/12 max-md:ml-0 max-md:w-full">
      <div className="flex flex-col grow items-start py-4 pr-12 pl-4 w-full bg-white rounded-lg shadow-[0px_1px_2px_rgba(0,0,0,0.1)] max-md:pr-5 max-md:mt-10">
        <div className="text-sm text-stone-500">{title}</div>
        <div className="mt-2 text-2xl font-semibold text-black">{value}</div>
      </div>
    </div>
  );
};

export default StatCard;
