import { Inter } from "next/font/google";

import NaveBar from "./navbar";

const inter = Inter({ subsets: ["latin"] });

export default function HomeLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <>
      <header>
        <NaveBar />
      </header>
      <main className={inter.className}>{children}</main>
    </>
  );
}
