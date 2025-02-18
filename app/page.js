import dynamic from "next/dynamic";
import Image from "next/image";
import { FaUser } from "react-icons/fa";


// Dynamically import components
import ImageSlider from "@/app/component/ImageSlider.js";
import WelcomContent from "@/app/component/WelcomContent";
import FounderSection from "@/app/component/FounderSection.js";
import DonateCard from "@/app/component/DonateCard.js";
// Import static images as usual
import Imagerau from "@/public/iskconRau.jpg";
import member from "@/public/member.jpg";
import nityaseva from "@/public/nityaseva.jpg";
import annadanH from "@/public/annadanH.jpg";
import banner from "@/public/banner.jpg";
import banner1 from "@/public/banner1.jpg";
import banner3 from "@/public/banner3.jpg";
import TempleSchedule from "./component/arti";

export default function Home() {
  return (
    <div className="w-full p-0 m-0 flex flex-col items-center mb-10 mt-24">
      <ImageSlider interval={10000} containerHeight="800px">
      <img
  src={banner3.src}
  alt="Slide 1"
  width={800}
  height={600}
  className="object-cover w-full h-full z-[-1] absolute"
/>
<img
  src={banner.src}
  alt="Slide 2"
  width={800}
  height={600}
  className="object-cover w-full h-full z-[-1] absolute"
/>
<img
  src={banner1.src}
  alt="Slide 3"
  width={800}
  height={600}
  className="object-cover w-full h-full z-[-1] absolute"
/>
      </ImageSlider>

      <WelcomContent
        imageSrc={Imagerau}
        title="Welcome to ISKCON OMKARESHWAR"/>

      <FounderSection />

      <TempleSchedule />

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
