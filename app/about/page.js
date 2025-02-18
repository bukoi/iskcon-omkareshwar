import Image from "next/image";
import WelcomContent from "@/app/component/WelcomContent";
import iskcon_collage from "@/public/iskcon_collage.jpg";
import DissolveInKrishna from "@/app/about/component/krishnapara";
import HareKrishnaMovement from "@/app/about/component/iskconmission";
import FounderAcharya from "@/app/about/component/FounderAcharya";
import OurPhilosophyModal from "@/app/about/component/OurPhilosophyModal";
import AdministrationAccordion from "@/app/about/component/Administration";

export default function About() {
  return (
    <div className="relative">
      {/* Background image fixed behind everything */}
      <img
        src={iskcon_collage.src}
        alt="Background"
        className="
          fixed
          top-0
          left-0
          w-full
          h-[55vh]      /* Fixed height so we know exactly how tall it is */
          object-cover  /* Ensures the image isn't distorted */
          z-[-10]
          mt-24       /* Push behind other elements */
        "
      />

      {/* Page content goes here */}
      <div
        className="
          mt-[70vh]         /* Match the image height so content appears just below it */
          z-10
          bg-white
          bg-opacity-100
          backdrop-blur-md
        "
      >
        <DissolveInKrishna />
        <HareKrishnaMovement />
        <FounderAcharya />
        <div className="w-full p-0 m-0">
          <OurPhilosophyModal />
          <AdministrationAccordion />
        </div>
      </div>
    </div>
  );
}
