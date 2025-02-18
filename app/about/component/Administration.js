"use client";
import { useState } from "react";
import Image from "next/image";
import maharj from "@/public/Mahaman.png";
import senior from "@/public/Praneshwar.png";

const admins = [
  {
    name: "H G Mahaman Prabhuji",
    image: maharj,
    bio: `HG Mahaman Prabhuji is a senior disciple of Srila Prabhupada. He serves as a Zonal Secretary for ISKCON across several Indian states.

Lorem ipsum dolor sit amet, consectetur adipiscing elit. Maecenas tristique sapien ac felis tempus, sed efficitur diam mattis. Cras dignissim vestibulum libero, ac congue lorem volutpat et. Nulla pretium varius lorem, sit amet mollis ante luctus eget. Donec maximus consequat elementum.
    `,
  },
  {
    name: "H G Praneshwar Prabhu",
    image: senior,
    bio: `Praneshwar Das serves ISKCON Indore as Vice President. He has led several major preaching projects throughout Madhya Pradesh.

Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas. Suspendisse mollis nisi in ligula vehicula, quis fringilla enim gravida. Vivamus rhoncus massa sem, ac congue justo ornare a. Aliquam erat volutpat.
    `,
  },
];

export default function AdminExpandableCards() {
  const [expandedIndex, setExpandedIndex] = useState(null);

  return (
    <section className="bg-white py-10 pt-4">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl font-bold mb-6 text-sky-900 text-center">
          Administration
        </h2>
        {/* Cards Layout */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {admins.map((admin, idx) => (
            <div
              key={idx}
              className="bg-white shadow-md rounded-lg p-6 border border-gray-200 transition-all"
            >
              {/* Image + Name below image */}
              <div className="flex flex-col items-center">
                {/* Larger image in a container */}
                <div className="relative w-56 h-56 md:w-72 md:h-72 mb-4">
                  <Image
                    src={admin.image}
                    alt={admin.name}
                    fill
                    className="object-cover rounded-full shadow-md"
                  />
                </div>
                <h3 className="text-xl md:text-2xl font-semibold text-sky-800 text-center">
                  {admin.name}
                </h3>
              </div>

              {/* Bio with Expand Feature */}
              <div className="mt-4">
                <p
                  className={`text-gray-700 transition-all duration-500 ${
                    expandedIndex === idx ? "block" : "line-clamp-2"
                  }`}
                >
                  {admin.bio}
                </p>
                <button
                  className="mt-2 text-sky-600 font-semibold"
                  onClick={() =>
                    setExpandedIndex(expandedIndex === idx ? null : idx)
                  }
                >
                  {expandedIndex === idx ? "Read Less" : "Read More"}
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
