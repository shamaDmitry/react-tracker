import { create } from 'zustand';
import { v4 as uuidv4 } from 'uuid';
import contractApi from '../api/modules/contract.api';

// const initData = [
//   {
//     id: uuidv4(),
//     title: 'CartelTech Projects',
//     client: 'test client',
//     workedTime: 1000000,
//   },
//   {
//     id: uuidv4(),
//     title: 'CartelTech Projects lorem',
//     client: 'test 2',
//     workedTime: 10000000,
//   },
//   {
//     id: uuidv4(),
//     title: 'test Projects lorem',
//     client: 'client',
//     workedTime: 10000000,
//   },
// ];

// const seedLocalStorage = data => {
//   localStorage.setItem('projects', JSON.stringify(data));
//   return data;
// };

const useContractStore = create((set, get) => ({
  contracts: [],
  contractsErr: [],
  getAllContract: async () => {
    const { response, err } = await contractApi.getAllContract();

    if (err) set({ contractsErr: err });

    set({ contracts: response });
  },
  getContract: contractId => {
    const filtered = get().projects.filter(
      contract => contract.id === contractId
    );
    return filtered[0];
  },
}));

export default useContractStore;
