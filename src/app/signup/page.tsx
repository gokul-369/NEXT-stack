"use client";
import { useForm } from "react-hook-form";
import { useState } from "react";
import { useRouter } from "next/navigation";
import { toast, Toaster } from "react-hot-toast";
import axios from "axios";

import LandingWrapper from "../components/LandingWrapper";
import InputField from "../components/InputField";
import LoadingButton from "../components/LoadingButton";
import CustomToast from "../components/CustomToast";
import {
  emailConfig,
  userNameConfig,
  passwordConfig,
} from "@/helpers/constants";
import Link from "next/link";

export default function SignUpPage() {
  const [load, setLoad] = useState(false);
  const {
    formState: { errors },
    handleSubmit,
    control,
  } = useForm();
  const router = useRouter();

  function toastify(
    message: string,
    variant: string,
    redirect: boolean,
    path: string
  ): void {
    toast.custom((t: any) => (
      <CustomToast
        variant={variant}
        message={message}
        buttonText="OK"
        toastObject={t}
        onClose={() => {
          if (!redirect) {
            toast.dismiss(t.id);
          } else {
            toast.dismiss(t.id);
            router.push(path);
          }
        }}
      />
    ));
  }
  const submit = async (data: object) => {
    try {
      setLoad(true);
      const res = await axios.post("/api/auth/signup", data);
      if (res.data.status === 200) {
        toastify(res.data.message, "success", true, "./login");
      } else {
        toastify(res.data.message, "warning", false, "");
      }
    } catch (error: any) {
      toastify(error.message, "error", false, "");
    } finally {
      setLoad(false);
    }
  };

  return (
    <>
      <Toaster toastOptions={{ duration: Infinity }} />
      <LandingWrapper>
        <div className="h-screen px-14 flex items-center flex-col justify-center">
          <p className="text-3xl text-blue-600 font-bold">Sign Up</p>
          <form
            className=" w-96 mt-6"
            noValidate
            onSubmit={handleSubmit(submit)}
          >
            <InputField
              labelName="Email ID"
              inputName="email"
              inputType="email"
              errors={errors}
              inputConfig={emailConfig}
              control={control}
            />
            <InputField
              labelName="User Name"
              inputName="userName"
              inputType="text"
              errors={errors}
              inputConfig={userNameConfig}
              control={control}
            />
            <InputField
              labelName="Password"
              inputName="password"
              inputType="password"
              errors={errors}
              inputConfig={passwordConfig}
              control={control}
            />
            <LoadingButton
              load={load}
              buttonClassName="bg-blue-500 hover:bg-blue-700 text-white font-bold  mt-4"
              buttonText="Sign Up"
            />
            <div className="text-gray-400 text-center font-medium text-sm mt-3 w-full">
              <span>Already registered ? then </span>
              <Link
                href="/login"
                className="text-blue-500 hover:text-blue-700 "
              >
                Login
              </Link>
            </div>
          </form>
        </div>
      </LandingWrapper>
    </>
  );
}
