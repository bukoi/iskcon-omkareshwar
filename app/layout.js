import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import Navbar from "@/app/Navbar";
import IskconFooter from "@/app/IskconFooter";

export const metadata = {
	title: "Iskcon",
	description: "Welcome to ISKCON",
};

export default function RootLayout({ children }) {
	return (
		<html lang="en">
			<body>
				<Navbar></Navbar>
				{children}
				<IskconFooter />
			</body>
		</html>
	);
}
