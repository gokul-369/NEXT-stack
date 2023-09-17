import Image from "next/image";
import image1 from "../assets/designman.jpg";
import image2 from "../assets/designwoman.jpg";
import image3 from "../assets/performance.jpg";
import image4 from "../assets/designteam.jpg";
import Link from "next/link";
import { PhoneIcon } from "@heroicons/react/24/outline";

export default async function About() {
  return (
    <section
      id="about"
      className="h-auto md:h-screen grid sm:grid-cols-1  md:grid-cols-4 over bg-slate-50 "
    >
      <div className="md:pl-36 h-screen col-span-2 flex flex-col items-start px-16 justify-center">
        <span className="text-5xl font-bold tracking-wide leading-tight">
          We <span className="text-orange-500 ">redefine</span> website building
        </span>
        <span className="text-gray-700 mt-6">
          We are one of the leading website building company in the industry, we
          offer a fine crafted tool to design your website with plethora of
          customization options, we also provide number of pre defined templates
          to suit your needs, you name it we have it and all this coupled with a
          team of dedicated developers and designers to adress your querries.
        </span>
        <Link
          className="mt-8 py-3 text-white bg-orange-500 rounded shadow-md transition-all text-sm hover:scale-110 hover:bg-orange-400 flex justify-around items-center w-32"
          href="#footer"
        >
          <span>Contact Us</span>
          <PhoneIcon className="h-5 w-5 " />
        </Link>
      </div>
      <div className="h-screen col-span-2 flex items-center justify-center">
        <div className="grid grid-cols-4 w-96 gap-2">
          <Image
            src={image1}
            alt="image1"
            className="col-span-2 h-40 object-cover rounded-md transition duration-300 ease-in-out hover:scale-105"
            quality={50}
          />
          <Image
            src={image2}
            alt="image2"
            className="col-span-1 h-40 object-cover rounded-md transition duration-300 ease-in-out hover:scale-105"
            quality={50}
          />
          <Image
            src={image3}
            alt="image3"
            className="col-span-1 h-40 object-cover rounded-md transition duration-300 ease-in-out hover:scale-105"
            quality={50}
          />
          <Image
            src={image4}
            alt="image4"
            className="col-span-4 h-40 object-cover rounded-md transition duration-300 ease-in-out hover:scale-105"
            quality={50}
          />
        </div>
      </div>
    </section>
  );
}
