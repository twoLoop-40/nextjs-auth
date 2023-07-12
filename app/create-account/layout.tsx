const CreateAccountLayout = ({ children }: { children: React.ReactNode }) => {
  return (
    <div className='w-96 p-6 flex flex-col bg-yellow-100 border-2 items-center border-gray-900 shadow-xl rounded-lg gap-y-5'>
      <h1 className='text-4xl font-serif font-bold'>Create Account</h1>
      <div className='w-full'>{children}</div>
    </div>
  );
};

export default CreateAccountLayout;
