"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import yashodakrishna from "@/public/yashodakrishna.jpg";

export default function HareKrishnaMovement() {
  const [isModalOpen, setIsModalOpen] = useState(false);

  const modalDescription = `
    The International Society of Krishna Consciousness (ISKCON) is Bhakti Yoga for today’s age. 
    A global spiritual movement, a mission to make the world aware of the Supreme Lord, Krishna, 
    and to foster a deep devotion towards Him. ISKCON gently guides you to be a devotee and for 
    this divine devotion to, gradually, come to your essence even as you continue to be in the 
    world and discharge your worldly duties.

    The Hare Krishna Movement does not ask of you to renounce anything rather it asks that you 
    add Krishna to your life and then it be Krishna Conscious. The charm lies in the ease of 
    the practise; continue to be in the world even as you cultivate a deep devotion for Krishna. 
    Chant His name as often as you can, hear of His accounts and sing His glories.

    Hare Krishna devotees chant God’s names in the form of the Mahamantra, “Hare Krishna, Hare Krishna, 
    Krishna Krishna Hare Hare, Hare Rama Hare Rama, Rama Rama, Hare Hare.” The Srimad Bhagavatam states 
    that the friend of the devotees, purifies the hearts of those who take His name with faith in their 
    hearts and erases all evil tendencies.

    ISKCON is widely acknowledged as the fastest-growing global religious community in the world. From 1966, 
    when His Divine Grace A.C. Bhaktivedanta Swami Prabhupada opened his first temple in New York City, today 
    the movement has grown to a global membership of 600 temples, numerous farm communities, restaurants and 
    educational institutes.
  `;

  return (
    <>
      {/* Parent Section (relative to contain absolute children) */}
      <section className="relative bg-white py-16 font-serif pt-4">
        <div className="container mx-auto px-6 flex flex-col md:flex-row items-center gap-12">
          {/* Left Column (Text) */}
          <div className="md:w-1/2 text-center md:text-left">
            <h2 className="text-4xl md:text-5xl font-bold uppercase text-sky-900 mb-4">
              The Hare Krishna Movement
            </h2>
            <p className="text-slate-700 mt-4 leading-loose text-justify">
              The International Society for Krishna Consciousness (ISKCON) is Bhakti Yoga for today’s age. 
              A global spiritual movement, its mission is to share the universal message of the Supreme Lord, 
              Krishna, and foster a deep devotion towards Him. ISKCON gently guides you to explore the divine path, 
              discover your true essence, and remain engaged in your worldly duties, all while nurturing Krishna Consciousness.
            </p>
            <p className="text-slate-700 mt-4 leading-loose text-justify">
              The Hare Krishna movement encourages you to add Krishna to your life, without demanding renunciation 
              of your worldly responsibilities. You can continue in your current environment while cultivating devotion 
              through chanting the Lord’s name, hearing His glories, and singing His praises.
            </p>
            <button
              className="mt-8 px-8 py-3 bg-gradient-to-r from-orange-500 to-orange-600 text-white font-semibold rounded-full shadow-md hover:from-orange-600 hover:to-orange-700 transition"
              onClick={() => setIsModalOpen(true)}
            >
              Continue Reading
            </button>
          </div>

          {/* Right Column (Image with Decorative Shape) */}
          <div className="relative md:w-1/2">
            <div className="absolute -top-4 -left-4 w-full h-full bg-orange-100 rounded-xl -z-10" />
            <img
              src={yashodakrishna.src}
              alt="Hare Krishna Movement"
              className="rounded-xl w-full border-10 border-orange-500 h-auto p-2 shadow-[0_10px_15px_rgba(14,165,233,0.3)]"
            />
          </div>
        </div>

        {/* Modal Component rendered inside the same section */}
        <AnimatePresence>
          {isModalOpen && (
            <>
              {/* Overlay */}
              <motion.div
                className="absolute inset-0 bg-black bg-opacity-50 z-50 w-screen h-screen"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
                transition={{ duration: 0.3 }}
                onClick={() => setIsModalOpen(false)}
              />
              {/* Modal Container */}
              <motion.div
                className="absolute inset-0 z-50 flex items-center justify-center p-4"
                initial={{ opacity: 0, scale: 0.8 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.8 }}
                transition={{ duration: 0.3 }}
                onClick={() => setIsModalOpen(false)}
              >
                <div
                  className="relative bg-white rounded-lg shadow-xl w-full max-w-3xl p-6 max-h-[600px] overflow-y-auto"
                  onClick={(e) => e.stopPropagation()}
                >
                  <button
                    onClick={() => setIsModalOpen(false)}
                    className="absolute top-3 right-3 text-gray-600 hover:text-gray-900 text-xl font-bold"
                  >
                    &times;
                  </button>
                  <h3 className="text-2xl font-bold mb-4 text-sky-900">
                    More About the Hare Krishna Movement
                  </h3>
                  <p className="text-gray-700 leading-relaxed text-justify text-lg">
                    {modalDescription}
                  </p>
                  <div className="mt-6 flex justify-end">
                    <button
                      onClick={() => setIsModalOpen(false)}
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
    </>
  );
}
