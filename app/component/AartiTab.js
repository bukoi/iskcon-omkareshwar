// components/AartiTab.jsx
"use client";

export default function AartiTab({ aartiData }) {
  return (
    <>
      <h2 className="text-3xl font-bold text-orange-600 mb-6 text-center">
        Aartis & Discourses
      </h2>
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
        {aartiData.map((event, index) => (
          <div key={index} className="bg-gray-100 p-6 rounded-lg shadow-md text-center">
            <p className="text-lg font-semibold text-gray-900">{event.title}</p>
            <p className="text-gray-600 text-sm">{event.time}</p>
          </div>
        ))}
      </div>
      <h3 className="text-2xl font-bold text-gray-700 mt-10 text-center">
        Darshan Timings
      </h3>
      <p className="text-gray-600 text-lg text-center">04:30 am - 01:00 pm</p>
      <p className="text-gray-600 text-lg text-center">04:30 pm - 08:30 pm</p>
    </>
  );
}
