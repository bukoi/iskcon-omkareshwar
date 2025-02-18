import Image from "next/image";
import Link from "next/link";

export default function WelcomContent({ imageSrc, title }) {
  return (
    <div className="w-full flex flex-col items-center text-center px-6 py-10 md:px-20 md:py-16 mt-4 pt-3 bg-sky-50">
      {/* Title */}
      <h1
        className="text-3xl md:text-4xl font-bold uppercase mb-6 
                   bg-gradient-to-r from-sky-500 to-sky-700 bg-clip-text text-transparent"
      >
        {title}
      </h1>

      {/* Image Container */}
      <div className="w-full max-w-5xl mb-6">
        <Image
          src={imageSrc.src} // If imageSrc is imported, you may need to use imageSrc.src
          alt="Hero Section Image"
          width={1200}
          height={600}
          className="rounded-xl object-cover w-full shadow-lg"
        />
      </div>

      {/* Description Text in a bordered box */}
      <div className="max-w-5xl mt-6 p-6 border border-gray-200 rounded-lg shadow-sm text-justify leading-relaxed text-gray-700 tracking-normal font-sans text-lg">
        <p className="mb-4">
          ISKCON Omkareshwar, located in Omkareshwar near Indore in the west of Madhya Pradesh, welcomes and opens its doors to one and all for providing a spiritual recharge and a rare opportunity to experience and elevate your consciousness. Parentally we belong to the International Society for Krishna Consciousness (ISKCON), a worldwide spiritual movement founded by His Divine Grace A.C. Bhaktivedanta Swami Prabhupada in 1966.
        </p>

        <p className="mb-4">
          We are committed to propagating the Sankirtan movement of congregational chanting of the holy name of Krishna, following in the footsteps of the teachings of Lord Sri Chaitanya Mahaprabhu.
        </p>

        <p className="mb-4">
          Our mission is to deliver and educate the general masses with the directives of Śrīmad Bhagavad gītā and Śrīmad Bhāgavatam, following which they would instil a higher value system, rise above the broad divides and imbibe a higher perspective of life with the help of soul realization. We assist and support them in practicing the techniques of Bhakti Marg that enable them to elevate their soul and establish a universal brotherhood. Gradually they become more interested in eternal spiritual life and less attracted to mundane and temporary material pursuits.
        </p>

        <p className="mb-4">
          For the higher spiritual experience and association, ISKCON Omkareshwar lends a systematic procedure and a vast layout of activities. From Sankirtan, festival celebrations, and daily lectures (online and offline) to retreats, children’s education, youth and girls forums, and various courses, we offer spiritual experiences, practices, and knowledge for all age groups irrespective of religion and culture.
        </p>

        <p className="mb-4">
          We look forward to and will be pleased to have you visit and be a part of this incredible journey of Self-realization and Krishna Consciousness!!
        </p>
      </div>

      {/* Know More Button with Link */}
      <Link href="/about">
        <button className="px-6 py-4 font-bold text-white bg-orange-500 rounded-full hover:bg-orange-600 transition duration-300 mt-6">
          KNOW MORE ABOUT ISKCON
        </button>
      </Link>
    </div>
  );
}
