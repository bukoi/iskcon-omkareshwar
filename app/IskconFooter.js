"use client";
import React from "react";
import { motion } from "framer-motion";
import {
  FaFacebookF,
  FaInstagram,
  FaYoutube,
  FaTwitter,
  FaLinkedinIn,
} from "react-icons/fa";
import Back from "@/public/back.jpg";

const socialIcons = [
  { href: "#", icon: <FaFacebookF />, label: "Facebook" },
  { href: "#", icon: <FaInstagram />, label: "Instagram" },
  { href: "#", icon: <FaYoutube />, label: "YouTube" },
  { href: "#", icon: <FaTwitter />, label: "Twitter" },
  { href: "#", icon: <FaLinkedinIn />, label: "LinkedIn" },
];

const IskconFooter = () => {
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
            className="space-y-2 text-center sm:text-left"
          >
            <h2 className="text-xl md:text-2xl font-bold text-orange-400">
              ISKCON Omkareshwar
            </h2>
            <p className="uppercase tracking-wide text-sm md:text-base text-gray-200">
              International Society for Krishna Consciousness
            </p>
            <p className="text-sm md:text-base text-gray-300">
              Founder Acharya: His Divine Grace A.C. Bhaktivedanta Swami
              Prabhupada
            </p>
          </motion.div>

          {/* Column 2 */}
          <motion.div
            initial={{ y: 30, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ duration: 1, delay: 0.4 }}
            className="space-y-3 leading-relaxed text-center sm:text-left text-sm md:text-base text-gray-200"
          >
            <p>218-A, Silicon City, Omkareshwar, Indore (MP) 452013, India</p>
            <p>+91 77779 37108</p>
            <p>+91 94949 43108</p>
            <p>info@iskconomkareshwar.com</p>
            <p>
              <strong className="text-orange-400">General Manager:</strong> <br />
              HG Madhav Kumar Das <br />
              (Mithun Kumar Ghosh) <br />
              +91 7771099906
            </p>
          </motion.div>

          {/* Column 3 (Social Icons) */}
          <motion.div
            initial={{ y: 30, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ duration: 1, delay: 0.6 }}
            className="space-y-4 text-center sm:text-left"
          >
            <h3 className="text-lg font-semibold text-orange-400">Follow Us</h3>
            <div className="flex justify-center sm:justify-start space-x-4">
              {socialIcons.map(({ href, icon, label }, index) => (
                <motion.a
                  key={label}
                  href={href}
                  className="bg-white w-10 h-10 rounded-full flex items-center justify-center text-sky-700 hover:text-orange-500 transition-colors"
                  aria-label={label}
                  whileHover={{ scale: 1.2, rotate: 5 }}
                  whileTap={{ scale: 0.9 }}
                  transition={{ type: "spring", stiffness: 300, damping: 10, delay: index * 0.1 }}
                >
                  {icon}
                </motion.a>
              ))}
            </div>
          </motion.div>
        </div>
      </div>
    </motion.footer>
  );
};

export default IskconFooter;
