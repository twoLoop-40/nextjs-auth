import { cookies } from "next/dist/client/components/headers";

type UserInfo = {
  username: string;
  email: string;
};

const Home = () => {
  const cookieStore = cookies();
  const userInfoString = cookieStore.get("userInfo")?.value as string;
  const { username, email } = JSON.parse(userInfoString) as UserInfo;

  return (
    <div className='flex flex-col justify-center items-center border-2 border-gray-900 p-4 gap-y-2'>
      <h1 className='text-3xl font-bold text-gray-800'>Welcome {username}</h1>
      <h2 className='text-xl font-bold text-gray-600'>Your email is {email}</h2>
    </div>
  );
};

export default Home;
