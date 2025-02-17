// components/TempleSchedule.jsx
"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import TempleScheduleImg from "@/public/temple-schedule.webp";
import TempleHeader from "./TempleHeader";
import TabSelector from "./TabSelector";
import ScheduleTab from "./ScheduleTab";
import AartiTab from "./AartiTab";

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
      {/* Header */}
      <TempleHeader />

      <div className="w-full max-w-6xl px-6 flex flex-col md:flex-row gap-8 mt-12">
        {/* Tab Selector */}
        <TabSelector activeTab={activeTab} setActiveTab={setActiveTab} />

        {/* Tab Content */}
        <motion.div 
          initial={{ opacity: 0 }} 
          animate={{ opacity: 1 }} 
          transition={{ duration: 0.6 }}
          className="bg-white bg-opacity-95 text-gray-900 p-8 rounded-xl shadow-2xl w-full md:w-2/3"
        >
          {activeTab === "schedule" ? (
            <ScheduleTab scheduleData={scheduleData} />
          ) : (
            <AartiTab aartiData={aartiData} />
          )}
        </motion.div>
      </div>
    </section>
  );
}
