"use client";
import { useForm, FormProvider } from "react-hook-form";
import { useState } from "react";
import { Toaster } from "react-hot-toast";
import Link from "next/link";
import axios from "axios";
import { yupResolver } from "@hookform/resolvers/yup";

import InputField from "@/app/components/InputField";
import LoadingButton from "@/app/components/LoadingButton";
import { toastify } from "@/app/components/CustomToast";
import { signupValidationSchema } from "@/helpers/configs";

export default function SignUpPage() {
  const [load, setLoad] = useState(false);
  const methods = useForm({
    resolver: yupResolver(signupValidationSchema),
  });

  const submit = async (data: object) => {
    try {
      setLoad(true);
      const res = await axios.post("/api/auth/signup", data);
      if (res.data.status === 200) {
        toastify(res.data.message, "success", "/public/login");
      } else {
        toastify(res.data.message, "warning", "");
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
      <p className="text-3xl text-blue-600 font-bold">Sign Up</p>
      <FormProvider {...methods}>
        <form
          className=" w-96 mt-6"
          noValidate
          onSubmit={methods.handleSubmit(submit)}
        >
          <InputField labelName="Email ID" inputName="email" inputType="text" />
          <InputField
            labelName="User Name"
            inputName="userName"
            inputType="text"
          />
          <InputField
            labelName="Password"
            inputName="password"
            inputType="password"
          />
          <LoadingButton
            load={load}
            buttonClassName="bg-blue-500 hover:bg-blue-700 text-white font-bold  mt-4"
            buttonText="Sign Up"
          />
          <div className="text-gray-400 text-center font-medium text-sm mt-3 w-full">
            <span>Already registered ? then </span>
            <Link
              href="/public/login"
              className="text-blue-500 hover:text-blue-700"
            >
              Login
            </Link>
          </div>
        </form>
      </FormProvider>
    </div>
  );
}
