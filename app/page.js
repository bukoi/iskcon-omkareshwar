import dynamic from "next/dynamic";
import Image from "next/image";
import { FaUser } from "react-icons/fa";

// Dynamically import components
const InfoCard = dynamic(() => import("@/app/InfoCards.js"));
const ImageSlider = dynamic(() => import("@/app/ImageSlider.js"));
const WelcomContent = dynamic(() => import("@/app/WelcomContent"));
const FounderSection = dynamic(() => import("@/app/FounderSection.js"));
const EventCard = dynamic(() => import("@/app/EventCard.js"));
const ParallaxEffect = dynamic(() => import("@/app/ParallaxEffect.js"));
const DonateCard = dynamic(() => import("@/app/DonateCard.js"));

// Import static images as usual
import Imagerau from "@/public/iskconRau.jpg";
import cardimg from "@/public/radhaAshtami.jpeg";
import blog2 from "@/public/blog2.jpg";
import blog3 from "@/public/blog3.jpg";
import member from "@/public/member.jpg";
import nityaseva from "@/public/nityaseva.jpg";
import annadanH from "@/public/annadanH.jpg";
import banner from "@/public/banner.jpg";
import banner1 from "@/public/banner1.jpg";
import banner3 from "@/public/banner3.jpg";
import TempleSchedule from "./arti";

export default function Home() {
  return (
    <div className="w-full p-0 m-0 flex flex-col items-center mb-10 mt-24">
      <ImageSlider interval={10000} containerHeight="800px">
        <img
          src={banner3.src}
          alt="Slide 1"
          width="800"
          height="600"
          className="object-cover w-full h-full z--1 absolute"
        />
        <img
          src={banner.src}
          alt="Slide 2"
          width="800"
          height="600"
          className="object-cover w-full h-full z--1 absolute"
        />
        <img
          src={banner1.src}
          alt="Slide 3"
          width="800"
          height="600"
          className="object-cover w-full h-full z--1 absolute"
        />
      </ImageSlider>

      <WelcomContent
        imageSrc={Imagerau}
        title="Welcome to ISKCON OMKARESHWAR"
        description="ISKCON Omkareshwar, located in Omkareshwar near Indore in the west of Madhya Pradesh, welcomes and opens its doors to one and all for providing a spiritual recharge and a rare opportunity to experience and elevate your consciousness. Parentally we belong to the International Society for Krishna Consciousness (ISKCON), a worldwide spiritual movement founded by His Divine Grace A.C. Bhaktivedanta Swami Prabhupada in 1966.
We are committed to propagating the Sankirtan movement of congregational chanting of the holy name of Krishna, following in the footsteps of the teachings of Lord Sri Chaitanya Mahaprabhu.
Our mission is to deliver and educate the general masses with the directives of Śrīmad Bhagavad gītā and Śrīmad Bhāgavatam, following which they would instil a higher value system, rise above the broad divides and imbibe a higher perspective of life with the help of soul realization. We assist and support them practice the techniques of Bhakti Marg that enables them to elevate their soul and establish a universal brotherhood. Gradually they become more interested in eternal spiritual life and less attracted to mundane and temporary material pursuits.
For the higher spiritual experience and association, ISKCON Omkareshwar lends a systematic procedure and huge layout of activities. Sankirtan, Festival celebrations, Daily lectures (online and Offline), Sadhu Sangh retreat, Education of children through CARVE- Children’s Academy for Recreation and Vedic Education, Youth Preaching IYF( ISKCON Youth Forum), Girls preaching IGF( ISKCON Girls Forum) where we extend spiritual Education and a variety of courses through CAVE- Chaitanya Academy of Vedic Education, Sunday Feast Programs, Annadanam : Food For Life – our endeavour to reach out healthy and hygienic food prasadam to everyone, thought provoking seminar and spiritual education through RISE- Rupanuga Institute of Spiritual Education, Dham Yatra, Bhakti Vriksha, Corporate Seminars, to name a few. Our platter offers spiritual experiences, practices and knowledge for all age groups irrespective of religion and culture.
We look forward to and will be pleased to have you visit and be a part of this incredible journey of Self-realization and Krishna Consciousness!!"
      />

      <FounderSection />

      {/* <h2 className="text-orange-500 text-4xl font-bold mt-5">
        Events & Announcements
      </h2>
      <div className="flex flex-row flex-wrap justify-center gap-6">
        <EventCard
          imageSrc={cardimg}
          date={"September 9, 2024"}
          title={"Shri Radha Ashtami Festival 2024"}
        />
      </div> */}

      {/* <ParallaxEffect /> */}
      <TempleSchedule />

      {/* <div className="flex flex-col flex-wrap gap-6 mt-10 text-center">
        <h2 className="text-orange-500 text-4xl font-bold mt-5">
          Articles & Blogs
        </h2>
        <div className="flex flex-row flex-wrap justify-center gap-4">
          <EventCard
            imageSrc={blog2}
            date={"January 10, 2022"}
            title={'Why Should You Attend "Discover Your Permanant Happiness" Seminar?'}
            width="w-70"
            height="h-auto"
          >
            <div className="flex flex-row items-center justify-center gap-1">
              <FaUser className="text-orange-500" />
              <p className="text-gray-600 mt-2 cursor-pointer hover:text-orange-600 active:text-orange-600 focus:text-orange-600 tracking-tight leading-snug">
                Admin
              </p>
            </div>
          </EventCard>
          <EventCard
            imageSrc={blog3}
            date={"January 10, 2022"}
            title={"Deploy Geeta Saar in Your Life"}
            width="w-70"
            height="h-auto"
          >
            <div className="flex flex-row items-center justify-center gap-1">
              <FaUser className="text-orange-500" />
              <p className="text-gray-600 mt-2 cursor-pointer hover:text-orange-600 active:text-orange-600 focus:text-orange-600 tracking-tight leading-snug">
                Admin
              </p>
            </div>
          </EventCard>
          <EventCard
            imageSrc={blog2}
            date={"January 10, 2022"}
            title={'Why Should You Attend "Discover Your Permanant Happiness" Seminar?'}
            width="w-70"
            height="h-auto"
          >
            <div className="flex flex-row items-center justify-center gap-1">
              <FaUser className="text-orange-500" />
              <p className="text-gray-600 mt-2 cursor-pointer hover:text-orange-600 active:text-orange-600 focus:text-orange-600 tracking-tight leading-snug">
                Admin
              </p>
            </div>
          </EventCard>
        </div>
      </div> */}

      <div className="flex flex-col flex-wrap gap-6 mt-10 text-center">
        <h2 className="text-orange-500 text-4xl font-bold mt-5">
          Support Our Cause
        </h2>
        <div className="flex flex-row flex-wrap justify-center gap-4">
          <DonateCard imageSrc={member} title={"Life Membership"} />
          <DonateCard imageSrc={nityaseva} title={"Nitya Seva"} />
          <DonateCard imageSrc={annadanH} title={"Annadan Seva"} />
        </div>
      </div>
    </div>
  );
}
