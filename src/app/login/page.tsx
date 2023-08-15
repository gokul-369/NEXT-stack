"use client";
import { useForm } from "react-hook-form";
import { useState } from "react";
import { useRouter } from "next/navigation";
import axios from "axios";
import toast, { Toaster } from "react-hot-toast";

import LandingWrapper from "../components/LandingWrapper";
import InputField from "../components/InputField";
import LoadingButton from "../components/LoadingButton";
import { emailConfig, passwordConfig } from "@/helpers/settings";
import CustomToast from "../components/CustomToast";

export default function LoginPage() {
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
  const submit = async (data: unknown) => {
    try {
      setLoad(true);
      const res = await axios.post("/api/users/login", data);
      if (res.data.status === 200) {
        router.push("/profile");
      } else if (res.data.status === 204) {
        toastify(res.data.message, "info", false, "");
      } else {
        toastify(res.data.message, "error", false, "");
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
          <p className="text-3xl text-blue-600 font-bold">Sign In</p>
          <form
            className=" w-96 mt-6"
            noValidate
            onSubmit={handleSubmit(submit)}
          >
            <InputField
              labelName="E-mail"
              inputName="email"
              inputType="email"
              errors={errors}
              inputConfig={emailConfig}
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
              buttonText="Sign In"
            />
          </form>
        </div>
      </LandingWrapper>
    </>
  );
}
