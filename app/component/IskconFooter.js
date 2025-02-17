// components/IskconFooter.client.jsx
"use client";

import React from "react";
import { motion } from "framer-motion";
import FooterColumn1 from "./FooterColumn1.server";
import FooterColumn2 from "./FooterColumn2.server";
import SocialIcons from "./SocialIcons.client";
import Back from "@/public/back.jpg";

export default function IskconFooter() {
  return (
    <motion.footer
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 1 }}
      className="relative text-white min-h-[300px] bg-no-repeat bg-cover bg-center"
      style={{ backgroundImage: `url(${Back.src})` }}
    >
      {/* Sky-blue overlay */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 0.8 }}
        transition={{ duration: 1.2 }}
        className="absolute inset-0 bg-sky-700/80"
      />

      {/* Footer content */}
      <div className="relative container mx-auto py-6 md:py-10 px-4 md:px-8">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {/* Column 1 */}
          <motion.div
            initial={{ y: 30, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ duration: 1, delay: 0.2 }}
          >
            <FooterColumn1 />
          </motion.div>
          {/* Column 2 */}
          <motion.div
            initial={{ y: 30, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ duration: 1, delay: 0.4 }}
          >
            <FooterColumn2 />
          </motion.div>
          {/* Column 3 (Social Icons) */}
          <motion.div
            initial={{ y: 30, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ duration: 1, delay: 0.6 }}
            className="space-y-4 text-center sm:text-left"
          >
            <SocialIcons />
          </motion.div>
        </div>
      </div>
    </motion.footer>
  );
}
