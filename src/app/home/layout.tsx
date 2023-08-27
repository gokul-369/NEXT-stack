import { Inter } from "next/font/google";

import Link from "next/link";

const inter = Inter({ subsets: ["latin"] });

export default function HomeLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <>
      <header>
        <nav className="fixed font-sans bg-inherit flex items-center justify-around w-full h-16">
          <span className="ml-5 font-bold text-black">NAV</span>
          <div className="flex items-center justify-between text-black font-semibold text-sm tracking-wide uppercase w-72">
            <p className="relative group">
              <Link href="#home" scroll={false}>
                home
              </Link>
              <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-orange-400 transition-all group-hover:w-full"></span>
            </p>
            <p className="relative group">
              <Link href="#about" scroll={false}>
                about
              </Link>
              <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-orange-400 transition-all group-hover:w-full"></span>
            </p>
            <p className="relative group">
              <Link href="#contact" scroll={false}>
                contact
              </Link>
              <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-orange-400 transition-all group-hover:w-full"></span>
            </p>
          </div>
          <Link
            className="px-4 py-2 mr-5 text-white bg-orange-500 rounded shadow-md transition-all text-sm hover:scale-105 hover:bg-orange-400"
            href="/public/signup"
          >
            Sign Up
          </Link>
        </nav>
      </header>
      <main className={inter.className}>{children}</main>
    </>
  );
}
