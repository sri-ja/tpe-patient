import React from "react";

interface LeaderboardEntry {
  name: string;
  points: number;
}

const leaderboardData: LeaderboardEntry[] = [
  { name: "Patient A", points: 98 },
  { name: "Patient B", points: 95 },
  { name: "Patient C", points: 92 },
];

const Leaderboard: React.FC = () => {
  return (
    <div className="flex flex-col px-6 py-7 mt-12 w-full bg-white rounded-2xl shadow-[0px_20px_25px_rgba(0,0,0,0.1)] max-md:px-5 max-md:mt-10 max-md:max-w-full">
      <h2 className="self-start text-xl font-semibold text-black">
        Leaderboard
      </h2>
      <div className="flex flex-wrap gap-5 justify-between p-3 mt-4 w-full rounded-lg bg-stone-50 max-md:max-w-full">
        <div className="text-base font-medium text-black">Your Rank: 5/20</div>
        <div className="flex gap-2 self-start text-sm text-stone-500">
          <img
            loading="lazy"
            src="https://cdn.builder.io/api/v1/image/assets/fba9e468e5f04bb09ec724ada98a9a23/43755938699692e0260ce14d570795dc6f248780df9d84dcef9eb8aa25491730?apiKey=fba9e468e5f04bb09ec724ada98a9a23&"
            className="object-contain shrink-0 self-start w-5 aspect-square"
            alt="Top 25% icon"
          />
          <div>Top 25%</div>
        </div>
      </div>
      {leaderboardData.map((entry, index) => (
        <div
          key={index}
          className={`flex flex-wrap gap-5 justify-between mt-4 text-sm max-md:mr-2 max-md:max-w-full`}
        >
          <div className="text-black">
            {index + 1}. {entry.name}
          </div>
          <div className="text-stone-500">{entry.points}pts</div>
        </div>
      ))}
    </div>
  );
};

export default Leaderboard;
