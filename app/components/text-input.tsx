"use client";

import { FormOptions } from "../create-account/page";

interface TextInputProps {
  formOptions?: FormOptions;
  label: string;
  register: any;
  type?: string;
  name: string;
  errorMessage?: string;
}

const TextInput = ({
  label,
  register,
  errorMessage,
  formOptions,
  type,
  name,
}: TextInputProps) => {
  return (
    <div className='w-full flex flex-col justify-center'>
      <label className='text-md text-gray-600 font-bold'>{label}</label>
      <input
        className='border border-gray-300 rounded mt-1 p-2'
        {...register(name, formOptions)}
        type={type}
      />
      {errorMessage && (
        <span className='text-sm text-red-600'>{errorMessage}</span>
      )}
    </div>
  );
};

export default TextInput;
