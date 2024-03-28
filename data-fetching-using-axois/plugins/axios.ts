import axios from "axios";

let axiosInstance = axios.create({
  baseURL: 'https://fakestoreapi.com',
//   headers: {
//     common: {
//       Authorization: `Basic ${token}`,
//     },
//   },
});

export default defineNuxtPlugin(async () => {
  return {
    provide: {
      axios: axiosInstance,
    },
  };
});
