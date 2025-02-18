"use client";

import spWalkingImage from "@/public/SP_Walking2.jpg"; 

export default function FounderAcharya() {
  // Function to handle the redirect
  const handleRedirect = () => {
    window.location.href = "http://www.prabhupada.com/";
  };

  // Example text for the founder section
  const founderText = `
    His Divine Grace A.C. Bhaktivedanta Swami Prabhupada (1896–1977) is the founder-acharya of
    the International Society for Krishna Consciousness (ISKCON). He is especially respected
    as the world's most prominent contemporary authority on bhakti-yoga, devotional service
    to the Supreme Person, Sri Krishna, as taught by the ancient Vedic writings of India.

    Lorem ipsum dolor sit amet, consectetur adipiscing elit. Praesent maximus augue in leo 
    fermentum, non cursus dui vulputate. Quisque blandit lacinia lectus, eu dignissim enim 
    convallis non. Proin feugiat orci vel purus tincidunt, vitae feugiat sapien placerat. 
    Vivamus vehicula lectus quis neque imperdiet fermentum. Vestibulum ante ipsum primis in 
    faucibus orci luctus et ultrices posuere cubilia curae; Donec auctor, nisi a euismod 
    facilisis, libero massa varius nunc, a ullamcorper velit risus et orci.
  `;

  return (
    <section
      className="relative bg-cover bg-center bg-no-repeat py-16 text-white font-sans pt-4"
      style={{
        backgroundImage: `url(${spWalkingImage.src})`,
        minHeight: "80vh", // Adjust as needed
      }}
    >
      {/* Dark overlay for better text contrast */}
      <div className="absolute inset-0 bg-black bg-opacity-30 z-0" />

      <div className="relative z-10 container mx-auto px-6">
        {/* Text Column on the right side */}
        <div className="flex flex-col items-start md:items-end">
          {/* Section Title */}
          <h2 className="text-3xl md:text-4xl font-bold uppercase mb-4 tracking-wide">
            Founder Acharya
          </h2>
          {/* Founder Name */}
          <h3 className="text-2xl md:text-3xl font-semibold mb-4 tracking-normal">
            Srila Prabhupada
          </h3>
          {/* Founder Description */}
          <p className="max-w-2xl mb-6 text-justify text-lg leading-relaxed">
            {founderText}
          </p>
          {/* Button to redirect user */}
          <button
            className="px-5 py-2 bg-orange-500 hover:bg-orange-600 text-white font-semibold rounded-lg shadow-md transition text-base tracking-normal"
            onClick={handleRedirect}
          >
            Continue Reading
          </button>
        </div>
      </div>
    </section>
  );
}
