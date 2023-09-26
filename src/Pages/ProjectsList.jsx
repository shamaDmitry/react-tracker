import { Link } from 'react-router-dom';
import Logo from '../assets/logo.svg?react';
import Settings from '../assets/icons/settings.svg?react';
import Search from '../assets/icons/search.svg?react';
import Footer from '../Components/blocks/Footer';

const ProjectsList = () => {
  return (
    <div className="outline flex flex-col self-center flex-1 w-full ProjectsList max-w-[340px] bg-secondary-100 h-screen">
      <div className="bg-white py-[10px] px-[17px]">
        <Logo className="w-[90px] h-[16px] mb-3" />

        <div className="flex items-center justify-between gap-3 mb-2">
          <div className="relative flex items-center w-full">
            <Search className="absolute -translate-y-1/2 text-primary-500 left-3 top-1/2" />

            <input
              type="text"
              placeholder="Search contracts"
              className="w-full px-4 py-2 pl-8 border rounded-full"
            />
          </div>

          <button className="text-primary-500 hover:text-primary-400">
            <Settings />
          </button>
        </div>

        <div className="flex items-center justify-between">
          <div className="text-sm text-dark-300">Contract Name</div>
          <div className="text-sm text-dark-300">Hours this week</div>
        </div>
      </div>

      <div className="flex flex-col relative flex-1 overflow-y-auto pt-[10px]">
        <Link
          className="flex text-sm justify-between px-4 py-3 mb-[5px] bg-white"
          to="/project/1"
        >
          <span className="text-dark-300">Workshop Workshop Workshop Workshop Workshop Workshop Workshop Workshop Workshop </span>
          <span className="text-primary-500">0:30</span>
        </Link>

        <Link
          className="flex text-sm justify-between px-4 py-3 mb-[5px] bg-white"
          to="/project/1"
        >
          <span className="text-dark-300">CartelTech Projects</span>
          <span className="text-primary-500">2:30</span>
        </Link>

        <div className="sticky bottom-0 left-0 w-full p-4 mt-auto bg-white">
          <Footer />
        </div>
      </div>
    </div>
  );
};

export default ProjectsList;
