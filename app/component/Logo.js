import Image from "next/image";
import ilogo from "@/public/ilogo.png";

export default function Logo() {

  return (
    <Image
      src={ilogo}
      alt="ISKCON RAU Logo"
      width={60}
      height={60}
      className="cursor-pointer"
    />
  );
}
