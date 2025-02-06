// pages/index.jsx
import ImageSlider from "@/app/ImageSlider.js";

export default function Home() {
	return (
		<div className="container w-full p-0 m-0 ">
			<ImageSlider interval={15000} containerHeight="800px">
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
			<p>home</p>
			<p></p>
		</div>
	);
}
