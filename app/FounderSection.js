import Image from 'next/image';
import mainimg from "@/public/founder.png";
import backimg from "@/public/Background.jpeg";

export default function FounderSection() {
  return (
    <div className="relative flex flex-col lg:flex-row items-center justify-center px-6 md:px-20 py-12 gap-10 w-full">
      {/* Background Pattern using Grid with No Gaps */}
      <div className="absolute inset-0 w-full h-full z-0 grid grid-cols-3 grid-rows-3">
            <Image
              src={backimg}
              alt="Background Pattern"
              layout="fill"
              objectFit="cover"            />
          </div>
      <div className="absolute inset-0 bg-black/10 z-0"></div>
      
      {/* Left Text Section */}
      <div className="relative max-w-2xl text-left z-10">
        <h2 className="text-red-700 text-3xl md:text-4xl font-bold mb-3">OUR FOUNDER</h2>
        <h3 className="text-black text-2xl md:text-3xl font-extrabold">
          HIS DIVINE GRACE A.C. BHAKTIVEDANTA SWAMI PRABHUPADA
        </h3>
        <h4 className="text-lg font-bold mt-3">
          FOUNDER-ACHARYA : INTERNATIONAL SOCIETY FOR KRISHNA CONSCIOUSNESS
        </h4>
        <p className="text-gray-700 text-base leading-relaxed mt-4">
          Srila Prabhupada (1896-1977), was an extraordinary personality who dedicated his life for 
          teaching the world about Krishna consciousness, ancient India's most noble message of spiritual 
          wisdom. In 1965, at the age of 69, he sailed from India to New York to share Lord Krishna’s 
          message, on the order of his spiritual master Srila Bhaktisiddhanta Saraswati Thakura, representing 
          a line of teachers dating back to Lord Krishna Himself. ISKCON RAU was envisioned and nurtured under 
          the able guidance of HG Mahaman Prabhu Ji, one of Srila Prabhupada’s dear disciples.
        </p>

        {/* Button */}
        <button className="mt-6 px-6 py-2 border-2 border-red-700 text-red-700 rounded-full 
                           hover:bg-red-800 hover:text-orange-400 transition duration-300">
          READ MORE
        </button>
      </div>

      {/* Right Image Section */}
      <div className="relative w-full max-w-md mt-10 lg:mt-0 z-10">
        <div className="relative">
          {/* Founder Image Placeholder */}
          <Image
            src={mainimg}
            alt="Founder"
            width={400}
            height={400}
          />
        </div>
      </div>
    </div>
  );
}
