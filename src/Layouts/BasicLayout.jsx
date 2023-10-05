import { Outlet } from 'react-router-dom';

const BasicLayout = () => {
  return (
    <main className="overflow-hidden relative items-center flex flex-col h-screen max-h-[700px] min-h-[700px] font-pt pt-5">
      <div className="border-[2px] overflow-hidden rounded-md max-w-[340px] w-full h-full relative flex flex-col">
        <div className="absolute z-10 left-0 bg-white top-0 flex items-center justify-start w-full h-6 px-2 border-b-[2px] gap-x-2">
          <div className="flex-shrink-0 w-2.5 h-2.5 bg-red-500 rounded-full"></div>
          <div className="flex-shrink-0 w-2.5 h-2.5 bg-yellow-500 rounded-full"></div>
          <div className="flex-shrink-0 w-2.5 h-2.5 bg-green-500 rounded-full"></div>

          <pre className='ml-auto text-sm'>{import.meta.env.MODE}</pre>
        </div>

        <div className="flex-1 max-h-full pt-5 overflow-auto">
          <Outlet />
        </div>
      </div>
    </main>
  );
};

export default BasicLayout;
