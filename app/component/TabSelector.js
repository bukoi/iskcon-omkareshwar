// components/TabSelector.jsx
"use client";

export default function TabSelector({ activeTab, setActiveTab }) {
  return (
    <div className="flex flex-col gap-4 w-full md:w-1/3 items-center">
      <button
        className={`py-3 px-6 text-xl font-semibold rounded-full transition duration-300 shadow-lg ${
          activeTab === "schedule"
            ? "bg-orange-600 text-white"
            : "bg-white text-gray-800"
        }`}
        onClick={() => setActiveTab("schedule")}
      >
        Sunday Schedule
      </button>
      <button
        className={`py-3 px-6 text-xl font-semibold rounded-full transition duration-300 shadow-lg ${
          activeTab === "aarti"
            ? "bg-orange-600 text-white"
            : "bg-white text-gray-800"
        }`}
        onClick={() => setActiveTab("aarti")}
      >
        Aartis & Discourses
      </button>
    </div>
  );
}
