import Image from 'next/image';
import { FaCalendarDays } from "react-icons/fa6";

export default function EventCard({ imageSrc, date, title }) {
  return (
    <div className="relative mb-12 mt-6 flex flex-col items-center bg-white shadow-lg rounded-lg overflow-hidden transition-all duration-300 hover:-translate-y-2 hover:shadow-2xl hover:shadow-gray-800 w-80 h-auto md:w-96 md:h-auto">
      {/* Event Image with Zoom on Hover */}
      <div className="w-full overflow-hidden">
        <Image
          src={imageSrc}
          alt="Event Image"
          className="w-full transition-transform duration-300 hover:scale-110"
        />
      </div>
      
      {/* Event Details */}
      <div className="p-4 text-center">
        <div className='flex flex-row justify-center items-center gap-4'>
          <FaCalendarDays className="text-red-700"/>
          <p className="text-gray-600 mt-2">{date}</p>
        </div>
        <h3 className="text-lg font-semibold mt-1">{title}</h3>
        <button className="mt-4 flex items-center bg-transparent text-black font-bold rounded-full transition-all duration-500 ease-in-out hover:bg-black hover:text-white">
          <span className="px-4 py-2">Read more</span>
          <span className="px-4 py-2 bg-red-700 text-white rounded-r-full">➡</span>
        </button>
      </div>
    </div>
  );
}
