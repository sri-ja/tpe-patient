import React from "react";

const VirtualEnvironment: React.FC = () => {
  return (
    <div className="flex flex-col w-6/12 max-md:ml-0 max-md:w-full">
      <div className="flex flex-col grow p-6 w-full bg-gray-800 rounded-2xl border border-gray-700 border-solid max-md:px-5 max-md:mt-6 max-md:max-w-full">
        <div className="self-start text-base text-gray-200">
          Virtual Environment
        </div>
        <div className="flex flex-col justify-center py-5 mt-4 bg-gray-700 rounded-xl max-md:max-w-full">
          <div className="flex shrink-0 rounded-xl bg-zinc-300 h-[275px] max-md:max-w-full" />
        </div>
      </div>
    </div>
  );
};

export default VirtualEnvironment;
