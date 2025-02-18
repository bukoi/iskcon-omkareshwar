import Image from "next/image";
import mainimg from "@/public/founder_orange.png";
import backimg from "@/public/background.jpeg";
import Readmore from "@/app/component/FounderReadmore";
export default function FounderSection() {
  
  return (
    <section
      className="relative flex flex-col lg:flex-row items-center justify-center px-6 md:px-20 py-24 w-full bg-cover bg-center"
      style={{
        backgroundImage: `url(${backimg.src})`,
        backgroundColor: "#F5E6C4",
        backgroundBlendMode: "overlay",
      }}
    >
      {/* Left Section - Founder Details */}
      <div className="relative z-10 max-w-2xl text-center lg:text-left flex flex-col items-start">
        <h2 className="text-orange-500 text-5xl md:text-6xl font-extrabold mb-4">
          Our Founder
        </h2>
        <h3 className="text-gray-900 text-3xl md:text-4xl font-bold leading-tight">
          His Divine Grace A.C. Bhaktivedanta Swami Prabhupada
        </h3>
        <h4 className="text-lg font-semibold text-orange-600 mt-3">
          Founder-Acharya: International Society for Krishna Consciousness
        </h4>
        <p className="text-gray-800 text-lg leading-relaxed mt-4">
          Srila Prabhupada (1896-1977) was an extraordinary personality who dedicated his
          life to spreading Krishna consciousness worldwide. In 1965, at the age of 69,
          he embarked on a mission from India to the U.S. to share Lord Krishna’s message,
          fulfilling the vision of his spiritual master. Under his guidance, ISKCON Omkareshwar
          was nurtured by HG Mahaman Prabhu Ji, one of his dearest disciples.
        </p>
        
        {/* Call to Action Button */}
        <div className="mt-6">
          <Readmore/>
        </div>
      </div>

      {/* Right Section - Image */}
      <div className="relative w-full max-w-lg mt-10 lg:mt-0 z-10 flex justify-center">
        <div className="relative w-72 h-72 md:w-96 md:h-96 flex items-center justify-center bg-white p-4 rounded-full shadow-2xl">
          <Image
            src={mainimg}
            alt="Founder"
            width={350}
            height={350}
            className="rounded-full border-8 border-orange-600 shadow-xl"
          />
        </div>
      </div>
    </section>
  );
}
