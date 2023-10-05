import privateClient from '../client/private.client';

const contractEndpoints = {
  list: '/contract/list',
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
};

export default contractApi;
