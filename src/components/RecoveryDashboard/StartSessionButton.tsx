import React from "react";

const StartSessionButton: React.FC = () => {
  const handleStartSession = () => {
    console.log("Starting a new session");
  };

  return (
    <button
      className="px-16 py-4 mt-6 mb-0 text-base font-medium text-center text-white bg-blue-500 rounded-xl shadow-[0px_4px_6px_rgba(74,144,226,0.2)] max-md:px-5 max-md:mb-2.5 max-md:max-w-full hover:bg-blue-600 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-opacity-50 transition-colors duration-200"
      onClick={handleStartSession}
    >
      Start a Session
    </button>
  );
};

export default StartSessionButton;
