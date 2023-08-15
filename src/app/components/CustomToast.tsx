"use client";
import React, { useState, useEffect } from "react";

var info = (
  <path d="M8 16A8 8 0 1 0 8 0a8 8 0 0 0 0 16zm.93-9.412-1 4.705c-.07.34.029.533.304.533.194 0 .487-.07.686-.246l-.088.416c-.287.346-.92.598-1.465.598-.703 0-1.002-.422-.808-1.319l.738-3.468c.064-.293.006-.399-.287-.47l-.451-.081.082-.381 2.29-.287zM8 5.5a1 1 0 1 1 0-2 1 1 0 0 1 0 2z" />
);
var success = (
  <path d="M16 8A8 8 0 1 1 0 8a8 8 0 0 1 16 0zm-3.97-3.03a.75.75 0 0 0-1.08.022L7.477 9.417 5.384 7.323a.75.75 0 0 0-1.06 1.06L6.97 11.03a.75.75 0 0 0 1.079-.02l3.992-4.99a.75.75 0 0 0-.01-1.05z" />
);
var error = (
  <path d="M16 8A8 8 0 1 1 0 8a8 8 0 0 1 16 0zM5.354 4.646a.5.5 0 1 0-.708.708L7.293 8l-2.647 2.646a.5.5 0 0 0 .708.708L8 8.707l2.646 2.647a.5.5 0 0 0 .708-.708L8.707 8l2.647-2.646a.5.5 0 0 0-.708-.708L8 7.293 5.354 4.646z" />
);
var warning = (
  <path d="M16 8A8 8 0 1 1 0 8a8 8 0 0 1 16 0zM8 4a.905.905 0 0 0-.9.995l.35 3.507a.552.552 0 0 0 1.1 0l.35-3.507A.905.905 0 0 0 8 4zm.002 6a1 1 0 1 0 0 2 1 1 0 0 0 0-2z" />
);

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
function CustomToast({
  variant,
  message,
  onClose,
  buttonText,
  toastObject,
}: {
  variant: string;
  message: string;
  onClose: React.MouseEventHandler<HTMLButtonElement>;
  buttonText: string;
  toastObject: any;
}) {
  const [btnTheme, setBtnTheme] = useState({
    svg: <></>,
    color: "",
  });

  useEffect(() => {
    if (variant === "success") {
      setBtnTheme({
        svg: success,
        color: "green",
      });
    } else if (variant === "error") {
      setBtnTheme({
        svg: error,
        color: "red",
      });
    } else if (variant === "warning") {
      setBtnTheme({
        svg: warning,
        color: "orange",
      });
    } else if (variant === "info") {
      setBtnTheme({
        svg: info,
        color: "blue",
      });
    }
  }, []);

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
          onClick={onClose}
        >
          {buttonText}
        </button>
      </div>
    </div>
  );
}

export default CustomToast;
