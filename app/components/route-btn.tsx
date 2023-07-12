import Link from "next/link";

interface RouteBtnProps {
  label: string;
  href: string;
}

const RouteBtn = ({ label, href }: RouteBtnProps) => {
  return (
    <div className='transform hover:-translate-y-1 ease-linear duration-100 w-full font-bold bg-blue-500 hover:bg-blue-700 text-white flex justify-center items-center  py-2 px-4 rounded shadow-lg'>
      <button className='w-full'>
        <Link className='w-full' href={href}>
          {label}
        </Link>
      </button>
    </div>
  );
};

export default RouteBtn;
