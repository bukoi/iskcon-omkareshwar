// components/TempleHeader.jsx
"use client";

import { motion } from "framer-motion";

export default function TempleHeader() {
  return (
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
  );
}
