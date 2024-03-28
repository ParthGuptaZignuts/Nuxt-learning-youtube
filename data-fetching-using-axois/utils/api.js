// import axios from 'axios';

// const api = axios.create({
//   baseURL: 'https://fakestoreapi.com',
// });

// api.interceptors.response.use(
//   (response) => response.data,
//   (error) => {
//     if (error.response) {
//       console.error('Error status:', error.response.status);
//       console.error('Error data:', error.response.data);
//       return Promise.reject(error.response.data);
//     } else if (error.request) {
//       console.error('No response received:', error.request);
//       return Promise.reject('No response received');
//     } else {
//       console.error('Error setting up request:', error.message);
//       return Promise.reject(error.message);
//     }
//   }
// );

// export default api;
