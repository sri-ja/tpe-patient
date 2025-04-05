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
      // Updated styling: brighter blue, full width, uppercase bold text, more padding, hover effect
      className="w-full bg-green-600 hover:bg-green-400 text-white uppercase font-bold py-4 px-6 rounded-lg text-lg transition duration-200 ease-in-out"
    >
      Start Exercise
    </button>
  );
};
