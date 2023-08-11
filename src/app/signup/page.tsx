"use client";
import { useForm } from "react-hook-form";
import LandingWrapper from "../components/LandingWrapper";
import InputField from "../components/InputField";
import { useState } from "react";
import { setTimeout } from "timers/promises";
export default function signUpPage() {
  const [load, setLoad] = useState(false);
  const {
    register,
    formState: { errors },
    handleSubmit,
  } = useForm();
  const submit = (data: unknown) => {
    setLoad(true);
    console.log(data);
    window.setTimeout(() => {
      setLoad(false);
    }, 1000);
  };
  const emailConfig = {
    required: { value: true, message: "Email ID is Required" },
    pattern: { value: /.+@.+/, message: "Invalid Email ID" },
  };
  const userNameConfig = {
    required: { value: true, message: "User Name is Required" },
  };
  const passwordConfig = {
    required: { value: true, message: "Password is required" },
    minLength: {
      value: 6,
      message: "Password must be atleast 6 characters",
    },
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
            <InputField
              labelName="E-mail"
              inputName="email"
              inputType="email"
              register={register}
              errors={errors}
              inputConfig={emailConfig}
            />
            <InputField
              labelName="User Name"
              inputName="userName"
              inputType="text"
              register={register}
              errors={errors}
              inputConfig={userNameConfig}
            />
            <InputField
              labelName="Password"
              inputName="password"
              inputType="password"
              register={register}
              errors={errors}
              inputConfig={passwordConfig}
            />
            <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold  mt-4 w-full px-4 outline-none py-2 focus: rounded flex items-center justify-center">
              {load && (
                <svg
                  className="animate-spin h-5 w-5 mr-3"
                  viewBox="0 0 24 24"
                  fill="none"
                >
                  <circle
                    className="opacity-25"
                    cx="12"
                    cy="12"
                    r="10"
                    stroke="currentColor"
                    strokeWidth="4"
                  ></circle>
                  <path
                    className="opacity-75"
                    fill="currentColor"
                    d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"
                  ></path>
                </svg>
              )}
              Sign Up
            </button>
          </form>
        </div>
      </LandingWrapper>
    </>
  );
}
