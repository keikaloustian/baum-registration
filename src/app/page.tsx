import Image from "next/image";
import type { Metadata } from "next";

import heroLogo from "../../public/Logo-Dark-Horizontal.png";
import Link from "next/link";
import { ChevronDoubleRightIcon } from "@heroicons/react/24/outline";

export const metadata: Metadata = {
  title: "Baum Festival",
  description: "Registro sorteo Baum Festival",
};

const RegisterLink = () => {
  return (
    <div className="relative text-2xl font-sans tracking-[0.3em] z-10 text-center mt-[50%]">
      <Link href="/form">
        REGÍSTRATE
        <ChevronDoubleRightIcon className="h-6 w-6 inline-block mb-[0.25em] ml-[.5em]"></ChevronDoubleRightIcon>
      </Link>
    </div>
  );
};

export default function Home() {
  return (
    <main className="bg-elime min-h-screen relative overflow-hidden ">
      <Image
        src={heroLogo}
        alt="Baum Music School Logo"
        priority
        className="absolute -top-[20%] z-0"
      ></Image>
      <RegisterLink></RegisterLink>
    </main>
  );
}
