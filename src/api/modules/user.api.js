import privateClient from '../client/private.client';
import publicClient from '../client/public.client';

const userEndpoints = {
  signin: '/user/signin',
  signup: '/user/signup',
  test: '/user/test',
};

const userApi = {
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

  signup: async ({ username, email, password }) => {
    try {
      const response = await publicClient.post(userEndpoints.signup, {
        username,
        email,
        password,
      });

      return { response };
    } catch (err) {
      return { err };
    }
  },

  test: async () => {
    try {
      const response = await privateClient.get(userEndpoints.test);
      return { response };
    } catch (err) {
      return { err };
    }
  },
};

export default userApi;
