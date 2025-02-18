"use client";

import Image from "next/image";
import satsangImage from "@/public/homesatsang.jpg"; // Update with actual image path

const HomeSatsang = () => {
  return (
    <div className="bg-white py-12 mt-24">
      <div className="max-w-6xl mx-auto px-6 grid md:grid-cols-2 gap-10 items-center">
        {/* Image Section */}
        <div className="relative w-full h-80 md:h-96">
          <Image
            src={satsangImage}
            alt="Home Satsang"
            layout="fill"
            objectFit="cover"
            className="rounded-lg shadow-md"
          />
        </div>

        {/* Content Section */}
        <div>
          <h2 className="text-4xl font-bold text-orange-500 border-b-4 border-orange-500 inline-block pb-2">
            Home Satsang
          </h2>
          <p className="text-gray-700 text-lg leading-relaxed mt-4">
            Home Satsang is a **weekly evening gathering** in various localities across Pune, offering an opportunity to experience spirituality in a warm and welcoming environment. The program includes **kirtans, discourses, meditation sessions**, and concludes with **delicious prasadam**.
          </p>

          {/* Highlights */}
          <div className="mt-6 space-y-4">
            <div className="p-4 bg-sky-700 text-white rounded-lg shadow-md">
              <h3 className="text-xl font-semibold">✨ Joy of Krishna Consciousness</h3>
              <p className="text-sm">Immerse yourself in the bliss of Krishna-centered communities through interactive spiritual discussions and engaging kirtans.</p>
            </div>

            <div className="p-4 bg-sky-700 text-white rounded-lg shadow-md">
              <h3 className="text-xl font-semibold">📖 Practical Application</h3>
              <p className="text-sm">Learn how to integrate Bhagavad Gita’s timeless wisdom into daily life and make spiritually conscious decisions.</p>
            </div>

            <div className="p-4 bg-sky-700 text-white rounded-lg shadow-md">
              <h3 className="text-xl font-semibold">📚 Deep Learning & Courses</h3>
              <p className="text-sm">Enhance your knowledge through ISKCON's **VOICE** courses like Discover Yourself (DYS), Bhakti Shastra, Bhakti Vaibhav, and more.</p>
            </div>
          </div>

          {/* Join Button */}
          <div className="mt-6">
            <button className="px-6 py-3 bg-orange-500 hover:bg-orange-600 text-white font-semibold rounded-lg shadow-md transition">
              Join a Satsang Near You
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default HomeSatsang;
