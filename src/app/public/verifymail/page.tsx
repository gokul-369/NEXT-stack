"use client";
import { useForm, FormProvider } from "react-hook-form";
import { useState } from "react";
import axios from "axios";
import { Toaster } from "react-hot-toast";
import Link from "next/link";
import { yupResolver } from "@hookform/resolvers/yup";

import InputField from "@/app/components/InputField";
import LoadingButton from "@/app/components/LoadingButton";
import { toastify } from "@/app/components/CustomToast";
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
        toastify(res.data.message, "success", "");
      } else if (res.data.status === 204) {
        toastify(res.data.message, "warning", "");
      } else {
        toastify(res.data.message, "error", "");
      }
    } catch (error: any) {
      toastify(error.message, "error", "");
    } finally {
      setLoad(false);
    }
  };
  return (
    <div className="h-screen px-14 flex items-center flex-col justify-center">
      <Toaster toastOptions={{ duration: Infinity }} />
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
              href="/public/login"
              className="text-blue-500 hover:text-blue-700 ms-2"
            >
              Login
            </Link>
          </div>
        </form>
      </FormProvider>
    </div>
  );
}
