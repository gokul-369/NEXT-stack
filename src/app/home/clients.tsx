import Image from "next/image";
import puma from "../assets/puma.png";
import spotify from "../assets/spotify.png";
import ford from "../assets/ford.png";
import samsung from "../assets/samsung.png";
import canon from "../assets/canon.png";
import cola from "../assets/cola.png";
import image5 from "../assets/dot.svg";
export default async function Clients() {
  return (
    <div className="items-center justify-center bg-white-200 flex-wrap flex  py-24 px-16 md:px-40 relative overflow-hidden bg-slate-50">
      <Image
        src={image5}
        alt="pattern"
        className="hidden md:block h-32 w-32 absolute -left-14 -bottom-14 opacity-30"
        quality={50}
      />
      <span className="text-base font-normal  text-orange-950">
        Trusted by world's leading brands
      </span>
      <div className="mt-5 flex flex-wrap justify-between items-center w-full">
        <Image src={puma} alt="puma" />
        <Image src={spotify} alt="spotify" />
        <Image src={ford} alt="ford" />
        <Image src={samsung} alt="samsung" />
        <Image src={canon} alt="canon" />
        <Image src={cola} alt="cola" />
      </div>
      <Image
        src={image5}
        alt="pattern"
        className="hidden md:block h-32 w-32 absolute -right-14 -top-12 opacity-30"
        quality={50}
      />
    </div>
  );
}
