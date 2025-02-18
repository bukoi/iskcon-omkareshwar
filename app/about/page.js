"use client";
import iskcon_collage from "@/public/iskcon_collage.jpg";
import WhyKrishna from "@/app/about/component/krishnapara2";
import HareKrishnaMovement from "@/app/about/component/iskconmission";
import FounderAcharya from "@/app/about/component/FounderAcharya";
import OurPhilosophyModal from "@/app/about/component/OurPhilosophyModal";
import AdministrationAccordion from "@/app/about/component/Administration";

export default function About() {
  return (
    <div className="relative">
      <img
        src={iskcon_collage.src}
        alt="Background"
        className="
          fixed top-0 left-0 w-full h-[55vh] object-cover z-[-10] mt-24
        "
      />
      <div
        className="
          mt-[70vh] z-10 bg-white bg-opacity-100 backdrop-blur-md
        "
      >
        {/* 1) Why Krishna */}
        <section id="why-krishna" className="py-8">
          <WhyKrishna />
        </section>

        {/* 2) ISKCON Mission */}
        <section id="mission" className="py-8">
          <HareKrishnaMovement />
        </section>

        {/* 3) Founder Acharya */}
        <section id="founder" className="py-8">
          <FounderAcharya />
        </section>

        {/* 4) Our Philosophy */}
        <section id="our-philosophy" className="py-8">
          <OurPhilosophyModal />
        </section>

        {/* 5) Administration */}
        <section id="administration" className="py-8">
          <AdministrationAccordion />
        </section>
      </div>
    </div>
  );
}
