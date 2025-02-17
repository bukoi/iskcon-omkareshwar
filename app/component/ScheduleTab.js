// components/ScheduleTab.jsx
"use client";

export default function ScheduleTab({ scheduleData }) {
  return (
    <>
      <h2 className="text-3xl font-bold text-orange-600 mb-6 text-center">
        Sunday Schedule
      </h2>
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
        {scheduleData.map((event, index) => (
          <div key={index} className="bg-gray-100 p-6 rounded-lg shadow-md text-center">
            <p className="text-lg font-semibold text-gray-900">{event.title}</p>
            <p className="text-gray-600 text-sm">{event.time}</p>
          </div>
        ))}
      </div>
    </>
  );
}
