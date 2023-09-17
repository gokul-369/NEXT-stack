"use client";

import Link from "next/link";
import { useEffect, useState } from "react";
// bg-transparent
// bg-white;
export default function NaveBar() {
  const [backgroundTransparacy, setBackgroundTransparacy] = useState(0);

  useEffect(() => {
    window.onscroll = () => {
      var top = window.scrollY;
      if (top >= 70) {
        setBackgroundTransparacy(1);
      } else {
        setBackgroundTransparacy(0);
      }
    };
  }, []);
  const Menus = [
    {
      linkName: "home",
      link: "#home",
    },
    {
      linkName: "features",
      link: "#features",
    },
    {
      linkName: "about",
      link: "#about",
    },
    {
      linkName: "testimonials",
      link: "#testimonials",
    },
  ];
  const menus = Menus.map((e) => (
    <p className="relative  group" key={e.linkName}>
      <Link href={e.link} scroll={false}>
        {e.linkName}
      </Link>
      <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-orange-400 transition-all group-hover:w-full"></span>
    </p>
  ));
  return (
    <nav
      className={`fixed top-0 z-50 font-sans  flex items-center justify-around w-full h-16 ${
        backgroundTransparacy === 0 ? "bg-transparent" : "bg-white"
      }`}
    >
      <span className="ml-5 font-bold text-black">NAV</span>
      <div className=" items-center justify-between text-black font-semibold text-sm tracking-wide uppercase w-96 hidden md:flex">
        {menus}
      </div>
      <Link
        className="px-4 py-2 mr-5 text-white bg-orange-500 rounded flex items-center justify-around shadow-md transition-all text-sm hover:scale-105 hover:bg-orange-400"
        href="/public/signup"
      >
        Sign Up
       
      </Link>
    </nav>
  );
}
