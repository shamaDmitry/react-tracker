import { create } from 'zustand';
import contractApi from '../api/modules/contract.api';

const useContractStore = create((set, get) => ({
  contracts: [],
  contract: null,
  contractsErr: [],
  getAllContract: async () => {
    const { response, err } = await contractApi.getAllContract();

    if (err) set({ contractsErr: err });

    set({ contracts: response });
  },
  getContract: async contractId => {
    const { response, err } = await contractApi.getContract({ contractId });
    set({ contract: response });
  },
  setContract: async data => set({ contract: data }),
}));

export default useContractStore;
