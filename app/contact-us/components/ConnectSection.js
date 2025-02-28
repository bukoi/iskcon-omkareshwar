"use client";
import Image from "next/image";
import { useState } from "react";
import dummyLogo from "@/public/ilogoblue.png";

// Default contact data for ISKCON Omkareshwar
const defaultContactData = {
  templeName: "ISKCON Omkareshwar",
  subtitle: "Sri Sri Radha Madhava Temple",
  addressLines: [
    "Hare Krishna Hill, Mansarovar",
    "Omkareshwar, Madhya Pradesh, 456001",
  ],
  phone: "+91-7733004108",
  email: "support@iskconomkareshwar.com",
  adminName: "Animesh Tiwari, Admin Head",
  logo: dummyLogo,
};

export default function ConnectSection({
  contactData = defaultContactData,
  formTitle = "Contact Form",
}) {
  const [formValues, setFormValues] = useState({
    name: "",
    email: "",
    phone: "",
    message: "",
  });
  const [authorize, setAuthorize] = useState(false);
  const [status, setStatus] = useState("");

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormValues({ ...formValues, [name]: value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      // Send data to our API route
      const response = await fetch("/api/contact", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          ...formValues,
          authorize,
        }),
      });

      if (response.ok) {
        setStatus("Your message has been sent successfully!");
        setFormValues({ name: "", email: "", phone: "", message: "" });
        setAuthorize(false);
      } else {
        setStatus("Oops! Something went wrong. Please try again.");
      }
    } catch (error) {
      console.error(error);
      setStatus("An error occurred. Please try again later.");
    }
  };

  return (
    <section className="bg-white py-10 mt-[65vh]">
      <div className="container mx-auto px-4 flex flex-col md:flex-row items-stretch gap-8">
        {/* Left Column: Contact Info */}
        <div className="md:w-1/2 bg-gray-50 p-6 flex flex-col items-center justify-center rounded-lg shadow-md">
          <div className="text-center space-y-3 flex flex-col justify-center">
            {/* Logo */}
            {contactData.logo && (
              <div className="flex justify-center items-center mb-4">
                <Image
                  src={contactData.logo}
                  alt={`${contactData.templeName} Logo`}
                  width={200}
                  height={200}
                  className="object-contain"
                />
              </div>
            )}
            {/* Temple Name */}
            <h2 className="text-2xl md:text-3xl font-bold text-sky-900">
              {contactData.templeName}
            </h2>
            {/* Subtitle */}
            <p className="text-orange-600 text-lg font-semibold">
              {contactData.subtitle}
            </p>
            {/* Address */}
            <div className="mt-4 text-gray-800 space-y-1">
              {contactData.addressLines?.map((line, idx) => (
                <p key={idx}>{line}</p>
              ))}
            </div>
            {/* Phone & Email */}
            <p className="text-gray-800 mt-3">
              <span className="font-semibold">Phone:</span> {contactData.phone}
            </p>
            <p className="text-gray-800">
              <span className="font-semibold">Email:</span> {contactData.email}
            </p>
            {/* Admin Info */}
            <p className="text-gray-800 mt-4">
              <span className="font-semibold">{contactData.adminName}</span>
              <br />
              {contactData.adminSupport}
              <br />
              {contactData.adminPhone}
            </p>
          </div>
        </div>

        {/* Right Column: Contact Form */}
        <div className="md:w-1/2 bg-white p-6 rounded-lg shadow-md">
          <h2 className="text-2xl md:text-3xl font-bold text-sky-900 mb-4">
            {formTitle}
          </h2>
          <form onSubmit={handleSubmit} className="space-y-4">
            {/* Name */}
            <div>
              <label className="block text-gray-700 font-semibold mb-1">
                Name *
              </label>
              <input
                type="text"
                name="name"
                value={formValues.name}
                onChange={handleChange}
                required
                placeholder="Your Full Name"
                className="w-full border border-gray-300 rounded-lg px-3 py-2 focus:outline-none focus:border-sky-500"
              />
            </div>
            {/* Email */}
            <div>
              <label className="block text-gray-700 font-semibold mb-1">
                Email *
              </label>
              <input
                type="email"
                name="email"
                value={formValues.email}
                onChange={handleChange}
                required
                placeholder="your.email@example.com"
                className="w-full border border-gray-300 rounded-lg px-3 py-2 focus:outline-none focus:border-sky-500"
              />
            </div>
            {/* Phone */}
            <div>
              <label className="block text-gray-700 font-semibold mb-1">
                Phone
              </label>
              <input
                type="tel"
                name="phone"
                value={formValues.phone}
                onChange={handleChange}
                placeholder="+91-XXXX-XXXXXX"
                className="w-full border border-gray-300 rounded-lg px-3 py-2 focus:outline-none focus:border-sky-500"
              />
            </div>
            {/* Message */}
            <div>
              <label className="block text-gray-700 font-semibold mb-1">
                Your Message
              </label>
              <textarea
                name="message"
                value={formValues.message}
                onChange={handleChange}
                rows={4}
                placeholder="Type your message here..."
                className="w-full border border-gray-300 rounded-lg px-3 py-2 focus:outline-none focus:border-sky-500"
              />
            </div>
            {/* Authorize Checkbox */}
            <div className="flex items-center space-x-2">
              <input
                type="checkbox"
                checked={authorize}
                onChange={(e) => setAuthorize(e.target.checked)}
                className="h-4 w-4 text-sky-500 border-gray-300 rounded focus:ring-sky-400"
              />
              <label className="text-gray-700">
                I authorize ISKCON to contact me via SMS/Email/WhatsApp
              </label>
            </div>
            {/* Submit Button */}
            <div>
              <button
                type="submit"
                className="bg-orange-500 text-white px-6 py-2 rounded-full font-bold shadow hover:bg-orange-600 transition"
              >
                Submit
              </button>
            </div>
          </form>
          {status && <p className="mt-3 text-sm text-green-700">{status}</p>}
        </div>
      </div>
    </section>
  );
}
