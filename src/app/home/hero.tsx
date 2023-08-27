import heroImage from "../assets/hero.png";
import { GlobeAltIcon } from "@heroicons/react/24/outline";

import Link from "next/link";
import Image from "next/image";

export default async function Hero() {
  return (
    <section className="h-screen flex items-center justify-center bg-gradient-to-b from-orange-200 from-10% via-orange-100 via-30% to-white to-90%">
      <div className="flex  justify-around flex-wrap w-full md:px-40 px-10">
        <div
          className="w-full flex flex-col
          items-start justify-center md:w-2/4"
        >
          <span className="flex w-auto px-4 py-2 backdrop-blur-sm bg-white/30 items-center text-xs text-black ">
            <GlobeAltIcon className="mr-3 h-5 w-5 text-orange-400" />
            Your ideal website builder
          </span>
          <div className="mt-5 font-semibold md:text-4xl text-xl">
            <p className="leading-relaxed">
              Plan, design, and publish your web site in just a few clicks.
            </p>
          </div>
          <div className="mt-3 text-slate-400 text-sm ">
            <p>
              Design your web site with interactive elements and clean UI/UX
              without writing single line of code.
            </p>
          </div>

          <Link
            className="px-5 mt-8 py-2 text-white bg-orange-500 rounded shadow-md transition-all text-sm hover:scale-110 hover:bg-orange-400"
            href="/public/signup"
          >
            Start For Free
          </Link>
        </div>
        <div className="w-full md:w-2/4 flex items-center justify-center">
          <Image
            src={heroImage}
            alt="heroimg"
            width={500}
            height={400}
            quality={100}
          />
        </div>
      </div>
    </section>
  );
}
