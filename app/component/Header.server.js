// components/Header.server.jsx
import Link from "next/link";
import Image from "next/image";
import ilogo from "@/public/ilogo.png";
import ClientHeader from "@/app/component/Header.client"; // interactive part

export default function Header() {
  return (
    <header className="fixed w-full top-0 z-50 backdrop-blur-md bg-sky-600/80 shadow-md border-b border-sky-700">
      <div className="mx-auto flex max-w-screen-xl items-center justify-between px-6 py-3">
        {/* Logo (static) */}
        <Link href="/">
          <Image
            src={ilogo}
            alt="ISKCON RAU Logo"
            width={60}
            height={60}
            className="cursor-pointer"
          />
        </Link>
        {/* The interactive part of the header */}
        <ClientHeader />
                {/* The interactive part of the header */}

      </div>
    </header>
  );
}
