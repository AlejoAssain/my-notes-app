import axios, {AxiosInstance} from 'axios';


export const generateHeader = (token: string) => {
  return {
    headers: {
      "Authorization": "Bearer " + token
    }
  };
};


export const apiClientService: AxiosInstance = axios.create({
  baseURL: import.meta.env.VITE_API_URL
});
