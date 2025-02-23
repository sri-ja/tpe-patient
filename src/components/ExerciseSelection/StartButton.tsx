import React from "react";
import { useNavigate } from "react-router-dom";

export const StartButton: React.FC = () => {
  const navigate = useNavigate();

  const handleClick = () => {
    navigate('/exercise'); // Replace with your actual exercise page route
  };

  return (
    <button 
      onClick={handleClick}
      className="flex flex-col justify-center items-center px-16 py-3 mx-6 mt-2 text-base font-medium text-center text-white bg-blue-500 rounded-xl shadow-[0px_4px_6px_rgba(74,144,226,0.2)] max-md:px-5 max-md:mr-2.5 max-md:max-w-full"
    >
      <div className="flex gap-5 max-w-full w-[149px]">
        <div className="grow shrink w-[104px]">Start Exercise</div>
        <img
          loading="lazy"
          src="https://cdn.builder.io/api/v1/image/assets/fba9e468e5f04bb09ec724ada98a9a23/7e59f68295e92e89ae7f725cfb3da5bc5a058ee24eb2b56af97e1b2bf6fcdcc2?apiKey=fba9e468e5f04bb09ec724ada98a9a23&"
          alt="Start icon"
          className="object-contain shrink-0 my-auto w-5 aspect-square"
        />
      </div>
    </button>
  );
};