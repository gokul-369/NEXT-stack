"use client";
import { useState, useEffect } from "react";
import axios from "axios";
import { Toaster } from "react-hot-toast";
import { yupResolver } from "@hookform/resolvers/yup";
import { useForm, FormProvider } from "react-hook-form";
import { useRouter, useSearchParams } from "next/navigation";
import Link from "next/link";

import InputField from "@/app/components/InputField";
import LoadingButton from "@/app/components/LoadingButton";
import { toastify } from "@/app/components/CustomToast";
import { forgotPasswordValidationSchema } from "@/helpers/configs";

export default function ForgotPasswordPage() {
  const search = useSearchParams();
  const router = useRouter();
  const [load, setLoad] = useState(false);
  const [token, setToken] = useState("");
  useEffect(() => {
    if (search.get("token")) {
      setToken(search.get("token")!.toString());
    } else {
      router.push("/login");
    }
  }, []);

  const methods = useForm({
    resolver: yupResolver(forgotPasswordValidationSchema),
  });

  const submit = async (data: object) => {
    try {
      setLoad(true);
      const res = await axios.post("/api/auth/forgotpassword", {
        ...data,
        token,
      });
      if (res.data.status === 200) {
        toastify(res.data.message, "success", "/public/login");
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
      <p className="text-3xl text-blue-600 font-bold">Reset Your Password</p>
      <FormProvider {...methods}>
        <form
          className=" w-96 mt-6"
          noValidate
          onSubmit={methods.handleSubmit(submit)}
        >
          <InputField
            labelName="New Password"
            inputName="password"
            inputType="password"
          />
          <InputField
            labelName="Confirm Password"
            inputName="confirmPassword"
            inputType="password"
          />
          <LoadingButton
            load={load}
            buttonClassName="bg-blue-500 hover:bg-blue-700 text-white font-bold  mt-4"
            buttonText="Reset Password"
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
