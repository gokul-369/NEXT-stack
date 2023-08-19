"use client";
import { useForm } from "react-hook-form";
import { useState } from "react";
import axios from "axios";
import toast, { Toaster } from "react-hot-toast";

import LandingWrapper from "../components/LandingWrapper";
import InputField from "../components/InputField";
import LoadingButton from "../components/LoadingButton";
import { configConstants, passwordConfig } from "@/helpers/constants";
import CustomToast from "../components/CustomToast";
import Link from "next/link";

export default function ForgotPasswordPage() {
  const [load, setLoad] = useState(false);
  const {
    formState: { errors },
    handleSubmit,
    control,
  } = useForm();
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
          }
        }}
      />
    ));
  }
  const submit = async (data: object) => {
    try {
      setLoad(true);
      console.log(data);

      // const res = await axios.post("/api/auth/forgotpassword/verifyuser", {
      //   ...data,
      //   purpose: configConstants.FORGOT_PASSWORD,
      // });
      // if (res.data.status === 200) {
      //   toastify(res.data.message, "success", false, "");
      // } else if (res.data.status === 204) {
      //   toastify(res.data.message, "warning", false, "");
      // } else {
      //   toastify(res.data.message, "error", false, "");
      // }
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
          <p className="text-3xl text-blue-600 font-bold">
            Reset Your Password
          </p>

          <form
            className=" w-96 mt-6"
            noValidate
            onSubmit={handleSubmit(submit)}
          >
            <InputField
              labelName="New Password"
              inputName="newpassword"
              inputType="password"
              errors={errors}
              inputConfig={passwordConfig}
              control={control}
            />
            <InputField
              labelName="Retype Password"
              inputName="retypepassword"
              inputType="password"
              errors={errors}
              inputConfig={passwordConfig}
              control={control}
            />
            <LoadingButton
              load={load}
              buttonClassName="bg-blue-500 hover:bg-blue-700 text-white font-bold  mt-4"
              buttonText="Reset Password"
            />
            <div className="text-gray-400 flex justify-center font-medium mt-4 w-full  text-sm">
              Back to
              <Link
                href="/login"
                className="text-blue-500 hover:text-blue-700 ms-2"
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
