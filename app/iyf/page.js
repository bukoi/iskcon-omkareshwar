"use client";

import Image from "next/image";
import { useState } from "react";
import { FaUsers, FaLightbulb, FaBalanceScale, FaChalkboardTeacher } from "react-icons/fa";
import ivf from "@/public/ivf.jpg";

const IskconYouthForum = () => {
  const [showMore, setShowMore] = useState(false);

  return (
    <div className="bg-white mt-24">
      {/* Hero Section */}
      <div className="relative w-full h-96">
        <Image
          src={ivf} // Dummy image
          alt="ISKCON Youth Forum"
          layout="fill"
          objectFit="cover"
          className="brightness-75"
        />
        <div className="absolute inset-0 flex flex-col items-center justify-center text-white text-center px-6">
          <h1 className="text-4xl font-bold mb-3 text-orange-500">ISKCON Youth Forum</h1>
          <p className="text-lg max-w-2xl">
            A transformative experience for young minds, empowering them with knowledge, wisdom, and self-discovery.
          </p>
          <a href="https://chat.whatsapp.com/FCiC4k39NapJrP6n6ug46p" className="mt-4 px-6 py-2 bg-orange-500 hover:bg-orange-600 text-white rounded-lg transition font-semibold shadow-md">
            Join the Forum
          </a>
        </div>
      </div>

      {/* Content Section */}
      <div className="max-w-5xl mx-auto px-6 py-12">
        <div className="grid md:grid-cols-2 gap-8 items-center">
          {/* Image Section */}
          <div className="relative">
            <Image
              src={ivf} // Dummy image
              alt="ISKCON Youth Forum Discussion"
              width={500}
              height={400}
              className="rounded-lg shadow-md"
            />
          </div>

          {/* Text Section */}
          <div>
            <h2 className="text-3xl font-semibold text-sky-700 mb-4">Empowering the Youth</h2>
            <p className="text-gray-700 text-lg leading-relaxed">
              The ISKCON Youth Forum is dedicated to shaping young minds by instilling wisdom, self-awareness, and motivation.
            </p>
            <button
              onClick={() => setShowMore(!showMore)}
              className="mt-4 text-sky-600 hover:underline font-medium"
            >
              {showMore ? "Read Less" : "Read More"}
            </button>
            {showMore && (
              <p className="mt-3 text-gray-700">
                The forum provides self-development programs, engaging activities, and discussions based on Vedic wisdom.
              </p>
            )}
          </div>
        </div>

        {/* Goals Section */}
        <div className="mt-12">
          <h2 className="text-3xl font-bold text-sky-700 mb-6 text-center">Our Goals</h2>
          <div className="grid md:grid-cols-2 gap-6">
            {/* Goal Cards */}
            <div className="p-6 bg-sky-700 text-white shadow-md rounded-lg flex items-center gap-4">
              <FaUsers className="text-orange-400 text-3xl" />
              <p>Gaining happiness and self-fulfillment in life.</p>
            </div>
            <div className="p-6 bg-sky-700 text-white shadow-md rounded-lg flex items-center gap-4">
              <FaLightbulb className="text-orange-400 text-3xl" />
              <p>Discovering internal potential: motivation, concentration, confidence.</p>
            </div>
            <div className="p-6 bg-sky-700 text-white shadow-md rounded-lg flex items-center gap-4">
              <FaBalanceScale className="text-orange-400 text-3xl" />
              <p>Balancing personal and professional life with spiritual values.</p>
            </div>
            <div className="p-6 bg-sky-700 text-white shadow-md rounded-lg flex items-center gap-4">
              <FaChalkboardTeacher className="text-orange-400 text-3xl" />
              <p>Providing lectures on Vedic intelligence by expert faculty.</p>
            </div>
            <div className="text-center mt-12">
          <h2 className="text-2xl font-bold mb-3">Have Questions?</h2>
          <p className="text-gray-600">Reach out to us for more details.</p>
          <a href="tel:+917733004108" className="mt-3 inline-block text-lg font-semibold text-yellow-600">
            📞 +91 7733004108
          </a>
        </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default IskconYouthForum;
