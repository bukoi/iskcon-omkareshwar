"use client";

import React, { useEffect, useRef } from "react";
import { motion, useAnimation } from "framer-motion";
import FooterColumn1 from "./FooterColumn1.server";
import FooterColumn2 from "./FooterColumn2.server";
import SocialIcons from "./SocialIcons.client";
import Back from "@/public/back.jpg";

export default function IskconFooter() {
  const controls = useAnimation();
  const footerRef = useRef(null);

  // Set up an Intersection Observer to trigger the animation when the footer is visible
  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          controls.start("visible");
        }
      },
      { threshold: 0.5 } // Adjust this threshold as needed
    );

    if (footerRef.current) {
      observer.observe(footerRef.current);
    }

    return () => {
      if (footerRef.current) {
        observer.unobserve(footerRef.current);
      }
    };
  }, [controls]);

  // Define animation variants for the footer and its elements
  const variants = {
    hidden: { opacity: 0, y: 30 },
    visible: { opacity: 1, y: 0 },
  };

  return (
    <motion.footer
      ref={footerRef}
      initial="hidden"
      animate={controls}
      variants={variants}
      transition={{ duration: 0.5 }}
      className="relative font-sans text-white min-h-[300px] bg-no-repeat bg-cover bg-center"
      style={{ backgroundImage: `url(${Back.src})` }}
    >
      {/* Sky-blue overlay */}
      <motion.div
        initial="hidden"
        animate={controls}
        variants={variants}
        transition={{ duration: 0.5, delay: 0.1 }}
        className="absolute inset-0 bg-sky-700/80"
      />

      {/* Footer content */}
      <div className="relative container mx-auto py-6 md:py-10 px-4 md:px-8">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {/* Column 1 */}
          <motion.div
            initial="hidden"
            animate={controls}
            variants={variants}
            transition={{ duration: 0.5, delay: 0.2 }}
          >
            <FooterColumn1 className="text-base tracking-normal" />
          </motion.div>
          {/* Column 2 */}
          <motion.div
            initial="hidden"
            animate={controls}
            variants={variants}
            transition={{ duration: 0.5, delay: 0.4 }}
          >
            <FooterColumn2 className="text-base tracking-normal" />
          </motion.div>
          {/* Column 3 (Social Icons) */}
          <motion.div
            initial="hidden"
            animate={controls}
            variants={variants}
            transition={{ duration: 0.5, delay: 0.6 }}
            className="space-y-4 text-center sm:text-left"
          >
            <SocialIcons className="text-lg" />
          </motion.div>
        </div>
      </div>
    </motion.footer>
  );
}
