"use client";
import { useForm } from "react-hook-form";
import LandingWrapper from "../components/LandingWrapper";
export default function signUpPage() {
  function Error({ message }: { message: string }) {
    return <p className="mt-3 text-xs text-red-600">{message}</p>;
  }
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();
  const submit = (data: unknown) => {
    console.log(data);
  };

  return (
    <>
      <LandingWrapper>
        <div className="h-screen px-14 flex items-center flex-col justify-center">
          <p className="text-3xl text-blue-600 font-bold">Sign in to App</p>
          <form
            className=" w-96 mt-6"
            noValidate
            onSubmit={handleSubmit(submit)}
          >
            {/* TODO make input component */}
            <div className="h-24">
              <label
                htmlFor="email"
                className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
              >
                E-mail
              </label>
              <input
                type="email"
                {...register("email", {
                  required: { value: true, message: "Email ID is Required" },
                  pattern: { value: /.+@.+/, message: "Invalid Email ID" },
                })}
                className="mt-1 block w-full px-3 py-2 bg-neutral-100 border border-slate-300 rounded-md text-sm shadow-sm placeholder-slate-400
      focus:outline-none focus:border-sky-500 focus:bg-white focus:ring-1 focus:ring-sky-500  invalid:bg-white
     "
                autoComplete="off"
                name="email"
              />
              {errors.email && (
                <Error message={errors.email.message?.toString()!} />
              )}
            </div>
            <div className="h-24">
              <label
                htmlFor="userName"
                className="block mb-2 text-sm font-medium text-gray-900 dark:text-white "
              >
                User Name
              </label>
              <input
                type="text"
                {...register("userName")}
                className="mt-1 block w-full px-3 py-2 bg-neutral-100 border border-slate-300 rounded-md text-sm shadow-sm placeholder-slate-400
      focus:outline-none focus:border-sky-500 focus:bg-white focus:ring-1 focus:ring-sky-500  invalid:bg-white
     "
                {...register("userName", {
                  required: { value: true, message: "User Name is Required" },
                })}
                name="userName"
                autoComplete="off"
              />
              {errors.userName && (
                <Error message={errors.userName.message?.toString()!} />
              )}
            </div>
            <div className="h-24">
              <label
                htmlFor="password"
                className="block mb-2 text-sm font-medium text-gray-900 dark:text-white "
              >
                Password
              </label>
              <input
                type="password"
                {...register("password", {
                  required: { value: true, message: "Password is required" },
                  minLength: {
                    value: 6,
                    message: "Password must be atleast 6 characters",
                  },
                })}
                autoComplete="off"
                placeholder=" "
                className="mt-1 block w-full px-3 py-2 bg-neutral-100 border border-slate-300 rounded-md text-sm shadow-sm placeholder-slate-400
      focus:outline-none focus:border-sky-500 focus:bg-white focus:ring-1 focus:ring-sky-500 invalid:bg-white
     "
                name="password"
              />
              {errors.password && (
                <Error message={errors.password.message?.toString()!} />
              )}
            </div>
            <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 mt-4 w-full px-4 rounded ">
              Sign Up
            </button>
          </form>
        </div>
      </LandingWrapper>
    </>
  );
}
