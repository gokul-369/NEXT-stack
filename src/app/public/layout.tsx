export default function PublicLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <div className="grid sm:grid-cols-1  md:grid-cols-2 h-screen divide-x">
      <div className="hidden md:flex bg-gradient-to-r from-blue-600 to-blue-800  flex-col items-center justify-center text-white text-center shadow-xl shadow-blue">
        <div className="font-semibold tracking-wide text-6xl ">
          <h1>DESIGN</h1>
          <h1 className="mt-1">YOUR DREAMS</h1>
        </div>
        <div className="px-32 leading-loose mt-6 text-xs font-light">
          <p>
            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ut, veniam
            assumenda voluptatem illum sit, sequi possimus at labore aperiam
            fugiat eligendi? Provident dicta praesentium sed, perferendis enim
            reiciendis facilis excepturi!
          </p>
        </div>
      </div>
      {children}
    </div>
  );
}
