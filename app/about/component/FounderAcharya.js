"use client";

import spWalkingImage from "@/public/SP_Walking2.jpg"; 

export default function FounderAcharya() {
  // Function to handle the redirect
  const handleRedirect = () => {
    window.location.href = "http://www.prabhupada.com/";
  };

  // Example text for the founder section
  const founderText = `
   Within the final twenty years of his life Srila Prabhupada translated over sixty volumes of classic Vedic scriptures (such as the Bhagavad Gita and the Srimad Bhagavatam) into the English language. For their authority, depth, and clarity, his books have won praise from professors at universities like Harvard and Oxford, and his Bhagavad-Gita As It Is was published by Macmillan Publishers in 1968 and the unabridged edition in 1972, and is now available in over sixty languages around the world. Other books by Srila Prabhupada are available in over eighty different languages. Over 500 million books of his have been distributed to date.
Srila Prabhupada established The Bhaktivedanta Book Trust (BBT) in 1972 to publish his works. The BBT has also published his multi-volume biography, Srila Prabhupada-Lilamrta, that, according to acclaimed scholar of religion Larry Shinn, will “certainly be one of the most complete records of the life and work of any modern religious figure”. Srila Prabhupada reminded his devotees before his passing that he would live forever in his books, and through them would remain present as a spiritual master or guru. He had instilled in his followers an understanding of the importance of writing and publishing not only with regard to his works, but also their own initiatives.
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
