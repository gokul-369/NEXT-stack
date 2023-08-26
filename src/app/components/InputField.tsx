import React from "react";
import { Controller, useFormContext } from "react-hook-form";

/* 
focus:border-red-500;
focus:ring-red-500
*/
function Error({ message }: { message: string }) {
  return <p className="mt-3 text-xs text-red-600">{message}</p>;
}
function InputField({
  labelName,
  inputName,
  inputType,
}: {
  labelName: string;
  inputName: string;
  inputType: string;
}) {
  const { control, formState } = useFormContext();

  return (
    <Controller
      name={inputName}
      control={control}
      render={({ field }) => (
        <div className="h-24">
          <label
            htmlFor={inputName}
            className="block mb-2 text-sm font-medium text-gray-500 dark:text-white "
          >
            {labelName}
          </label>
          <input
            type={inputType}
            className={`mt-1 block w-full px-3 py-2 bg-neutral-100 border border-slate-300 rounded-md text-sm shadow-sm placeholder-slate-400
      focus:outline-none  focus:bg-white focus:ring-1  invalid:bg-white ${
        formState.errors[inputName]
          ? "focus:border-red-500 focus:ring-red-500"
          : "focus:border-sky-500 focus:ring-sky-500 "
      }
     `}
            autoComplete="off"
            {...field}
          />
          {formState.errors[inputName] && (
            <Error
              message={formState.errors[inputName]!["message"]!?.toString()!}
            />
          )}
        </div>
      )}
    />
  );
}

export default React.memo(InputField);
