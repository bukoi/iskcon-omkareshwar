import Image from 'next/image';
import icon1 from "@/public/icon1.png";
import icon2 from "@/public/icon2.png";
import icon3 from "@/public/icon3.png";

export default function InfoCards() {
  // Card data
  const cardsData = [
    {
      imageSrc: icon1,
      alt: 'Online Courses',
      title: 'Online Courses',
    },
    {
      imageSrc: icon2,
      alt: 'Ongoing Program',
      title: 'Ongoing Program',
    },
    {
      imageSrc: icon3,
      alt: 'Upcoming Events',
      title: 'Up Coming Events',
    },
  ];

  return (
    <div className="relative bg-white rounded-xl shadow-lg p-10 z-20 w-full">
      {/* Red shadow effect under the container */}
      <div className="absolute inset-0 -z-10 rounded-xl shadow-[0px_1px_8px_20px_rgba(255,0,0,0.2)]"></div>

      {/* Responsive Flexbox Layout */}
      <div className="flex flex-col sm:flex-row justify-center items-center gap-6 sm:gap-10">
        {cardsData.map((card, index) => (
          <div
            key={index}
            className={`flex flex-col items-center text-center px-6 
              ${
                card.imageSrc === icon1
                  ? 'sm:border-r-2 sm:border-black sm:pr-10' // Right border for icon1 on large screens
                  : card.imageSrc === icon2
                  ? 'sm:border-r-2 sm:border-black sm:px-10' // Both side padding for icon2
                  : ''
              }
            `}
          >
            {/* Image with hover + touch (active) effect */}
            <div className="mb-3 overflow-hidden">
              <Image
                src={card.imageSrc}
                alt={card.alt}
                width={140}
                height={140}
                className="transition-transform duration-300 ease-in-out hover:scale-110 active:scale-110 focus:scale-110 cursor-pointer"
              />
            </div>

            {/* Title with hover + touch effect */}
            <h3 className=" cursor-pointer text-xl sm:text-2xl font-semibold text-red-800 
              hover:text-[#f45721] active:text-[#f45721] focus:text-[#f45721] transition">
              {card.title}
            </h3>
          </div>
        ))}
      </div>
    </div>
  );
}
