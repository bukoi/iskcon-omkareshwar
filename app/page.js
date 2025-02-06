import InfoCard from "@/app/InfoCards.js";
import ImageSlider from "@/app/ImageSlider.js";
import WelcomContent from "@/app/WelcomContent";
import Image from "@/public/iskconRau.jpg";
import FounderSection from "@/app/FounderSection.js";
import EventCard from "@/app/EventCard.js";
import cardimg from "@/public/radhaAshtami.jpeg";

export default function Home() {
	return (
		<div className="w-full p-0 m-0 flex flex-col items-center">
			<ImageSlider interval={10000} containerHeight="800px">
				<img
					src="/1.jpg"
					alt="Slide 1"
					className="object-cover w-full h-full z--1 absolute" // Uses object-contain to fit the image
				/>
				<img
					src="/banner.jpg"
					alt="Slide 2"
					className="object-cover w-full h-full z--1 absolute"
				/>
				<img
					src="/banner1.jpg"
					alt="Slide 3"
					className="object-cover w-full h-full z--1 absolute"
				/>
			</ImageSlider>
			<InfoCard></InfoCard>
			<WelcomContent imageSrc={Image} title="Welcome to ISKCON RAU" description="ISKCON Rau, located in Rau near Indore in the west of Madhya Pradesh, welcomes and opens its doors to one and all for providing a spiritual recharge and a rare opportunity to experience and elevate your consciousness. Parentally we belong to the International Society for Krishna Consciousness (ISKCON), a worldwide spiritual movement founded by His Divine Grace A.C. Bhaktivedanta Swami Prabhupada in 1966.
We are committed to propagating the Sankirtan movement of congregational chanting of the holy name of Krishna, following in the footsteps of the teachings of Lord Sri Chaitanya Mahaprabhu.
Our mission is to deliver and educate the general masses with the directives of Śrīmad Bhagavad gītā and Śrīmad Bhāgavatam, following which they would instil a higher value system, rise above the broad divides and imbibe a higher perspective of life with the help of soul realization. We assist and support them practice the techniques of Bhakti Marg that enables them to elevate their soul and establish a universal brotherhood. Gradually they become more interested in eternal spiritual life and less attracted to mundane and temporary material pursuits.
For the higher spiritual experience and association, ISKCON Rau lends a systematic procedure and huge layout of activities. Sankirtan, Festival celebrations, Daily lectures (online and Offline), Sadhu Sangh retreat, Education of children through CARVE- Children’s Academy for Recreation and Vedic Education, Youth Preaching IYF( ISKCON Youth Forum), Girls preaching IGF( ISKCON Girls Forum) where we extend spiritual Education and a variety of courses through CAVE- Chaitanya Academy of Vedic Education, Sunday Feast Programs, Annadanam : Food For Life – our endeavour to reach out healthy and hygienic food prasadam to everyone, thought provoking seminar and spiritual education through RISE- Rupanuga Institute of Spiritual Education, Dham Yatra, Bhakti Vriksha, Corporate Seminars, to name a few. Our platter offers spiritual experiences, practices and knowledge for all age groups irrespective of religion and culture.
We look forward to and will be pleased to have you visit and be a part of this incredible journey of Self-realization and Krishna Consciousness!!"></WelcomContent>
		<FounderSection></FounderSection>
		<h2 className="text-red-700 text-4xl font-bold mt-5">Events & Announcements</h2>
		<EventCard imageSrc={cardimg} date={"September 9, 2024"} title={"Shri Radha Ashtami Festival 2024"}></EventCard>
		</div>
	);
}
