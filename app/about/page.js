import Image from "next/image";
import WelcomContent from "@/app/component/WelcomContent";
import iskcon_collage from "@/public/iskcon_collage.jpg";
import DissolveInKrishna from "@/app/about/component/krishnapara";
import HareKrishnaMovement from "@/app/about/component/iskconmission";
import FounderAcharya from "@/app/about/component/FounderAcharya";
import OurPhilosophyModal from "@/app/about/component/OurPhilosophyModal";
export default function About() {
    return(
        <div className="relative min-h-screen">
      {/* Background image fixed behind everything */}
      <img
        src={iskcon_collage.src}
        alt="Background"
        className="fixed top-0 left-0 w-full h-[55vh] object-fill mt-24 -z--10"
      />

      {/* Page content goes here */}
      <div className="mt-[65vh] z-10 bg-white bg-opacity-100 backdrop-blur-md">
       <DissolveInKrishna /> 
       <HareKrishnaMovement />
       <FounderAcharya />
       <div className="w-full p-0 m-0">
       <OurPhilosophyModal />
       </div>
      </div>
    </div>
    );}