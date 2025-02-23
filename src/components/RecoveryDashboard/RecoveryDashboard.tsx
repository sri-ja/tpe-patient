import React from "react";
import ProgressBar from "./ProgressBar";
import Leaderboard from "./Leaderboard";
import NextAppointment from "./NextAppointment";
import StartSessionButton from "./StartSessionButton";

const RecoveryDashboard: React.FC = () => {
  return (
    <div className="flex overflow-hidden flex-col bg-white">
      <div className="flex flex-col px-4 pt-10 pb-28 bg-white max-md:pb-24 max-md:max-w-full">
        <h1 className="self-start ml-6 text-2xl font-semibold text-black max-md:ml-2.5">
          Recovery Progress
        </h1>
        <ProgressBar percentage={65} />
        <Leaderboard />
        <NextAppointment />
        <StartSessionButton />
      </div>
    </div>
  );
};

export default RecoveryDashboard;
