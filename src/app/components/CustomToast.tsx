"use client";
import { useState, useEffect } from "react";
import toast, { Toast } from "react-hot-toast";
import { useRouter } from "next/navigation";

import {
  CheckBadgeIcon,
  XCircleIcon,
  InformationCircleIcon,
  ExclamationTriangleIcon,
} from "@heroicons/react/24/solid";
/* tailwind colors
text-green-500
bg-green-200
hover:bg-green-300
text-red-500
bg-red-200
hover:bg-red-300
text-orange-500
bg-orange-200
hover:bg-orange-300
text-blue-500
bg-blue-200
hover:bg-blue-300
*/
export function toastify(message: string, variant: string, path: string): void {
  toast.custom((t: Toast) => {
    return (
      <CustomToast
        variant={variant}
        message={message}
        buttonText="OK"
        toastObject={t}
        onClose={(): string => {
          toast.dismiss(t?.id);
          return path;
        }}
      />
    );
  });
}
function CustomToast({
  variant,
  message,
  onClose,
  buttonText,
  toastObject,
}: {
  variant: string;
  message: string;
  onClose: Function;
  buttonText: string;
  toastObject: any;
}) {
  const [btnTheme, setBtnTheme] = useState({
    svg: <></>,
    color: "",
  });
  const router = useRouter();
  useEffect(() => {
    if (variant === "success") {
      setBtnTheme({
        svg: <CheckBadgeIcon />,
        color: "green",
      });
    } else if (variant === "error") {
      setBtnTheme({
        svg: <XCircleIcon />,
        color: "red",
      });
    } else if (variant === "warning") {
      setBtnTheme({
        svg: <ExclamationTriangleIcon />,
        color: "orange",
      });
    } else if (variant === "info") {
      setBtnTheme({
        svg: <InformationCircleIcon />,
        color: "blue",
      });
    }
  }, []);
  const handleClose = () => {
    const redirect = onClose();
    if (redirect) {
      router.push(redirect);
    }
  };
  return (
    <div
      className={`w-auto bg-white border rounded-md shadow-lg dark:bg-gray-800 dark:border-gray-700  ${
        toastObject.visible ? "animate-enter" : "animate-leave"
      }`}
      role="alert"
    >
      {" "}
      <div className="flex justify-between items-center p-4">
        <div className="flex items-center flex-shrink-0">
          <svg
            className={`text-${btnTheme.color}-500 h-6 w-6 mt-0.5`}
            xmlns="http://www.w3.org/2000/svg"
            width="16"
            height="16"
            fill="currentColor"
            viewBox="0 0 16 16"
          >
            {btnTheme.svg}
          </svg>
          <div className="ml-4 break-words">
            <p className="text-base text-gray-700 dark:text-gray-400">
              {message}
            </p>
          </div>
        </div>
        <button
          className={`bg-${btnTheme.color}-200 text-sm px-2 py-1 text-${btnTheme.color}-500 font-semibold rounded-md ml-4 transition-all hover:bg-${btnTheme.color}-300
         `}
          onClick={handleClose}
        >
          {buttonText}
        </button>
      </div>
    </div>
  );
}
