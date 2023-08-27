"use client";
import { useState } from "react";
import { useRouter } from "next/navigation";
import { useForm, FormProvider } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import axios from "axios";
import { Toaster } from "react-hot-toast";
import Link from "next/link";

// import LandingWrapper from "../../components/LandingWrapper";
import InputField from "@/app/components/InputField";
import LoadingButton from "@/app/components/LoadingButton";
import { toastify } from "@/app/components/CustomToast";
import { loginValidationSchema } from "@/helpers/configs";

export default function LoginPage() {
  const [load, setLoad] = useState(false);
  const methods = useForm({
    resolver: yupResolver(loginValidationSchema),
  });
  const router = useRouter();
  const submit = async (data: object) => {
    try {
      setLoad(true);
      const res = await axios.post("/api/auth/login", data);
      if (res.data.status === 200) {
        router.push(`/profile`);
      } else if (res.data.status === 204) {
        toastify(res.data.message, "info", "");
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
      <p className="text-3xl text-blue-600 font-bold">Login</p>
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
          <InputField
            labelName="Password"
            inputName="password"
            inputType="password"
          />
          <div className="text-gray-400 flex justify-between font-medium mt-4 w-full  text-sm">
            <span>
              New here ? then{" "}
              <Link
                href="/public/signup"
                className="text-blue-500 hover:text-blue-700 "
              >
                Sign Up
              </Link>
            </span>

            <Link
              href="/public/verifymail"
              className="text-blue-500 hover:text-blue-700"
            >
              Forgot your password ?
            </Link>
          </div>
          <LoadingButton
            load={load}
            buttonClassName="bg-blue-500 hover:bg-blue-700 text-white font-bold  mt-4"
            buttonText="Login"
          />
        </form>
      </FormProvider>
    </div>
  );
}
