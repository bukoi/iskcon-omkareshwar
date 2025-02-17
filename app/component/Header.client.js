// components/Header.client.jsx
"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import { motion, AnimatePresence } from "framer-motion";
import { IoReorderThree, IoClose, IoHomeSharp, IoFlower } from "react-icons/io5";
import { IoMdArrowDropdown } from "react-icons/io";

// Define nav links and dropdown items
const navLinks = [
  { href: "/", label: "Home", icon: <IoHomeSharp /> },
  { href: "/about", label: "About", dropdown: true },
  { href: "/program", label: "Program", dropdown: true },
  { href: "/contact-us", label: "Contact Us" },
];

function NavLinks({ closeMenu }) {
  const [activeDropdown, setActiveDropdown] = useState(null);

  const aboutItems = [
    { label: "ISKCON MISSION", link: "/about/mission" },
    { label: "FOUNDER", link: "/about/founder" },
    { label: "OUR PHILOSOPHY", link: "/about/our-philosophy" },
    { label: "ADMINISTRATION", link: "/about/administration" },
  ];

  const programItems = [
    { label: "SUNDAY FEAST PROGRAM", link: "/program/sunday-feast-program" },
    { label: "IYF", link: "/program/iyf" },
    { label: "HARINAAM SANKIRTAN", link: "/program/harinaam-sankirtan" },
    { label: "AANANDAM FOOD FOR LIFE", link: "/program/aanandam-food-for-life" },
  ];

  return navLinks.map(({ href, label, icon, dropdown }) => {
    if (dropdown) {
      // Choose the appropriate dropdown items based on the label
      const items = label === "About" ? aboutItems : label === "Program" ? programItems : [];
      const isActive = activeDropdown === label;
      return (
        <motion.div
          key={label}
          className="relative"
          whileHover={{ scale: 1.1, x: 5 }}
          transition={{ type: "spring", stiffness: 300 }}
          onMouseEnter={() => setActiveDropdown(label)}
          onMouseLeave={() => setActiveDropdown(null)}
        >
          {/* Wrap the nav item in a Link so that clicking navigates to its href */}
          <Link
            href={href}
            onClick={() => {
              setActiveDropdown(null);
              closeMenu && closeMenu();
            }}
            className="flex items-center space-x-2 text-white hover:text-sky-300 transition font-medium"
          >
            <span className="text-lg inline-flex">{icon}</span>
            <span className="ml-2 flex items-center">
              {label}
              <IoMdArrowDropdown className="ml-1" />
            </span>
          </Link>
          <AnimatePresence>
            {isActive && (
              <motion.div
                initial={{ opacity: 0, y: -5 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -5 }}
                transition={{ duration: 0.2 }}
                className="absolute left-0 mt-2 w-56 bg-sky-700 border border-sky-700 shadow-lg z-50 rounded-md p-2"
              >
                <ul>
                  {items.map((item) => (
                    <li key={item.label} className="mb-1 last:mb-0">
                      <Link
                        href={item.link}
                        onClick={() => {
                          setActiveDropdown(null);
                          closeMenu && closeMenu();
                        }}
                        className="block px-4 py-2 text-white hover:bg-sky-600 transition-colors uppercase tracking-wide text-sm rounded-md"
                      >
                        <span className="inline-flex items-center">
                          <IoFlower className="text-lg mr-1" />
                          {item.label}
                        </span>
                      </Link>
                    </li>
                  ))}
                </ul>
              </motion.div>
            )}
          </AnimatePresence>
        </motion.div>
      );
    }
    return (
      <motion.div
        key={href}
        whileHover={{ scale: 1.1, x: 5 }}
        transition={{ type: "spring", stiffness: 300 }}
      >
        <Link
          href={href}
          onClick={closeMenu}
          className="flex items-center space-x-2 text-white hover:text-sky-300 transition font-medium"
        >
          <span className="text-lg inline-flex">{icon}</span>
          <span className="ml-2 flex items-center">{label}</span>
        </Link>
      </motion.div>
    );
  });
}

export default function HeaderClient() {
  const [isOpen, setIsOpen] = useState(false);

  // Prevent scrolling when the mobile menu is open
  useEffect(() => {
    if (isOpen) {
      document.body.classList.add("overflow-hidden");
    } else {
      document.body.classList.remove("overflow-hidden");
    }
  }, [isOpen]);

  return (
    <>
      {/* Desktop Navigation */}
      <div className="hidden md:flex items-center space-x-6">
        <nav className="flex space-x-6">
          <NavLinks />
        </nav>
        <motion.div whileHover={{ scale: 1.1 }}>
          <Link
            href="/donate"
            className="bg-orange-500 text-white px-5 py-2 rounded-lg font-semibold shadow-md hover:bg-orange-600 transition"
          >
            Donate
          </Link>
        </motion.div>
      </div>

      {/* Mobile Menu Toggle Button */}
      <motion.button
        onClick={() => setIsOpen(!isOpen)}
        className="md:hidden text-white focus:outline-none"
        whileTap={{ scale: 0.9 }}
        aria-label="Toggle navigation menu"
        aria-expanded={isOpen}
      >
        {isOpen ? <IoClose size={30} /> : <IoReorderThree size={30} />}
      </motion.button>

      {/* Mobile Menu */}
      <AnimatePresence>
        {isOpen && (
          <>
            <motion.div
              initial={{ x: "-100%" }}
              animate={{ x: 0 }}
              exit={{ x: "-100%" }}
              transition={{ type: "spring", stiffness: 120, damping: 15 }}
              className="fixed inset-0 w-64 h-screen bg-sky-700 shadow-lg z-50 flex flex-col p-6"
            >
              <button
                onClick={() => setIsOpen(false)}
                className="absolute top-5 right-5 text-white focus:outline-none"
                aria-label="Close menu"
              >
                <IoClose size={30} />
              </button>
              <motion.div
                className="flex justify-center pt-12"
                initial={{ opacity: 1, scale: 0.8 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.5 }}
              >
                {/* Optionally, reuse your logo here or add additional elements */}
              </motion.div>
              <nav className="mt-12 flex flex-col space-y-6">
                <NavLinks closeMenu={() => setIsOpen(false)} />
              </nav>
              <motion.div whileHover={{ scale: 1.1 }} className="mt-10 text-center">
                <Link
                  href="/donate"
                  onClick={() => setIsOpen(false)}
                  className="bg-orange-500 text-white px-5 py-2 rounded-lg font-semibold shadow-md hover:bg-orange-600 transition"
                >
                  Donate
                </Link>
              </motion.div>
            </motion.div>
            {/* Overlay */}
            <motion.div
              className="fixed inset-0 bg-black bg-opacity-50 z-40 transition-opacity duration-300 opacity-100"
              onClick={() => setIsOpen(false)}
            />
          </>
        )}
      </AnimatePresence>
    </>
  );
}
