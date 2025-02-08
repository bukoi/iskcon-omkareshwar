"use client";
import Image from "next/image";

export default function DonateCard({
  imageSrc,
  title,
  buttonText = "Donate Now",
  width = "w-80",
  height = "h-auto",
}) {
  return (
    <div
      className={`relative flex flex-col bg-white shadow-lg rounded-lg overflow-hidden transition-all duration-300 hover:-translate-y-2 hover:shadow-2xl ${width} ${height} m-6`}
    >
      {/* Event Image */}
      <div className="w-full h-48 overflow-hidden">
        <Image
          src={imageSrc}
          alt="Event Image"
          className="w-full h-full object-cover transition-transform duration-300 hover:scale-110"
        />
      </div>

      {/* Event Details */}
      <div className="p-6 text-center">
        <h3 className="text-lg font-semibold text-gray-900">
          {title}
        </h3>
      </div>

      {/* Donate Button */}
      <div className="pb-6 flex justify-center">
        <button
          className="bg-red-700 text-white font-semibold px-6 py-3 rounded-md transition duration-300 hover:bg-red-800"
          onClick={() => console.log("Donate Now Clicked")}
        >
          {buttonText}
        </button>
      </div>
    </div>
  );
}
