"use client";

import { useForm } from "react-hook-form";
import TextInput from "../components/text-input";
import SubmitBtn from "../components/submit-btn";
import { useRouter } from "next/navigation";

export interface FormOptions {
  [key: string]: any;
}

export interface CreateAccountValues {
  email: string;
  username: string;
}

const Page = () => {
  const router = useRouter();
  const {
    register,
    formState: { errors, isSubmitting },
    handleSubmit,
    reset,
  } = useForm<CreateAccountValues>({
    mode: "onChange",
    defaultValues: {
      email: "",
      username: "",
    },
  });

  const onAccountSubmit = (data: CreateAccountValues) => {
    fetch("/api/create-account", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(data),
    })
      .then((response) => response.json())
      .then((result) => {
        if (result.ok) {
          router.replace("/login");
        } else {
          reset();
        }
      })
      .catch((err) => console.log(err));
  };
  return (
    <div>
      <form
        className='w-full flex flex-col p-2 justify-center gap-y-4'
        onSubmit={handleSubmit(onAccountSubmit)}
      >
        <TextInput
          label='Username'
          register={register}
          errorMessage={errors.username?.message}
          name='username'
          key='username'
          formOptions={{ required: "Please Write down your username" }}
        />
        <TextInput
          label='Email'
          register={register}
          errorMessage={errors.email?.message}
          name='email'
          key='email'
          type='email'
          formOptions={{ required: "Please Write down your email" }}
        />
        <SubmitBtn label={isSubmitting ? "Submitting..." : "Submit"} />
      </form>
    </div>
  );
};

export default Page;
