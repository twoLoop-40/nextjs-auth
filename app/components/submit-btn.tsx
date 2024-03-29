interface SubmitBtnProps {
  label: string;
}

const SubmitBtn = ({ label }: SubmitBtnProps) => {
  return (
    <button className='shadow-lg bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded transform hover:-translate-y-1 ease-linear duration-100'>
      {label}
    </button>
  );
};

export default SubmitBtn;
