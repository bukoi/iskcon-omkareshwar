"use client";
import { useState } from "react";
import Image from "next/image";
import maharj from "@/public/Mahaman.png";
import senior from "@/public/Praneshwar.png";

const admins = [
  {
    name: "H G Mahaman Prabhuji",
    image: maharj,
    bio: `HG Mahaman Prabhuji is a senior disciple of His Divine Grace A C Bhaktivedanta Swami Prabhupada.
He came in touch with ISKCON in 1972 while finishing his Mechanical Engineering degree in London, England. He joined ISKCON as a Full time devotee and took his Harinam and later Brahmin initiation by Srila Prabhupada in 1973.
After this he had Book distribution and Life-Membership engagements till 1977 when hecame to India and served with the BBT Library party. From 1982 to 1992 he served as the Temple President of Hyderabad temple and farm.
From 1995 to 2004 he served as the Temple President of an International Project of ISKCON in Vrindavan.
Currently he serves as the Zonal Secretary for various states in North India such as Madhya Pradesh, Haryana, Punjab, Uttarakhand, Himachal Pradesh and also Chhattisgarh. He is also the Temple President for ISKCON Indore and a member of the International SABHA group.
Further he is an Initiating Spiritual Master (Diksha Guru) in ISKCON having several disciples all over India.
    `,
  },
  {
    name: "H G Praneshwar Prabhu",
    image: senior,
    bio: `Praneshwar Das was born and brought up in Mumbai and belongs to a South Indian (Mangalore) family.
He did his Mechanical Engineering from SES COE, Kopergaon, Pune University in 1993.
He has subsequently done his Masters in Philosophy& Religion from Madurai Kamraj university. Also he is currently a PhD Research Scholar, pursuing PhD in the field of spirituality from Madurai Kamraj University.
After finishing his studies in 1993, he worked for 3 years in a Multinational Company before joining as a full time Brahmachari.
He is a disciple of HH Radhanath Swami Maharaj having taken both Harinam and Brahman initiations from him.
He came in touch with ISKCON in 1995, in JUHU Mumbai and joined as a full time Brahmachari in 1997. After serving in the Bhaktivedanta Institute for 2 years, he served in the IYF Youth Preaching department for 13 years till 2013 where he served as HOD for many years. Apart from this he was also involved with Brahmachari training, helping in Organizing Festivals, Event Management etc.
From 2013 till date, he has been serving in ISKCON Indore under the kind and able guidance of HG Mahaman Prabhuji as Vice President for Indore and Regional Secretary for Madhya Pradesh having initiated several preaching projects in several places in Madhya Pradesh such as Gwalior, Dewas, Rau, Mhow, Chhindwara, Ratlam, Rewa, Vidisha, Shivpuri, Shahdol, Khandwa, Umaria etc..
He also served as NIDC Secretary for North India and is a convener for ICC Book Distribution Committee.
Apart from the above, he is also involved in teaching Bhaktisastri and Bhaktivaibhava in VIHE, Mayapur Institute since many years. He has visited and given seminars in countries like New Zealand, Mauritius, Muscat, Singapore, Malaysia, Thailand, Fiji etc.
    `,
  },
];

export default function AdminExpandableCards() {
  const [expandedIndex, setExpandedIndex] = useState(null);

  return (
    <section className="bg-white py-10 pt-4">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl font-bold mb-6 text-sky-900 text-center">
          Administration
        </h2>
        {/* Cards Layout */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {admins.map((admin, idx) => (
            <div
              key={idx}
              className="bg-white shadow-md rounded-lg p-6 border border-gray-200 transition-all"
            >
              {/* Image + Name below image */}
              <div className="flex flex-col items-center">
                {/* Larger image in a container */}
                <div className="relative w-56 h-56 md:w-72 md:h-72 mb-4">
                  <Image
                    src={admin.image}
                    alt={admin.name}
                    fill
                    className="object-cover rounded-full shadow-md"
                  />
                </div>
                <h3 className="text-xl md:text-2xl font-semibold text-sky-800 text-center">
                  {admin.name}
                </h3>
              </div>

              {/* Bio with Expand Feature */}
              <div className="mt-4">
                <p
                  className={`text-gray-700 transition-all duration-500 ${
                    expandedIndex === idx ? "block" : "line-clamp-2"
                  }`}
                >
                  {admin.bio}
                </p>
                <button
                  className="mt-2 text-sky-600 font-semibold"
                  onClick={() =>
                    setExpandedIndex(expandedIndex === idx ? null : idx)
                  }
                >
                  {expandedIndex === idx ? "Read Less" : "Read More"}
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
