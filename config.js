export const LOCAL_STORAGE_TOKEN_NAME = 'trackerToken';
export const API_URL =
  import.meta.env.MODE === 'development'
    ? 'http://localhost:5000/api/v1'
    : 'https://react-tracker-back.vercel.app/api/v1';
