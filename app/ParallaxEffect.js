"use client";
import { useState, useEffect } from "react";
import Image from "next/image";
import Iskconguru from "@/public/iskconguru.jpg";

export default function ParallaxEffect() {
  const [overlayOpacity, setOverlayOpacity] = useState("bg-orange-100/20");

  useEffect(() => {
    const handleScroll = () => {
      const scrollPosition = window.scrollY;
      const imageHeight = window.innerHeight * 0.5; // 50% of viewport height
      if (scrollPosition > imageHeight * 0.5) {
        setOverlayOpacity("bg-orange-200/20");
      } else {
        setOverlayOpacity("bg-orange-500/40");
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <div className="relative h-[50vh] w-full overflow-hidden scrollbar-hide">
      {/* Background Image - Responsive Parallax Effect */}
      <div 
        className="absolute inset-0 w-full h-full bg-cover bg-center md:bg-fixed "
        style={{ backgroundImage: `url(${Iskconguru.src})` }}
      ></div>
      
      {/* Dynamic Red Overlay */}
      <div className={`absolute inset-0 w-full h-full transition-all duration-300 ${overlayOpacity}`}></div>
    </div>
  );
}
