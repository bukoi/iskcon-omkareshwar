"use client";
import { useState, useEffect } from "react";
import Link from "next/link";
import Image from "next/image";
import { motion, AnimatePresence } from "framer-motion";
import ilogo from "@/public/ilogo.png";
import { IoReorderThree, IoClose, IoHomeSharp } from "react-icons/io5";

const navLinks = [
  { href: "/", label: "Home", icon: <IoHomeSharp /> },
  { href: "/about", label: "About" },
  { href: "/program", label: "Program" },
  { href: "/connect", label: "Connect" },
];

function NavLinks({ closeMenu }) {
  return navLinks.map(({ href, label, icon }) => (
    <motion.div
      key={href}
      whileHover={{ scale: 1.1, x: 5 }}
      transition={{ type: "spring", stiffness: 300 }}
    >
      <Link
        href={href}
        className="flex items-center space-x-2 text-white hover:text-sky-300 transition font-medium"
        onClick={closeMenu}
      >
        {icon} <span>{label}</span>
      </Link>
    </motion.div>
  ));
}

export default function Header() {
  const [isOpen, setIsOpen] = useState(false);

  useEffect(() => {
    // Prevent body scroll when sidebar is open
    if (isOpen) {
      document.body.classList.add("overflow-hidden");
    } else {
      document.body.classList.remove("overflow-hidden");
    }
  }, [isOpen]);

  return (
    <header className="fixed w-full top-0 z-50 backdrop-blur-md bg-sky-600/80 shadow-md border-b border-sky-700">
      <div className="mx-auto flex max-w-screen-xl items-center justify-between px-6 py-3">
        {/* Logo with Animation */}
        <motion.div
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.6 }}
        >
          <Link href="/">
            <Image
              src={ilogo}
              alt="ISKCON RAU Logo"
              width={60}
              height={60}
              className="cursor-pointer"
            />
          </Link>
        </motion.div>

        {/* Mobile Menu Button */}
        <motion.button
          onClick={() => setIsOpen(!isOpen)}
          className="md:hidden text-white focus:outline-none"
          whileTap={{ scale: 0.9 }}
          aria-label="Toggle navigation menu"
          aria-expanded={isOpen}
        >
          {isOpen ? <IoClose size={30} /> : <IoReorderThree size={30} />}
        </motion.button>

        {/* Desktop Nav */}
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
      </div>

      {/* Fixed Full-Screen Sidebar */}
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
              {/* Close Button */}
              <button
                onClick={() => setIsOpen(false)}
                className="absolute top-5 right-5 text-white focus:outline-none"
                aria-label="Close menu"
              >
                <IoClose size={30} />
              </button>

              {/* Logo with Animation */}
              <motion.div
                className="flex justify-center pt-12"
                initial={{ opacity: 1, scale: 0.8 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.5 }}
              >
                <Image
                  src={ilogo}
                  alt="ISKCON RAU Logo"
                  width={80}
                  height={80}
                  className="cursor-pointer"
                />
              </motion.div>

              {/* Mobile Nav Links */}
              <nav className="mt-12 flex flex-col space-y-6">
                <NavLinks closeMenu={() => setIsOpen(false)} />
              </nav>

              {/* Donate Button */}
              <motion.div whileHover={{ scale: 1.1 }} className="mt-10 text-center">
                <Link
                  href="/donate"
                  className="bg-orange-500 text-white px-5 py-2 rounded-lg font-semibold shadow-md hover:bg-orange-600 transition"
                  onClick={() => setIsOpen(false)}
                >
                  Donate
                </Link>
              </motion.div>
            </motion.div>

            {/* Overlay with Fade Effect */}
            <motion.div
              className="fixed inset-0 bg-black bg-opacity-50 z-40 transition-opacity duration-300 opacity-100"
              onClick={() => setIsOpen(false)}
            />
          </>
        )}
      </AnimatePresence>
    </header>
  );
}
