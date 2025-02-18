"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import { motion, AnimatePresence } from "framer-motion";
import { IoReorderThree, IoClose, IoHomeSharp, IoFlower } from "react-icons/io5";
import { IoMdArrowDropdown } from "react-icons/io";

const navLinks = [
  { href: "/", label: "Home", icon: <IoHomeSharp /> },
  // "About" has dropdown links with ID-based navigation
  { href: "/about", label: "About", dropdown: true },
  { href: "/sunday-feast-program", label: "Program", dropdown: true },
  { href: "/contact-us", label: "Contact Us" },
];

// 1) Updated "About" items with hash links
const aboutItems = [
  { label: "WHY KRISHNA", link: "/about#why-krishna" },
  { label: "ISKCON MISSION", link: "/about#mission" },
  { label: "FOUNDER", link: "/about#founder" },
  { label: "OUR PHILOSOPHY", link: "/about#our-philosophy" },
  { label: "ADMINISTRATION", link: "/about#administration" },
];

const programItems = [
  { label: "SUNDAY FEAST PROGRAM", link: "/sunday-feast-program" },
  { label: "IYF", link: "/iyf" },
  { label: "HARINAAM SANKIRTAN", link: "/harinaam-sankirtan" },
  { label: "AANANDAM FOOD FOR LIFE", link: "/aanandam-food-for-life" },
];

function NavLinks({ closeMenu }) {
  const [activeDropdown, setActiveDropdown] = useState(null);

  return navLinks.map(({ href, label, icon, dropdown }) => {
    // For dropdown items
    if (dropdown) {
      const items =
        label === "About" ? aboutItems : label === "Program" ? programItems : [];
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
          <Link
            href={href}
            onClick={() => {
              setActiveDropdown(null);
              closeMenu?.();
            }}
            className="flex items-center text-white hover:text-sky-300 transition font-medium text-base"
          >
            <span className="text-lg inline-flex">{icon}</span>
            <span className="ml-2 flex items-center">
              {label} <IoMdArrowDropdown className="ml-1" />
            </span>
          </Link>

          <AnimatePresence>
            {isActive && (
              <motion.div
                initial={{ opacity: 0, y: -5 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -5 }}
                transition={{ duration: 0.2 }}
                className="absolute left-0 mt-2 w-56 bg-sky-700 shadow-lg z-50 rounded-md p-2"
              >
                <ul>
                  {items.map((item) => (
                    <li key={item.label}>
                      <Link
                        href={item.link}
                        onClick={() => {
                          setActiveDropdown(null);
                          closeMenu?.();
                        }}
                        className="block px-4 py-2 text-white hover:bg-sky-600 transition-colors uppercase text-sm rounded-md"
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

    // Non-dropdown items
    return (
      <motion.div
        key={href}
        whileHover={{ scale: 1.1, x: 5 }}
        transition={{ type: "spring", stiffness: 300 }}
      >
        <Link
          href={href}
          onClick={closeMenu}
          className="flex items-center text-white hover:text-sky-300 transition font-medium text-base"
        >
          <span className="text-lg inline-flex">{icon}</span>
          <span className="ml-2">{label}</span>
        </Link>
      </motion.div>
    );
  });
}

export default function HeaderClient() {
  const [isOpen, setIsOpen] = useState(false);

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
            className="bg-orange-500 text-white px-5 py-2 rounded-lg font-semibold hover:bg-orange-600 transition text-base"
          >
            Donate
          </Link>
        </motion.div>
      </div>

      {/* Mobile Menu Toggle */}
      <motion.button
        onClick={() => setIsOpen(!isOpen)}
        className="md:hidden text-white"
        whileTap={{ scale: 0.9 }}
        aria-label="Toggle navigation menu"
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
                className="absolute top-5 right-5 text-white"
                aria-label="Close menu"
              >
                <IoClose size={30} />
              </button>

              <nav className="mt-12 flex flex-col space-y-6">
                <NavLinks closeMenu={() => setIsOpen(false)} />
              </nav>

              <motion.div whileHover={{ scale: 1.1 }} className="mt-10 text-center">
                <Link
                  href="/donate"
                  onClick={() => setIsOpen(false)}
                  className="bg-orange-500 text-white px-5 py-2 rounded-lg font-semibold hover:bg-orange-600 transition text-base"
                >
                  Donate
                </Link>
              </motion.div>
            </motion.div>

            <motion.div
              className="fixed inset-0 bg-black bg-opacity-50 z-40"
              onClick={() => setIsOpen(false)}
            />
          </>
        )}
      </AnimatePresence>
    </>
  );
}
