import LandingWrapper from "../components/LandingWrapper";

export default function loginPage() {
  return (
    <>
      <LandingWrapper>
        <div className="h-screen px-14 flex items-center flex-col justify-center">
          <p className="text-3xl text-blue-600 font-bold">Sign in to App</p>
          <form className="w-96 mt-6">
            {/* TODO make input component */}
            <div className="my-4">
              <label
                htmlFor="email"
                className="block mb-2 text-sm font-medium text-gray-900 dark:text-white invalid:text-red-500"
              >
                user name
              </label>
              <input
                type="email"
                className="mt-1 block w-full px-3 py-2 bg-neutral-100 border border-slate-300 rounded-md text-sm shadow-sm placeholder-slate-400
      focus:outline-none focus:border-sky-500 focus:bg-white focus:ring-1 focus:ring-sky-500
      disabled:bg-slate-50 disabled:text-slate-500 disabled:border-slate-200 disabled:shadow-none
      invalid:border-pink-500 invalid:text-pink-600
      focus:invalid:border-pink-500 focus:invalid:ring-pink-500 invalid:bg-white
    
    "
                name="email"
              />
            </div>
            <div className="my-4">
              <label
                htmlFor="email"
                className="block mb-2 text-sm font-medium text-gray-900 dark:text-white invalid:text-red-500"
              >
                user name
              </label>
              <input
                type="email"
                className="mt-1 block w-full px-3 py-2 bg-neutral-100 border border-slate-300 rounded-md text-sm shadow-sm placeholder-slate-400
      focus:outline-none focus:border-sky-500 focus:bg-white focus:ring-1 focus:ring-sky-500
      disabled:bg-slate-50 disabled:text-slate-500 disabled:border-slate-200 disabled:shadow-none
      invalid:border-pink-500 invalid:text-pink-600
      focus:invalid:border-pink-500 focus:invalid:ring-pink-500 invalid:bg-white
    
    "
                name="email"
              />
            </div>
            <div className="my-4">
              <label
                htmlFor="email"
                className="block mb-2 text-sm font-medium text-gray-900 dark:text-white invalid:text-red-500"
              >
                user name
              </label>
              <input
                type="email"
                className="mt-1 block w-full px-3 py-2 bg-neutral-100 border border-slate-300 rounded-md text-sm shadow-sm placeholder-slate-400
      focus:outline-none focus:border-sky-500 focus:bg-white focus:ring-1 focus:ring-sky-500
      disabled:bg-slate-50 disabled:text-slate-500 disabled:border-slate-200 disabled:shadow-none
      invalid:border-pink-500 invalid:text-pink-600
      focus:invalid:border-pink-500 focus:invalid:ring-pink-500 invalid:bg-white
    
    "
                name="email"
              />
            </div>
          </form>
        </div>
      </LandingWrapper>
    </>
  );
}
