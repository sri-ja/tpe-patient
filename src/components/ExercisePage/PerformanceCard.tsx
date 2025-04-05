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
    // Use flex-1 for flexible width, add min-width
    <div className="flex flex-col flex-1 min-w-[280px]"> 
      {/* Consistent card styling: white bg, rounded-xl, shadow-md, padding */}
      <div className="flex grow flex-col p-6 w-full bg-white rounded-xl shadow-md"> 
        {/* Increased title size and weight */}
        <div className="flex gap-3 items-center text-lg font-medium text-gray-700"> 
          <img
            loading="lazy"
            src={icon}
            // Ensure icon size is appropriate
            className="object-contain shrink-0 w-6 h-6 aspect-square"
            alt="Performance icon"
          />
          <div className="grow shrink">Performance</div> 
        </div>
        {/* Adjusted layout, spacing, and font sizes */}
        <div className="flex justify-between mt-4"> 
          <div>
            {/* Increased label size */}
            <div className="text-base text-gray-600"> 
              Distance
            </div>
            {/* Increased value size */}
            <div className="mt-1 text-3xl font-semibold text-gray-800"> 
              {distance}
            </div>
          </div>
          <div className="text-right"> 
            {/* Increased label size */}
            <div className="text-base text-gray-600"> 
              Calories
            </div>
            {/* Increased value size */}
            <div className="mt-1 text-3xl font-semibold text-gray-800"> 
              {calories}
            </div>
          </div>
        </div>
      </div>
    </div> 
  );
};

export default PerformanceCard;
