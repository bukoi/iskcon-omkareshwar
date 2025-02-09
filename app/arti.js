"use client";
import TempleScheduleImg from "@/public/temple-schedule.webp";
import { useState } from "react";
import { motion } from "framer-motion";

export default function TempleSchedule() {
  const [activeTab, setActiveTab] = useState("schedule");

  const scheduleData = [
    { title: "Lunch Prasadam for all", time: "13:00 - 14:30" },
    { title: "Raj Bhoga Aarti and Kirtan", time: "12:30 - 13:00" },
    { title: "Sunday youth class", time: "11:00 - 12:30" },
    { title: "Congregation class", time: "11:00 - 12:30" },
  ];

  const aartiData = [
    { title: "Mangal Aarti", time: "04:30 am" },
    { title: "Sringar Darshan", time: "07:30 am" },
    { title: "Srimad Bhagavatam Discourse", time: "08:00 am" },
    { title: "Raj Bhoga Aarti", time: "12:30 pm" },
    { title: "Uthapana Aarti", time: "04:30 pm" },
    { title: "Sandhya Aarti", time: "07:00 pm" },
    { title: "Bhagavad Gita Discourse", time: "07:30 pm" },
  ];

  return (
    <section 
      className="w-full min-h-screen bg-cover bg-center bg-fixed py-20 flex flex-col items-center text-white"
      style={{ backgroundImage: `url(${TempleScheduleImg.src})` }}
    >
      <motion.div 
        initial={{ opacity: 0, y: -30 }} 
        animate={{ opacity: 1, y: 0 }} 
        transition={{ duration: 0.8 }}
        className="bg-black bg-opacity-80 p-8 rounded-xl text-center shadow-lg max-w-3xl"
      >
        <h1 className="text-5xl font-extrabold mb-4 text-orange-500 tracking-wider">
          Temple Events & Schedule
        </h1>
        <p className="text-lg text-gray-300 max-w-2xl mx-auto">
          Join us in our divine rituals, soulful kirtans, and enlightening discourses.
        </p>
      </motion.div>

      <div className="w-full max-w-6xl px-6 flex flex-col md:flex-row gap-8 mt-12">
        <div className="flex flex-col gap-4 w-full md:w-1/3 items-center">
          <button
            className={`py-3 px-6 text-xl font-semibold rounded-full transition duration-300 shadow-lg ${
              activeTab === "schedule" ? "bg-orange-600 text-white" : "bg-white text-gray-800"
            }`}
            onClick={() => setActiveTab("schedule")}
          >
            Sunday Schedule
          </button>
          <button
            className={`py-3 px-6 text-xl font-semibold rounded-full transition duration-300 shadow-lg ${
              activeTab === "aarti" ? "bg-orange-600 text-white" : "bg-white text-gray-800"
            }`}
            onClick={() => setActiveTab("aarti")}
          >
            Aartis & Discourses
          </button>
        </div>

        <motion.div 
          initial={{ opacity: 0 }} 
          animate={{ opacity: 1 }} 
          transition={{ duration: 0.6 }}
          className="bg-white bg-opacity-95 text-gray-900 p-8 rounded-xl shadow-2xl w-full md:w-2/3"
        >
          {activeTab === "schedule" ? (
            <>
              <h2 className="text-3xl font-bold text-orange-600 mb-6 text-center">Sunday Schedule</h2>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                {scheduleData.map((event, index) => (
                  <div key={index} className="bg-gray-100 p-6 rounded-lg shadow-md text-center">
                    <p className="text-lg font-semibold text-gray-900">{event.title}</p>
                    <p className="text-gray-600 text-sm">{event.time}</p>
                  </div>
                ))}
              </div>
            </>
          ) : (
            <>
              <h2 className="text-3xl font-bold text-orange-600 mb-6 text-center">Aartis & Discourses</h2>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                {aartiData.map((event, index) => (
                  <div key={index} className="bg-gray-100 p-6 rounded-lg shadow-md text-center">
                    <p className="text-lg font-semibold text-gray-900">{event.title}</p>
                    <p className="text-gray-600 text-sm">{event.time}</p>
                  </div>
                ))}
              </div>
              <h3 className="text-2xl font-bold text-gray-700 mt-10 text-center">Darshan Timings</h3>
              <p className="text-gray-600 text-lg text-center">04:30 am - 01:00 pm</p>
              <p className="text-gray-600 text-lg text-center">04:30 pm - 08:30 pm</p>
            </>
          )}
        </motion.div>
      </div>
    </section>
  );
}
