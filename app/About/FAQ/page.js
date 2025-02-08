"use client";

import React from "react";

const faqData = [
  {
    question:
      "Is it possible for a person living an ordinary everyday life to develop Krishna consciousness even without these external signs?",
    answer:
      "Saffron robes and shaven head with tilak are not the most important things, even though they create supportive mental disposition, just as well-dressed soldier has a good feeling that he is a real warrior. Does it mean that he cannot fight without the uniform? No. Also God consciousness knows no obstacles - it can be revived under any conditions - but certain conditions are beneficial in this regard. Therefore certain lifestyle, dress, diet and so on are prescribed. These things help in developing Krishna consciousness but they are not entirely necessary. Thus even person living an ordinary life can study and develop Krishna consciousness.",
  },
  {
    question: "How are people recruited into your movement?",
    answer:
      "We welcome anyone interested in learning about Krishna consciousness. Our approach is based on education and voluntary participation through various programs, classes, and community activities.",
  },
  {
    question: "I feel that my belief in god is very shallow. How do I find out there is god?",
    answer:
      "Developing faith is a gradual process that comes through spiritual practice, study of scriptures, and association with devotees. We encourage sincere questioning and exploration of spiritual knowledge.",
  },
  {
    question:
      "If God is so wonderful, why was I sent here to suffer? If He can do anything, can't He get me out of here?",
    answer:
      "This profound question relates to karma and free will. While God is all-powerful, He respects our free will and the natural laws of karma. Our current situation is a result of our past actions, but through spiritual practice we can transcend suffering.",
  },
];

export default function FAQPage() {
  // Removed type annotation for plain JavaScript
  const [openItem, setOpenItem] = React.useState(null);

  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <div
        className="relative h-[300px] flex items-center justify-center bg-cover bg-center"
        style={{
          backgroundImage: `url('https://hebbkx1anhila5yf.public.blob.vercel-storage.com/bannrenew.jpg-HqGJuISkqgB4V6GXE6YbCZXa5V9LkI.jpeg')`,
        }}
      >
        <div className="absolute inset-0 bg-black/40" />
        <div className="relative z-10 text-center text-white">
          <h1 className="text-4xl font-bold mb-4">Frequently Asked Questions (FAQ)</h1>
          <div className="flex items-center justify-center gap-2 text-sm">
            <a href="/" className="hover:underline">
              Home
            </a>
            {/* Inline ChevronRight SVG */}
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-4 w-4"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
            </svg>
            <span>Frequently Asked Questions (FAQ)</span>
          </div>
        </div>
      </div>

      {/* FAQ Section */}
      <div className="max-w-3xl mx-auto px-4 py-12">
        <div className="space-y-4">
          {faqData.map((item, index) => (
            <div
              key={index}
              onClick={() => setOpenItem(openItem === index ? null : index)}
              className={
                "cursor-pointer rounded-lg border transition-all duration-200 " +
                (openItem === index ? "bg-gray-50 border-l-4 border-l-red-600" : "hover:border-gray-300")
              }
            >
              <div className="p-6">
                <h3 className={`font-medium ${openItem === index ? "mb-4" : ""}`}>
                  {item.question}
                </h3>
                {openItem === index && <p className="text-gray-700">{item.answer}</p>}
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
