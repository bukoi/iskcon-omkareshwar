import Image from "next/image";
import ilogo from "@/public/ilogo.png";

export default function Logo() {

  return (
    <Image
      src={ilogo}
      alt="ISKCON RAU Logo"
      width={90}
      height={90}
      className="cursor-pointer"
    />
  );
}
