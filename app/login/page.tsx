"use client";

import { useForm } from "react-hook-form";
import TextInput from "../components/text-input";
import SubmitBtn from "../components/submit-btn";
import RouteBtn from "@components/route-btn";
import { useRouter } from "next/navigation";

export interface FormOptions {
  [key: string]: any;
}

export interface AccountValues {
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
  } = useForm<AccountValues>({
    mode: "onChange",
    defaultValues: {
      email: "",
      username: "",
    },
  });

  const onLoginSubmit = (data: AccountValues) => {
    fetch("/api/login", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(data),
    })
      .then(async (response) => {
        router.replace("/");
      })
      .catch((err) => {
        reset();
        console.log(err);
      });
  };

  return (
    <div>
      <form
        className='w-full flex flex-col p-2 justify-center gap-y-4'
        onSubmit={handleSubmit(onLoginSubmit)}
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
        <div className='grid grid-cols-2 gap-x-2'>
          <SubmitBtn label={isSubmitting ? "Submitting..." : "Login"} />{" "}
          <RouteBtn label='Create Account' href='/create-account' />
        </div>
      </form>
    </div>
  );
};

export default Page;
