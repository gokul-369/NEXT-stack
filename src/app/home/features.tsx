import {
  ClockIcon,
  BoltIcon,
  CursorArrowRippleIcon,
  PaintBrushIcon,
} from "@heroicons/react/24/outline";
export default async function Features() {
  const Cards = [
    {
      icon: <PaintBrushIcon className="h-5 w-5 font-bold" />,
      title: "Customizable",
      content:
        "We offer plethora of customization options for you to design your website, all aimed at overall good user experience.",
    },
    {
      icon: <CursorArrowRippleIcon className="h-5 w-5 font-bold" />,
      title: "Easy to use",
      content:
        "Our tool is very beginner friendly, and more focused on usability, so all the tools and options are easily usable",
    },
    {
      icon: <ClockIcon className="h-5 w-5 font-bold" />,
      title: "24/7 Support",
      content:
        "We prioritize user's convenience over anything, so we offer 24/7 customer support,you can contact us anytime",
    },
    {
      icon: <BoltIcon className="h-5 w-5 font-bold" />,
      title: "Good performance",
      content:
        "Websites built using our tool performs well in terms of SEO, lighthouse benchmarks ensuring that your website is fast",
    },
  ];
  const cards = Cards.map((e) => (
    <div
      className="bg-slate-50 flex flex-col p-8 hover:shadow-md hover:scale-0.5 transition-all rounded-md"
      key={e.title}
    >
      <div className="rounded-full p-3 bg-white text-orange-500 flex items-center justify-center h-12 w-12">
        {e.icon}
      </div>
      <span className="font-semibold mt-5 text-orange-950 small">
        {e.title}
      </span>
      <span className="font-normal mt-3 text-orange-900 text-xs leading-relaxed break-words">
        {e.content}
      </span>
    </div>
  ));
  return (
    <section
      id="features"
      className="h-auto md:h-screen flex flex-col items-center justify-center bg-white"
    >
      <span className="text-3xl font-medium">
        More than just a site builder
      </span>
      <span className="w-80 md:w-2/5 text-center text-sm mt-4 text-slate-400 break-words">
        We offer you more than site building tool, we also offer SEO solutions
        and on demand hosting services
      </span>
      <div className="grid grid-cols-2 md:grid-cols-4 gap-2 md:gap-10 px-5 md:px-20  mt-10">
        {cards}
      </div>
    </section>
  );
}
