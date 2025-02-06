"use client";
import { Inter } from "next/font/google";
import { useState } from "react";
import Link from "next/link";
import Image from "next/image";
import ilogo from "@/public/ilogo.png";
import {
	IoReorderThree,
	IoClose,
	IoHomeSharp,
	IoChevronDown,
} from "react-icons/io5";

export default function Header() {
	const [isOpen, setIsOpen] = useState(false);

	return (
		<header className="bg-[#8B1E15] py-2 border-t-4 border-[#f45721]">
			<div className="mx-auto flex max-w-screen-xl items-center justify-between lg:px-6 md:px-2">
				{/* Logo */}
				<div className="flex items-center">
					<Link href="/">
						<Image
							src={ilogo}
							alt="ISKCON RAU Logo"
							width={100}
							height={100}
							className="mr-2 ml-1"
						/>
					</Link>
				</div>

				<button
					onClick={() => setIsOpen(!isOpen)}
					className="text-white focus:outline-none md:hidden mr-5"
				>
					{isOpen ? (
						<IoClose
							size={40}
							className="transition-transform duration-300 transform rotate-180"
							onClick={() => setIsOpen(!isOpen)}
						/>
					) : (
						<IoReorderThree
							size={40}
							className="transition-transform duration-300 transform rotate-0"
							onClick={() => setIsOpen(!isOpen)}
						/>
					)}
				</button>

				{/* Desktop Nav & Donate (hidden on small screens) */}
				<div className="hidden w-fit items-center md:space-x-2 lg:space-x-4 justify-center md:flex">
					<nav className="hidden md:space-x-2 lg:space-x-4 md:flex">
						{/* Home Link with Home Icon */}
						<Link
							href="/"
							className="text-white hover:text-orange-200 transition flex items-center space-x-1 font-medium"
						>
							<IoHomeSharp />
							<span className="">Home</span>
						</Link>

						{/* About Link + Dropdown Arrow */}
						<Link
							href="/about"
							className="text-white hover:text-orange-200 transition flex items-center space-x-1 font-medium"
						>
							<span>About</span>
							<IoChevronDown />
						</Link>

						{/* Activities Link + Dropdown Arrow */}
						<Link
							href="/activities"
							className="text-white hover:text-orange-200 transition flex items-center space-x-1 font-medium"
						>
							<span>Activities</span>
							<IoChevronDown />
						</Link>

						{/* Donations Link + Dropdown Arrow */}
						<Link
							href="/donations"
							className="text-white hover:text-orange-200 transition flex items-center space-x-1 font-medium"
						>
							<span>Donations</span>
							<IoChevronDown />
						</Link>

						{/* Gallery Link + Dropdown Arrow */}
						<Link
							href="/gallery"
							className="text-white hover:text-orange-200 transition flex items-center space-x-1 font-medium"
						>
							<span>Gallery</span>
							<IoChevronDown />
						</Link>

						{/* Contact Us Link - No Icon */}
						<Link
							href="/contact"
							className="text-white hover:text-orange-200 transition font-medium"
						>
							Contact Us
						</Link>
					</nav>

					<div className="ml-4">
						<Link
							href="/donate"
							className="rounded bg-orange-500 px-4 py-2 font-semibold text-white hover:bg-orange-600 transition font-medium"
						>
							Donate Now
						</Link>
					</div>
				</div>
			</div>

			{/* 
        MOBILE SIDEBAR
        We keep it in the DOM at all times, but toggle slide-in with classes.
      */}
			<div
				className={`
          fixed inset-0 z-50 flex 
          transform transition-transform duration-300
          ${isOpen ? "translate-x-0" : "-translate-x-full"}
        `}
			>
				{/* Sidebar (left) */}
				<div className="relative w-64 bg-[#8B1E15] p-4">
					{/* Close Button */}
					<button
						onClick={() => setIsOpen(false)}
						className="text-white focus:outline-none absolute top-4 right-4"
						aria-label="Close sidebar"
					>
						<svg className="h-6 w-6 fill-current" viewBox="0 0 24 24">
							<path d="M6 18L18 6M6 6l12 12" />
						</svg>
					</button>
					<div className="flex flex-col items-center ">
						<Image
							src={ilogo}
							alt="ISKCON RAU Logo"
							width={100}
							height={100}
							className="mr-2 ml-1 pt-20"
						/>
						{/* Nav Links */}
						<nav className="mt-12 flex flex-col items-start space-y-6">
							<Link
								href="/"
								className="text-white text-lg hover:text-orange-200 transition font-medium"
								onClick={() => setIsOpen(false)}
							>
								Home
							</Link>
							<Link
								href="/about"
								className="text-white text-lg hover:text-orange-200 transition font-medium"
								onClick={() => setIsOpen(false)}
							>
								About
							</Link>
							<Link
								href="/activities"
								className="text-white text-lg hover:text-orange-200 transition font-medium"
								onClick={() => setIsOpen(false)}
							>
								Activities
							</Link>
							<Link
								href="/donations"
								className="text-white text-lg hover:text-orange-200 transition font-medium"
								onClick={() => setIsOpen(false)}
							>
								Donations
							</Link>
							<Link
								href="/gallery"
								className="text-white text-lg hover:text-orange-200 transition font-medium"
								onClick={() => setIsOpen(false)}
							>
								Gallery
							</Link>
							<Link
								href="/contact"
								className="text-white text-lg hover:text-orange-200 transition font-medium"
								onClick={() => setIsOpen(false)}
							>
								Contact Us
							</Link>
						</nav>

						{/* Donate Now (mobile) */}
						<div className="mt-8">
							<Link
								href="/donate"
								onClick={() => setIsOpen(false)}
								className="inline-block rounded bg-orange-500 px-4 py-2 font-semibold text-white hover:bg-orange-600 transition font-medium"
							>
								Donate Now
							</Link>
						</div>
					</div>
				</div>

				{/* 
          Semi-transparent overlay to the right.
          Clicking this also closes the sidebar.
        */}
				<div
					className="flex-1 bg-black bg-opacity-50"
					onClick={() => setIsOpen(false)}
				/>
			</div>
		</header>
	);
}
