// components/ISKCONFooter.jsx
import React from "react";
import {
	FaFacebookF,
	FaInstagram,
	FaYoutube,
	FaTwitter,
	FaLinkedinIn,
} from "react-icons/fa";
import Back from "@/public/back.jpg";

const IskconFooter = () => {
	return (
		<footer
			className="
        relative text-white 
        min-h-[300px]
        bg-no-repeat bg-cover bg-center
      "
			style={{
				backgroundImage: `url(${Back.src})`,
			}}
		>
			{/* Red overlay (no blur) */}
			<div className="absolute inset-0 bg-red-600/60" />

			{/* Footer content above overlay */}
			<div className="relative container mx-auto py-6 md:py-10 px-4 md:px-8">
				<div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
					{/* Column 1 */}
					<div className="space-y-2 text-center sm:text-left">
						{/* Text can scale at breakpoints if you like, e.g. md:text-2xl */}
						<h2 className="text-xl md:text-2xl font-bold">ISKCON RAU</h2>
						<p className="uppercase tracking-wide text-sm md:text-base">
							International Society for Krishna Consciousness
						</p>
						<p className="text-sm md:text-base">
							Founder Acharya: His Divine Grace A.C. Bhaktivedanta Swami
							Prabhupada
						</p>
					</div>

					{/* Column 2 */}
					<div className="space-y-3 leading-relaxed text-center sm:text-left text-sm md:text-base">
						<p>218-A, Silicon City, Rau, Indore (MP) 452013, India</p>
						<p>+91 77779 37108</p>
						<p>+91 94949 43108</p>
						<p>info@iskconrau.com</p>
						<p>
							<strong>General Manager:</strong> <br />
							HG Madhav Kumar Das <br />
							(Mithun Kumar Ghosh) <br />
							+91 7771099906
						</p>
					</div>

					{/* Column 3 (Social Icons) */}
					<div className="space-y-4 text-center sm:text-left">
						<h3 className="text-lg font-semibold">Follow Us</h3>
						<div className="flex justify-center sm:justify-start space-x-4">
							<a
								href="#"
								className="bg-white w-10 h-10 rounded-full flex items-center justify-center
                           text-[#971F1D] hover:bg-gray-100 transition-colors"
								aria-label="Facebook"
							>
								<FaFacebookF />
							</a>
							<a
								href="#"
								className="bg-white w-10 h-10 rounded-full flex items-center justify-center
                           text-[#971F1D] hover:bg-gray-100 transition-colors"
								aria-label="Instagram"
							>
								<FaInstagram />
							</a>
							<a
								href="#"
								className="bg-white w-10 h-10 rounded-full flex items-center justify-center
                           text-[#971F1D] hover:bg-gray-100 transition-colors"
								aria-label="YouTube"
							>
								<FaYoutube />
							</a>
							<a
								href="#"
								className="bg-white w-10 h-10 rounded-full flex items-center justify-center
                           text-[#971F1D] hover:bg-gray-100 transition-colors"
								aria-label="Twitter"
							>
								<FaTwitter />
							</a>
							<a
								href="#"
								className="bg-white w-10 h-10 rounded-full flex items-center justify-center
                           text-[#971F1D] hover:bg-gray-100 transition-colors"
								aria-label="LinkedIn"
							>
								<FaLinkedinIn />
							</a>
						</div>
					</div>
				</div>
			</div>
		</footer>
	);
};

export default IskconFooter;
