"use client";
import Image from "next/image";
import { FaCalendarDays } from "react-icons/fa6";

export default function EventCard({
  imageSrc,
  date,
  title,
  children,
  width = "w-80",
  height = "h-auto",
}) {
  return (
    <div
      className={`relative mb-12 mt-6 flex p-5 pb-16 flex-col bg-white shadow-lg rounded-lg overflow-hidden transition-all duration-300 hover:-translate-y-2 hover:shadow-2xl hover:shadow-gray-800 md:w-96 md:h-auto ${width} ${height} m-6`}
    >
      {/* Event Image with Zoom on Hover */}
      <div className="w-full overflow-hidden">
        <img
          src={typeof imageSrc === "string" ? imageSrc : imageSrc.src}
          alt="Event Image"
          className="w-full transition-transform duration-300 hover:scale-110"
          loading="lazy"
        />
      </div>

      {/* Event Details */}
      <div className="p-4 flex flex-col flex-grow text-left">
        <div className="flex flex-row items-center gap-4">
          {/* Changed icon color from red to orange */}
          <FaCalendarDays className="text-orange-500" />
          <p className="text-gray-600 mt-2">{date}</p>
          {children}
        </div>
        <h3 className="text-lg font-semibold mt-1 pt-2 transition cursor-pointer hover:text-orange-600 active:text-orange-600 focus:text-orange-600 tracking-tight leading-snug">
          {title}
        </h3>
      </div>

      <div className="mt-4 relative flex items-center overflow-hidden rounded-full">
        {/* Clickable Wrapper for "Read more" and Arrow */}
        <span
          className="relative flex items-center group cursor-pointer rounded-full overflow-hidden"
          onClick={() => console.log("Button clicked")}
        >
          {/* Orange Background Effect - Expands Only to Cover "Read more" */}
          <span className="absolute right-0 top-0 h-full w-0 bg-orange-500 transition-all duration-500 ease-in-out group-hover:w-full pointer-events-none"></span>

          {/* Button Text - Stays Black Initially & Turns White on Hover */}
          <span className="relative px-5 py-2 text-black font-bold transition-all duration-300 group-hover:text-white z-10">
            Read more
          </span>

          {/* Orange Arrow Section - Stays Fixed & Unaffected */}
          <span className="relative px-5 py-2 bg-orange-500 text-white border-r-full z-10">
            ➡
          </span>
        </span>
      </div>
    </div>
  );
}
