import "./globals.css";
import Navbar from "@/app/component/Header.server"
import IskconFooter from "@/app/component/IskconFooter";

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
