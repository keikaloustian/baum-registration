import logo from "../../../public/Logo-White-Vertical.png";
import Image from "next/image";

export default function Form() {
  return (
    <main className="grid grid-cols-5 min-h-screen bg-white">
      <div className="bg-moss col-span-3 flex">
        <Image
          src={logo}
          alt="Baum Music School Logo"
          className="self-center"
        ></Image>
      </div>
      <form></form>
    </main>
  );
}
