export default async function About() {
  return (
    <section
      id="about"
      className="h-auto md:h-screen grid sm:grid-cols-1  md:grid-cols-4 bg-slate-50"
    >
      <div className="h-screen col-span-2 flex flex-col items-center justify-center px-8">
        <span className="text-5xl font-bold tracking-wide leading-tight">
          We <span className="text-orange-500 ">redifine</span> website building
        </span>
        <span className="text-gray-700 mt-6">
          We are one of the leading website building company in the industry, we
          offer a fine crafted tool to design your website with plethora of
          customization options, we also provide number of pre defined templates
          to suit your needs, you name it we have it and all this coupled with a
          team of dedicated developers and designers to adress your querries.
        </span>
      </div>
      <div className="h-screen col-span-2 flex items-center justify-center">
        <div className="grid grid-cols-4 w-96 gap-2">
          <div className="col-span-2 h-40 bg-pink-200 rounded-md">1</div>
          <div className="col-span-1 h-40 bg-pink-200 rounded-md">1</div>
          <div className="col-span-1 h-40 bg-pink-200 rounded-md">1</div>
          <div className="col-span-4 h-40 bg-pink-200 rounded-md">1</div>
        </div>
      </div>
    </section>
  );
}
