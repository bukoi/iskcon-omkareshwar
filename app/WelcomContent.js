import Image from 'next/image';

export default function WelcomContent({ imageSrc, title }) {
  return (
    <div className="w-full flex flex-col items-center text-center px-6 py-10 md:px-20 md:py-16 mt-5 mt-4 pt-3 bg-gray-100">
      {/* Title */}
      <h1 className="text-3xl md:text-4xl font-bold text-red-700 mb-6">
        {title}
      </h1>

      {/* Image Container */}
      <div className="w-full max-w-5xl">
        <Image
          src={imageSrc}
          alt="Hero Section Image"
          width={1200}
          height={600}
          className="rounded-xl object-cover w-full"
        />
      </div>

      {/* Description Text */}
      <div className="text-gray-600 text-base leading-relaxed tracking-normal font-Inter
max-w-5xl mt-6 text-justify leading-relaxed word-spacing">
        <p className="mb-4">
        ISKCON Rau, located in Rau near Indore in the west of Madhya Pradesh, welcomes and opens its doors to one and all for providing a spiritual recharge and a rare opportunity to experience and elevate your consciousness. Parentally we belong to the International Society for Krishna Consciousness (ISKCON), a worldwide spiritual movement founded by His Divine Grace A.C. Bhaktivedanta Swami Prabhupada in 1966.
        </p>

        <p className="mb-4">
        We are committed to propagating the Sankirtan movement of congregational chanting of the holy name of Krishna, following in the footsteps of the teachings of Lord Sri Chaitanya Mahaprabhu.</p>

        <p className="mb-4">
        Our mission is to deliver and educate the general masses with the directives of Śrīmad Bhagavad gītā and Śrīmad Bhāgavatam, following which they would instil a higher value system, rise above the broad divides and imbibe a higher perspective of life with the help of soul realization. We assist and support them practice the techniques of Bhakti Marg that enables them to elevate their soul and establish a universal brotherhood. Gradually they become more interested in eternal spiritual life and less attracted to mundane and temporary material pursuits.</p>
        <p className='mb-4'>For the higher spiritual experience and association, ISKCON Rau lends a systematic procedure and huge layout of activities. Sankirtan, Festival celebrations, Daily lectures (online and Offline), Sadhu Sangh retreat, Education of children through CARVE- Children’s Academy for Recreation and Vedic Education, Youth Preaching IYF( ISKCON Youth Forum), Girls preaching IGF( ISKCON Girls Forum) where we extend spiritual Education and a variety of courses through CAVE- Chaitanya Academy of Vedic Education, Sunday Feast Programs, Annadanam : Food For Life – our endeavour to reach out healthy and hygienic food prasadam to everyone, thought provoking seminar and spiritual education through RISE- Rupanuga Institute of Spiritual Education, Dham Yatra, Bhakti Vriksha, Corporate Seminars, to name a few. Our platter offers spiritual experiences, practices and knowledge for all age groups irrespective of religion and culture.</p>
        <p className='mb-4'>We look forward to and will be pleased to have you visit and be a part of this incredible journey of Self-realization and Krishna Consciousness!!</p>
      </div>
      <button
      className="px-6 py-4 font-bold border-2 border-red-800 text-red-800 rounded-full
                 hover:bg-red-800 hover:text-orange-400 transition duration-300"
    >
      KNOW MORE ABOUT ISKCON
    </button>
    </div>
  );
}
