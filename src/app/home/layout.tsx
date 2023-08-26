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
      <nav className="bg-violet-600 flex items-center justify-between w-full h-16">
        <span className="ml-5 font-bold text-white">NAV</span>
        <Link
          className="px-3 py-1 mr-5 text-white bg-orange-400 rounded"
          href="/signup"
        >
          Sign Up
        </Link>
      </nav>
      <section className={inter.className}>{children}</section>
    </>
  );
}
