"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import { motion, AnimatePresence } from "framer-motion";
import {
  IoReorderThree,
  IoClose,
  IoHomeSharp,
  IoFlower,
} from "react-icons/io5";
import { IoMdArrowDropdown } from "react-icons/io";

// --- Data & Navigation Links ---
const navLinks = [
  { href: "/", label: "Home", icon: <IoHomeSharp /> },
  { href: "/about", label: "About", dropdown: true },
  { href: "/sunday-feast-program", label: "Program", dropdown: true },
  { href: "/contact-us", label: "Contact Us" },
];

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


// --- DesktopNav Component ---
// Break here: you can move this to its own file (e.g., DesktopNav.jsx)
const DesktopNav = () => {
  const [active, setActive] = useState(null);
  return (
    <nav className="flex items-center space-x-6">
      {navLinks.map(({ href, label, icon, dropdown }) =>
        dropdown ? (
          <div
            key={label}
            className="relative"
            onMouseEnter={() => setActive(label)}
            onMouseLeave={() => setActive(null)}
          >
            <Link href={href} className="flex items-center text-white hover:text-sky-300 font-medium">
              <span className="text-lg">{icon}</span>
              <span className="ml-2 flex items-center">
                {label} <IoMdArrowDropdown className="ml-1" />
              </span>
            </Link>
            <AnimatePresence>
              {active === label && (
                <motion.div
                  initial={{ opacity: 0, y: -5 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -5 }}
                  transition={{ duration: 0.2 }}
                  className="absolute left-0 mt-2 w-56 bg-sky-700 rounded p-2 z-50"
                >
                  {(label === "About" ? aboutItems : programItems).map((item) => (
                    <Link
                      key={item.label}
                      href={item.link}
                      onClick={() => setActive(null)}
                      className="block px-4 py-2 text-sm text-white hover:text-sky-300"
                    >
                      <IoFlower className="inline mr-1 text-lg" /> {item.label}
                    </Link>
                  ))}
                </motion.div>
              )}
            </AnimatePresence>
          </div>
        ) : (
          <Link key={href} href={href} className="flex items-center text-white hover:text-sky-300 font-medium">
            <span className="text-lg">{icon}</span>
            <span className="ml-2">{label}</span>
          </Link>
        )
      )}
    </nav>
  );
};


// --- SidebarLinks Component ---
// Break here: you can move this to its own file (e.g., SidebarLinks.jsx)
const SidebarLinks = ({ close }) => {
  const [active, setActive] = useState(null);
  return (
    <nav className="flex flex-col space-y-4">
      {navLinks.map(({ href, label, icon, dropdown }) =>
        dropdown ? (
          <div key={label}>
            <button
              onClick={() => setActive(active === label ? null : label)}
              className="flex w-full justify-between items-center text-white text-lg"
            >
              <div className="flex items-center">
                {icon} <span className="ml-2">{label}</span>
              </div>
              <IoMdArrowDropdown className={`ml-1 transition ${active === label ? "rotate-180" : ""}`} />
            </button>
            <AnimatePresence>
              {active === label && (
                <motion.div
                  initial={{ opacity: 0, height: 0 }}
                  animate={{ opacity: 1, height: "auto" }}
                  exit={{ opacity: 0, height: 0 }}
                  transition={{ duration: 0.3 }}
                  className="ml-5 mt-2 flex flex-col space-y-2"
                >
                  {(label === "About" ? aboutItems : programItems).map((item) => (
                    <Link
                      key={item.label}
                      href={item.link}
                      onClick={close}
                      className="flex items-center text-white text-base hover:text-sky-300"
                    >
                      <IoFlower className="mr-2 text-lg" /> {item.label}
                    </Link>
                  ))}
                </motion.div>
              )}
            </AnimatePresence>
          </div>
        ) : (
          <Link
            key={href}
            href={href}
            onClick={close}
            className="flex items-center text-white text-lg hover:text-sky-300"
          >
            {icon} <span className="ml-2">{label}</span>
          </Link>
        )
      )}
    </nav>
  );
};


// --- MobileSidebar Component ---
// Break here: you can move this to its own file (e.g., MobileSidebar.jsx)
const MobileSidebar = ({ open, setOpen }) => (
  <AnimatePresence>
    {open && (
      <>
        <motion.div
          initial={{ x: "-100%" }}
          animate={{ x: 0 }}
          exit={{ x: "-100%" }}
          transition={{ type: "spring", stiffness: 120, damping: 15 }}
          className="fixed inset-0 w-64 h-screen bg-sky-600/90 z-50 p-6"
        >
          <button onClick={() => setOpen(false)} className="absolute top-5 right-5 text-black">
            <IoClose size={30} />
          </button>
          <div className="mt-12">
            <SidebarLinks close={() => setOpen(false)} />
          </div>
          <motion.div whileHover={{ scale: 1.1 }} className="mt-10 text-center">
            <Link
              href="/donate"
              onClick={() => setOpen(false)}
              className="bg-orange-500 text-white px-5 py-2 rounded font-semibold hover:bg-orange-600"
            >
              Donate
            </Link>
          </motion.div>
        </motion.div>
        <motion.div
          className="fixed inset-0 bg-black/50 z-40 h-screen"
          onClick={() => setOpen(false)}
        />
      </>
    )}
  </AnimatePresence>
);


// --- Header Component ---
// Break here: you can move this to its own file (e.g., Header.jsx)
export default function Header() {
  const [isOpen, setIsOpen] = useState(false);
  useEffect(() => {
    document.body.classList.toggle("overflow-hidden", isOpen);
  }, [isOpen]);

  return (
    <header className="p-4 flex items-center justify-between bg-sky-600/00">
      {/* Desktop Navigation */}
      <div className="hidden md:flex space-x-6 items-center">
        <DesktopNav />
        <motion.div whileHover={{ scale: 1.1 }}>
          <Link
            href="/donate"
            className="bg-orange-500 text-white px-5 py-2 rounded font-semibold hover:bg-orange-600"
          >
            Donate
          </Link>
        </motion.div>
      </div>
      {/* Mobile Toggle */}
      <div className="md:hidden">
        <motion.button
          onClick={() => setIsOpen(!isOpen)}
          whileTap={{ scale: 0.9 }}
          className="text-white"
        >
          {isOpen ? <IoClose size={30} /> : <IoReorderThree size={30} />}
        </motion.button>
      </div>
      <MobileSidebar open={isOpen} setOpen={setIsOpen} />
    </header>
  );
}
