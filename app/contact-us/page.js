"use client";
import ConnectSection from "@/app/contact-us/components/ConnectSection";
import contactus from "@/public/contact.webp";
export default function SomePage() {
  return (
    <>
    <img
            src={contactus.src}
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
    <ConnectSection formTitle="CONTACT FORM" />
    </>
  );
}
