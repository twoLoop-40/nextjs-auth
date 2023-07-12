"use client";

import { useRouter } from "next/navigation";
import { useEffect } from "react";

interface HomeProps {
  username?: string;
  email?: string;
}

const Home = ({ username, email }: HomeProps) => {
  const router = useRouter();
  useEffect(() => {
    if (!username || !email) {
      router.replace("/login");
    }
  }, [username, email, router]);
  return (
    <div className='bg-orange-100 flex flex-col justify-center items-center border-2 border-gray-900 p-6 gap-y-4 rounded-xl'>
      <h1 className='text-3xl font-bold text-gray-800'>Welcome {username}</h1>
      <h2 className='text-2xl font-bold text-gray-600'>
        Your email is {email}
      </h2>
    </div>
  );
};

export default Home;
