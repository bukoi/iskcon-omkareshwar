// components/SocialIcons.client.jsx
"use client";

import { motion } from "framer-motion";
import {
  FaFacebookF,
  FaInstagram,
  FaYoutube,
  FaTwitter,
  FaLinkedinIn,
} from "react-icons/fa";

const socialIcons = [
  { href: "#", icon: <FaFacebookF />, label: "Facebook" },
  { href: "#", icon: <FaInstagram />, label: "Instagram" },
  { href: "#", icon: <FaYoutube />, label: "YouTube" },
  { href: "#", icon: <FaTwitter />, label: "Twitter" },
  { href: "#", icon: <FaLinkedinIn />, label: "LinkedIn" },
];

export default function SocialIcons() {
  return (
    <div>
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
            transition={{
              type: "spring",
              stiffness: 300,
              damping: 10,
              delay: index * 0.1,
            }}
          >
            {icon}
          </motion.a>
        ))}
      </div>
    </div>
  );
}
