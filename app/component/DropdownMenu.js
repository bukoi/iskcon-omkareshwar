"use client";
import { useState } from "react";
import Link from "next/link";
import { motion, AnimatePresence } from "framer-motion";
import { IoFlower } from "react-icons/io5";

const defaultDropdownItems = [
  { label: "ISKCON MISSION", link: "/mission" },
  { label: "FOUNDER", link: "/founder" },
  { label: "SRI SRI RADHA MADHAVA TEMPLE", link: "/temple" },
  { label: "DAILY DARSHAN", link: "/darshan" },
  { label: "GAUDIYA VAISHNAVISM", link: "/gaudiya" },
];

export default function DropdownMenu({
  items = defaultDropdownItems,
  buttonText = "Menu",
  buttonIcon = <IoFlower className="text-lg" />,
  itemIcon = <IoFlower className="text-lg" />,
  buttonClasses = "flex items-center space-x-2 bg-sky-700 text-white font-medium px-2 py-2 rounded-md shadow-md transition",
  dropdownClasses = "absolute left-0 mt-2 w-48 bg-sky-700 shadow-lg z-50 rounded p-1",
  itemClasses = "flex items-center space-x-2 text-white px-2 py-2 uppercase tracking-wide text-sm rounded-md",
  onItemClick,
}) {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div
      className="relative inline-block text-left"
      onMouseEnter={() => setIsOpen(true)}
      onMouseLeave={() => setIsOpen(false)}
    >
      <button className={buttonClasses}>
        {buttonIcon}
        <span>{buttonText}</span>
      </button>

      <AnimatePresence>
        {isOpen && (
          <motion.div
            key="dropdown"
            initial={{ opacity: 0, y: -5 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -5 }}
            transition={{ duration: 0.2 }}
            className={dropdownClasses}
          >
            <ul>
              {items.map((item) => (
                <li key={item.label} className="mb-1 last:mb-0">
                  <Link
                    href={item.link}
                    onClick={() => {
                      setIsOpen(false);
                      if (onItemClick) onItemClick();
                    }}
                    className={itemClasses}
                  >
                    <span className="inline-flex items-center">{itemIcon}</span>
                    <span>{item.label}</span>
                  </Link>
                </li>
              ))}
            </ul>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}
