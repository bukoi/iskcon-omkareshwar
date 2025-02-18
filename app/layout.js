import "./globals.css";
import Navbar from "@/app/component/Header.server"
import IskconFooter from "@/app/component/IskconFooter";
import { Merriweather } from 'next/font/google';

const merriweather = Merriweather({
  weight: ['400', '700'], // choose the weights you need
  subsets: ['latin'],
});
import { Poppins } from 'next/font/google';

const poppins = Poppins({
  weight: ['400', '500', '600', '700'], // choose weights as needed
  subsets: ['latin'],
});

export const metadata = {
	title: "Iskcon",
	description: "Welcome to ISKCON",
};

export default function RootLayout({ children }) {
	return (
		<html lang="en">
			<body className="flex flex-col min-h-screen">
		<Navbar />
        {/* Main content takes all available vertical space */}
        <main className="flex-1">
          {children}
        </main>
        {/* Footer will stick to the bottom when content is short */}
        <IskconFooter />
      </body>
		</html>
	);
}
