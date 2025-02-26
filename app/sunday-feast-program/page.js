"use client";

import Image from "next/image";
import { useState } from "react";
import sundayfeastimg from "@/public/sundayfeast.jpg";

const SundayFeast = () => {
  const [showMore, setShowMore] = useState(false);

  return (
    <div className="bg-white mt-24">
      {/* Hero Section */}
      <div className="relative w-full h-96">
        <Image
          src={sundayfeastimg} 
          alt="Sunday Feast Celebration"
          layout="fill"
          objectFit="cover"
          className="brightness-75"
        />
        <div className="absolute inset-0 flex flex-col items-center justify-center text-white text-center px-6">
          <h1 className="text-4xl font-bold mb-3 text-orange-500">Sunday Feast Program</h1>
          <p className="text-lg max-w-2xl">
            Experience spirituality, joy, and delicious vegetarian food in a blissful environment.
          </p>
          <a
  className="mt-4 px-6 py-2 bg-orange-500 hover:bg-orange-600 text-white rounded-lg transition font-semibold shadow-md"
  href="https://chat.whatsapp.com/FCiC4k39NapJrP6n6ug46p"
>
  Join Us
</a>

        </div>
      </div>

      {/* Content Section */}
      <div className="max-w-5xl mx-auto px-6 py-12">
        {/* Three-column layout */}
        <div className="grid md:grid-cols-3 gap-8">
          <div className="p-6 bg-sky-700 text-white shadow-md rounded-lg text-center">
            <h2 className="text-xl font-semibold mb-2">History</h2>
            <p>Srila Prabhupada started this tradition, personally cooking and serving guests.</p>
          </div>
          <div className="p-6 bg-sky-700 text-white shadow-md rounded-lg text-center">
            <h2 className="text-xl font-semibold mb-2">Experience</h2>
            <p>Enjoy soulful kirtans, Bhagavad Gita discussions, and delicious meals.</p>
          </div>
          <div className="p-6 bg-sky-700 text-white shadow-md rounded-lg text-center">
            <h2 className="text-xl font-semibold mb-2">Join Us</h2>
            <p>Gather with loved ones and embrace a spiritually enriching environment.</p>
          </div>
        </div>

        {/* Read More Toggle */}
        <div className="mt-8">
          <p className="text-gray-700 text-lg leading-relaxed">
            {showMore
              ? "This event is celebrated in all ISKCON temples worldwide. At ISKCON Rau, we invite everyone to chant, listen to Bhagavad Gita, and enjoy a cultural experience."
              : "This weekly festival is celebrated with devotion and joy at ISKCON temples worldwide."}
          </p>
          <button
            onClick={() => setShowMore(!showMore)}
            className="mt-4 text-sky-600 hover:underline font-medium"
          >
            {showMore ? "Read Less" : "Read More"}
          </button>
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
  );
};

export default SundayFeast;
