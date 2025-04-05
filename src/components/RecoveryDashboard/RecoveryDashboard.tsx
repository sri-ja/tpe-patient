import React from "react";
import ProgressBar from "./ProgressBar";
import Leaderboard from "./Leaderboard";
import NextAppointment from "./NextAppointment";
import StartSessionButton from "./StartSessionButton"; // Will likely rename/refactor this later

// Placeholder data - ideally fetched from an API or context
const patientName = "Alex";
const recoveryPercentage = 65;
const remainingPercentage = 100 - recoveryPercentage;

const RecoveryDashboard: React.FC = () => {
  return (
    // Main container with gradient background
    <div className="flex flex-col min-h-screen bg-gradient-to-b from-green-200 via-teal-100 to-white px-4 sm:px-6 lg:px-8 py-8">
      {/* Motivational Header */}
      <div className="text-center mb-8">
        <h1 className="text-3xl sm:text-4xl font-bold text-gray-800">
          You're crushing it, {patientName}!
        </h1>
        <p className="text-xl sm:text-2xl text-gray-700 mt-2">
          Just {remainingPercentage}% more to full recovery!
        </p>
      </div>

      {/* Dashboard Content Area */}
      <div className="flex flex-col space-y-6 w-full max-w-2xl mx-auto">
        {/* Comeback Journey Card */}
        <div className="bg-white rounded-xl shadow-md p-6">
          <h2 className="text-xl font-semibold text-gray-800 mb-4">
            Your Comeback Journey
          </h2>
          <ProgressBar percentage={recoveryPercentage} />
        </div>

        {/* Leaderboard Card */}
        <div className="bg-white rounded-xl shadow-md p-6">
          <Leaderboard />
        </div>

        {/* Quote Card */}
        <div className="bg-white rounded-xl shadow-md p-6 flex flex-col items-center">
          {/* <span className="text-4xl text-gray-400">“</span> */}
          <span className="text-lg text-gray-700 italic text-center">
            Small steps every day lead to big changes over time. Keep going!
          </span>
          {/* <span className="text-4xl text-gray-400">”</span> */}
        </div>

        {/* Action Button */}
        <div className="mt-4"> {/* Added margin-top */}
          <StartSessionButton /> {/* We'll update the text/styling inside this component */}
        </div>


        {/* Next Appointment Card
        <div className="bg-white rounded-xl shadow-md p-6">
          <NextAppointment />
        </div> */}
      </div>
    </div>
  );
};

export default RecoveryDashboard;
