import React from "react";

const NextAppointment: React.FC = () => {
  return (
    <div className="flex flex-col p-6 mt-6 w-full bg-white rounded-2xl shadow-[0px_20px_25px_rgba(0,0,0,0.1)] max-md:px-5 max-md:max-w-full">
      <div className="flex gap-3 self-start text-xl font-semibold text-black">
        <img
          loading="lazy"
          src="https://cdn.builder.io/api/v1/image/assets/fba9e468e5f04bb09ec724ada98a9a23/97bbecd28b9e3386f5291e07d39c0e9fdfbd266ccf0bee433ee0123acec4adf5?apiKey=fba9e468e5f04bb09ec724ada98a9a23&"
          className="object-contain shrink-0 my-auto w-6 aspect-square"
          alt="Calendar icon"
        />
        <h2 className="basis-auto">Next Appointment</h2>
      </div>
      <div className="flex flex-col items-start py-4 pr-20 pl-4 mt-4 text-sm rounded-lg bg-stone-50 text-stone-500 max-md:pr-5 max-md:max-w-full">
        <div className="text-base font-medium text-black">Thursday, Oct 12</div>
        <div>2:30 PM - 3:30 PM</div>
        <div>with Dr. Sarah Johnson</div>
      </div>
    </div>
  );
};

export default NextAppointment;
