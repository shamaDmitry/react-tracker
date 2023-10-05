import { Link } from 'react-router-dom';
import Logo from '../assets/logo.svg?react';
import Settings from '../assets/icons/settings.svg?react';
import Search from '../assets/icons/search.svg?react';
import Footer from '../Components/blocks/Footer';
import formatterTime from '../helpers/formatterTime';
import { useEffect, useState } from 'react';
import useContractStore from '../store/useContractStore';

const ProjectsList = () => {
  const [searchTerm, setSearchTerm] = useState('');
  const [contracts, getAllContract] = useContractStore(store => [
    store.contracts,
    store.getAllContract,
  ]);

  useEffect(() => {
    getAllContract();
    return () => {};
  }, [getAllContract]);

  return (
    <div className="flex-1 flex flex-col w-full ProjectsList max-w-[340px] bg-secondary-100">
      <div className="bg-white py-[10px] px-[17px]">
        <Logo className="w-[90px] h-[16px] mb-3" />

        <div className="flex items-center justify-between gap-3 mb-2">
          <div className="relative flex items-center w-full">
            <Search className="absolute -translate-y-1/2 text-primary-500 left-3 top-1/2" />
            <Search className="absolute -translate-y-1/2 text-primary-500 left-3 top-1/2" />

            <input
              type="text"
              placeholder="Search contracts"
              className="w-full px-4 py-2 pl-8 border rounded-full"
              onChange={e => setSearchTerm(e.target.value)}
            />
          </div>

          {/* <button className="text-primary-500 hover:text-primary-400">
            <Settings />
          </button> */}
        </div>

        <div className="flex items-center justify-between">
          <div className="text-sm text-dark-300">Contract Name</div>
          <div className="text-sm text-dark-300">Hours this week</div>
        </div>
      </div>

      <div className="flex flex-col relative flex-1 overflow-y-auto pt-[10px]">
        <pre>{JSON.stringify(contracts, null, 2)}</pre>

        {contracts
          .filter(contract =>
            contract.contractName.toLowerCase().includes(searchTerm.toLowerCase())
          )
          .map(contract => {
            const { hours, minutes } = formatterTime(contract.workedTime);

            return (
              <Link
                key={contract.id}
                className="flex text-sm justify-between px-4 py-3 mb-[5px] bg-white"
                to={`/project/${contract.id}`}
              >
                <span className="text-dark-300">{contract.contractName}</span>
                <span className="text-primary-500 whitespace-nowrap">
                  {hours.toString().padStart(2, '0')} :{' '}
                  {minutes.toString().padStart(2, '0')}
                </span>
              </Link>
            );
          })}

        <div className="sticky bottom-0 left-0 w-full p-4 mt-auto bg-white">
          <Footer />
        </div>
      </div>
    </div>
  );
};

export default ProjectsList;
