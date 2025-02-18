"use client";

import Image from "next/image";
import annadanamImage from "@/public/annadanam.jpg"; // Update with actual image path

const Annadanam = () => {
  return (
    <div className="bg-white py-12 mt-24">
      <div className="max-w-6xl mx-auto px-6 grid md:grid-cols-2 gap-10 items-center">
        {/* Image Section */}
        <div className="relative w-full h-80 md:h-96">
          <Image
            src={annadanamImage}
            alt="Annadanam Food for Life"
            layout="fill"
            objectFit="cover"
            className="rounded-lg shadow-md"
          />
        </div>

        {/* Content Section */}
        <div>
          <h2 className="text-4xl font-bold text-orange-500 border-b-4 border-orange-500 inline-block pb-2">
            Annadanam: Food For Life
          </h2>
          <p className="text-gray-700 text-lg leading-relaxed mt-4">
            In the **21st century**, malnutrition still affects **30% of India’s population**. 
            Hunger is not just a lack of food, but a barrier to **human dignity and progress**. 
            Inspired by Srila Prabhupada, ISKCON **Rau’s Food Relief Foundation** is committed 
            to eliminating **hunger and malnutrition** through its **"Food for Life"** program.
          </p>

          {/* Highlights Section */}
          <div className="mt-6 space-y-4">
            <div className="p-4 bg-sky-700 text-white rounded-lg shadow-md">
              <h3 className="text-xl font-semibold">🥗 Serving with Compassion</h3>
              <p className="text-sm">
                We distribute **nutritious vegetarian meals** prepared by temple devotees, 
                offered to **Lord Krishna** before serving.
              </p>
            </div>

            <div className="p-4 bg-sky-700 text-white rounded-lg shadow-md">
              <h3 className="text-xl font-semibold">👥 Reaching Thousands Daily</h3>
              <p className="text-sm">
                Every day, we serve **7,000+ meals**, and during **festivals & Sundays**, 
                we provide prasadam to **10,000+ people**.
              </p>
            </div>

            <div className="p-4 bg-sky-700 text-white rounded-lg shadow-md">
              <h3 className="text-xl font-semibold">🏡 Extending to Orphanages & Elderly Homes</h3>
              <p className="text-sm">
                Our volunteers distribute food to **orphans, the elderly, and the underprivileged**, 
                ensuring **no one goes hungry**.
              </p>
            </div>
          </div>

          {/* CTA Buttons */}
          <div className="mt-6 flex gap-4">
            <button className="px-6 py-3 bg-orange-500 hover:bg-orange-600 text-white font-semibold rounded-lg shadow-md transition">
              Join Us
            </button>
            <button className="px-6 py-3 bg-sky-700 hover:bg-sky-800 text-white font-semibold rounded-lg shadow-md transition">
              Donate Now
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Annadanam;
