import { Link } from 'react-router-dom';
import Logo from '../assets/logo.svg?react';

const ProjectsList = () => {
  return (
    <div className="outline flex flex-col self-center flex-1 w-full ProjectsList max-w-[340px] bg-secondary-100 h-screen">
      <div className="bg-white py-[10px] px-[17px]">
        <Logo className="w-[90px] h-[16px] mb-3" />

        <div className="flex items-center justify-between mb-2">
          <input type="text" className="px-4 py-2 border" />

          <button>N</button>
        </div>

        <div className="flex items-center justify-between">
          <div className="text-sm text-dark-300">Contract Name</div>
          <div className="text-sm text-dark-300">Hours this week</div>
        </div>
      </div>

      <div className="flex flex-col relative flex-1 overflow-y-auto pt-[10px]">
        <Link
          className="flex justify-between px-4 py-3 mb-[5px] bg-white"
          to="/settings-server"
        >
          <span>Workshop</span>
          <span>12:30</span>
        </Link>

        <div className="sticky bottom-0 left-0 w-full p-4 mt-auto bg-red-400">
          footer
        </div>
      </div>
    </div>
  );
};

export default ProjectsList;
