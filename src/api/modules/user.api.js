// import privateClient from '../client/private.client';
import publicClient from '../client/public.client';

const userEndpoints = {
  signin: '/user/signin',
  signup: '/user/signup',
};

const userApi = {
  // signup: async ({ username, email, password }) => {},
  signin: async ({ email, password }) => {
    try {
      const response = await publicClient.post(userEndpoints.signin, {
        email,
        password,
      });

      return { response };
    } catch (err) {
      return { err };
    }
  },
};

export default userApi;
