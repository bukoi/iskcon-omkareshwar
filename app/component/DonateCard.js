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
      {/* Card Image */}
      <div className="relative w-full h-48 overflow-hidden">
        <Image
          src={typeof imageSrc === "string" ? imageSrc : imageSrc.src}
          alt="Donate Card Image"
          fill
          className="object-cover transition-transform duration-300 hover:scale-110"
        />
      </div>

      {/* Card Details */}
      <div className="p-6 text-center">
        <h3 className="text-lg font-semibold text-gray-900">{title}</h3>
      </div>

      {/* Donate Button */}
      <div className="pb-6 flex justify-center">
        <button
          className="bg-orange-500 text-white font-semibold px-6 py-3 rounded-md transition duration-300 hover:bg-orange-600"
          onClick={() => console.log("Donate Now Clicked")}
        >
          {buttonText}
        </button>
      </div>
    </div>
  );
}
