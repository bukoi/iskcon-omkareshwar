"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import yash from "@/public/yashoda.jpg";

export default function OurPhilosophy() {
  const [isModalOpen, setIsModalOpen] = useState(false);

  // This is the text that appears in the modal
  const modalTitle = "More About Our Philosophy";
  const modalContent = `
Krishna consciousness is the awakened state in which you rediscover your inherent, blissful nature 
through a loving relationship with Krishna, the Supreme Person. This ancient philosophy integrates 
all forms of yoga, meditation, and devotional service, freeing you from the illusions of material existence.

By embracing devotional practices such as chanting, studying sacred texts, and serving Krishna, you not only 
ease material distress but also awaken an inner peace and joy that transforms your everyday life. As you shed 
the grip of maya, you step into a realm of lasting serenity and spiritual ecstasy—reconnecting with your true, 
divine identity.

Championed by great spiritual leaders, this timeless wisdom offers a universal path to convert worldly anxieties 
into profound inner fulfillment and joy.
`;

  // Handler to close the modal
  const onClose = () => setIsModalOpen(false);

  return (
    <div>
      {/* Parent Section */}
      <section className="relative bg-gradient-to-br from-white to-white py-16 font-sans">
        <div className="container mx-auto px-6 flex flex-col md:flex-row items-center gap-12">
          {/* Left Column (Image) */}
          <div className="relative md:w-1/2">
            <div className="absolute -top-4 -left-4 w-full h-full bg-orange-100 rounded-xl -z-10" />
            <img
              src={yash.src}
              alt="Our Philosophy"
              className="rounded-xl w-full border-10 border-orange-500 h-auto p-2 shadow-[0_10px_15px_rgba(14,165,233,0.3)]"
            />
          </div>

          {/* Right Column (Text) */}
          <div className="md:w-1/2 text-center md:text-left">
            <h2 className="text-4xl md:text-5xl font-bold uppercase text-sky-900 mb-4">
              Our Philosophy
            </h2>
            <p className="text-slate-700 mt-4 leading-relaxed text-justify">
              Krishna consciousness reveals your innate, blissful nature through devotion to Krishna, 
              the Supreme Person. This timeless path integrates all forms of yoga, meditation, and devotional service, 
              guiding you to reconnect with your divine identity and transform worldly anxieties into lasting serenity.
            </p>
            <p className="text-slate-700 mt-4 leading-relaxed text-justify">
              Embrace this ancient wisdom to discover true inner peace and joy, while living a balanced, 
              spiritually enriched life.
            </p>
            <button
              className="mt-8 px-8 py-3 bg-gradient-to-r from-orange-500 to-orange-600 text-white font-semibold rounded-full shadow-md hover:from-orange-600 hover:to-orange-700 transition"
              onClick={() => setIsModalOpen(true)}
            >
              Continue Reading
            </button>
          </div>
        </div>

        {/* Modal */}
        <AnimatePresence>
          {isModalOpen && (
            <>
              {/* Overlay covers the parent container */}
              <motion.div
                className="absolute inset-0 bg-black bg-opacity-50 z-50 w-screen h-screen"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
                transition={{ duration: 0.3 }}
                onClick={onClose}
              />
              {/* Modal container */}
              <motion.div
                className="absolute inset-0 z-50 flex items-center justify-center p-4"
                initial={{ opacity: 0, scale: 0.8 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.8 }}
                transition={{ duration: 0.3 }}
                onClick={onClose}
              >
                {/* Modal card */}
                <div
                  className="relative bg-white rounded-lg shadow-xl w-full max-w-3xl p-6 max-h-[600px] overflow-y-auto"
                  onClick={(e) => e.stopPropagation()}
                >
                  <button
                    onClick={onClose}
                    className="absolute top-3 right-3 text-gray-600 hover:text-gray-900 text-xl font-bold"
                  >
                    &times;
                  </button>
                  <h3 className="text-2xl font-bold mb-4 text-sky-900">
                    {modalTitle}
                  </h3>
                  <p className="text-gray-700 leading-relaxed text-justify text-lg whitespace-pre-line">
                    {modalContent}
                  </p>
                  <div className="mt-6 flex justify-end">
                    <button
                      onClick={onClose}
                      className="bg-orange-500 text-white font-semibold px-6 py-2 rounded-full hover:bg-orange-600 transition"
                    >
                      Close
                    </button>
                  </div>
                </div>
              </motion.div>
            </>
          )}
        </AnimatePresence>
      </section>
    </div>
  );
}
