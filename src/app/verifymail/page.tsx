"use client";
import { useForm, FormProvider } from "react-hook-form";
import { useState } from "react";
import axios from "axios";
import { Toaster } from "react-hot-toast";
import Link from "next/link";
import { yupResolver } from "@hookform/resolvers/yup";

import LandingWrapper from "../components/LandingWrapper";
import InputField from "../components/InputField";
import LoadingButton from "../components/LoadingButton";
import { toastify } from "../components/CustomToast";
import { verifyMailValidationSchema, configConstants } from "@/helpers/configs";

export default function VerifiyMailPage() {
  const [load, setLoad] = useState(false);
  const methods = useForm({
    resolver: yupResolver(verifyMailValidationSchema),
  });

  const submit = async (data: object) => {
    try {
      setLoad(true);
      const res = await axios.post("/api/auth/forgotpassword/verifyuser", {
        ...data,
        purpose: configConstants.FORGOT_PASSWORD,
      });
      if (res.data.status === 200) {
        toastify(res.data.message, "success", false, "");
      } else if (res.data.status === 204) {
        toastify(res.data.message, "warning", false, "");
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
          <p className="text-3xl text-blue-600 font-bold">Verify Email</p>
          <span className="text-gray-400 flex justify-center font-medium mt-4 w-full  text-sm">
            To reset your password you need to verify your Email
          </span>
          <FormProvider {...methods}>
            <form
              className=" w-96 mt-6"
              noValidate
              onSubmit={methods.handleSubmit(submit)}
            >
              <InputField
                labelName="Email ID"
                inputName="email"
                inputType="email"
              />
              <LoadingButton
                load={load}
                buttonClassName="bg-blue-500 hover:bg-blue-700 text-white font-bold  mt-4"
                buttonText="Verify Email"
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
          </FormProvider>
        </div>
      </LandingWrapper>
    </>
  );
}
