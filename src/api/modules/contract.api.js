import privateClient from '../client/private.client';

const contractEndpoints = {
  list: '/contract/list',
  oneContract: ({ contractId }) => `/contract/${contractId}`,
};

const contractApi = {
  getAllContract: async () => {
    try {
      const response = await privateClient.get(contractEndpoints.list);

      return { response };
    } catch (err) {
      return { err };
    }
  },

  getContract: async ({ contractId }) => {
    try {
      const response = await privateClient.get(
        contractEndpoints.oneContract({ contractId })
      );

      return { response };
    } catch (err) {
      return { err };
    }
  },
};

export default contractApi;
