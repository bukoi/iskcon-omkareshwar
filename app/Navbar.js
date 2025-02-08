"use client";
import { useState } from "react";
import Link from "next/link";
import Image from "next/image";
import ilogo from "@/public/ilogo.png";
import { IoReorderThree, IoClose, IoHomeSharp,  } from "react-icons/io5";
import { IoMdArrowDropdown } from "react-icons/io";
const navLinks = [
	{ href: "/", label: "Home", icon: <IoHomeSharp /> },
	{ href: "/about", label: "About", dropdown: true },
	{ href: "/activities", label: "Activities", dropdown: true },
	{ href: "/donations", label: "Donations", dropdown: true },
	{ href: "/gallery", label: "Gallery", dropdown: true },
	{ href: "/contact", label: "Contact Us" },
];

export default function Header() {
	const [isOpen, setIsOpen] = useState(false);

	return (
		<header className="bg-[#A2150A] py-2 border-t-4 border-[#f45721]">
			<div className="mx-auto flex max-w-screen-xl items-center justify-between lg:px-6 md:px-2">
				{/* Logo */}
				<Link href="/">
					<Image src={ilogo} alt="ISKCON RAU Logo" width={100} height={100} className="mr-1" />
				</Link>

				{/* Mobile Menu Button */}
				<button onClick={() => setIsOpen(!isOpen)} className="md:hidden text-white focus:outline-none mr-5">
					{isOpen ? <IoClose size={40} /> : <IoReorderThree size={40} />}
				</button>

				{/* Desktop Nav */}
				<div className="hidden md:flex items-center space-x-4">
					<nav className="flex space-x-4">
						{navLinks.map(({ href, label, icon, dropdown }) => (
							<Link key={href} href={href} className="text-white hover:text-orange-200 transition flex items-center space-x-1 font-medium">
								{icon} <span>{label}</span> {dropdown && <IoMdArrowDropdown  />}
							</Link>
						))}
					</nav>
					<Link href="/donate" className="bg-orange-500 text-white px-4 py-2 rounded font-semibold hover:bg-orange-600 transition">
						Donate Now
					</Link>
				</div>
			</div>

			{/* Mobile Sidebar */}
			<div className={`fixed inset-0 z-50 flex transition-transform duration-300 ${isOpen ? "translate-x-0" : "-translate-x-full"}`}>
				<div className="w-64 bg-[#8B1E15] p-4 relative">
					{/* Close Button */}
					<button onClick={() => setIsOpen(false)} className="absolute top-4 right-4 text-white focus:outline-none">
						<IoClose size={30} />
					</button>

					{/* Logo */}
					<div className="flex justify-center pt-16">
						<Image src={ilogo} alt="ISKCON RAU Logo" width={100} height={100} />
					</div>

					{/* Mobile Nav Links */}
					<nav className="mt-10 flex flex-col space-y-6">
						{navLinks.map(({ href, label }) => (
							<Link key={href} href={href} className="text-white text-lg hover:text-orange-200 transition font-medium" onClick={() => setIsOpen(false)}>
								{label}
							</Link>
						))}
					</nav>

					{/* Donate Button */}
					<div className="mt-8 text-center">
						<Link href="/donate" className="bg-orange-500 text-white px-4 py-2 rounded font-semibold hover:bg-orange-600 transition" onClick={() => setIsOpen(false)}>
							Donate Now
						</Link>
					</div>
				</div>

				{/* Overlay */}
				<div className="flex-1 bg-black bg-opacity-50" onClick={() => setIsOpen(false)} />
			</div>
		</header>
	);
}
