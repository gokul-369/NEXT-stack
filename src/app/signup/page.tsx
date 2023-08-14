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

export default function signUpPage() {
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
        buttonText="Ok"
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
    setLoad(true);
    const res = await axios.post("/api/users/signup", data);
    if (res.data.status === 200) {
      toastify(res.data.message, "success", true, "./login");
    } else {
      toastify(res.data.message, "warning", false, "");
    }
    try {
    } catch (error: any) {
      toastify(res.data.message, "error", false, "");
    } finally {
      setLoad(false);
    }
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
      <Toaster toastOptions={{ duration: Infinity }} />
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
          </form>
        </div>
      </LandingWrapper>
    </>
  );
}
