"use client";

export default function Readmore() {
  const handleRedirect = () => {
    window.location.href = "http://www.prabhupada.com/";
  };

  return (
    <button
      className="px-6 py-4 font-bold text-white bg-orange-500 rounded-full hover:bg-orange-600 transition duration-300 mt-6"
      onClick={handleRedirect}
    >
      Read More
    </button>
  );
}
