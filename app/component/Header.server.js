// components/Header.server.jsx
import Link from "next/link";
import Image from "next/image";
import ClientHeader from "@/app/component/Header.client"; // interactive part
import Logo from "@/app/component/Logo";

export default function Header() {
  return (
    <header className="fixed w-full top-0 z-50 backdrop-blur-md bg-sky-600/80 shadow-md border-b border-sky-700">
      <div className="mx-auto flex max-w-screen-xl items-center justify-between px-6 py-3">
        {/* Logo (static) */}
        <Link href="/">
        <Logo/>
        </Link>
        {/* The interactive part of the header */}
        <ClientHeader />
                {/* The interactive part of the header */}

      </div>
    </header>
  );
}
