import axios from "axios";
import useAuth from "./useAuth";
import { useEffect } from "react";

// // // for jwt token store in http only cookie method:
// const axiosInstance = axios.create({
//   baseURL: "http://localhost:4000",
//   withCredentials: true,
// });

// const useAxiosSecure = () => {
//   return axiosInstance;
// };

//// for firebase or jwt token store in local storage method:
// const axiosInstance = axios.create({
//   baseURL: "http://localhost:4000",
// });

// const useAxiosSecure = () => {
//   const { user } = useAuth();
//   console.log(user);

//   //   const localStorageToken = localStorage.getItem("token");
//   const firebaseUserAccessToken = user.accessToken;
//   axiosInstance.interceptors.request.use((config) => {
//     console.log(config);
//     config.headers.authorization = `Bearer ${firebaseUserAccessToken}`;
//     return config;
//   });
//   return axiosInstance;
// };

const axiosInstance = axios.create({
  baseURL: "http://localhost:4000",
});

const useAxiosSecure = () => {
  const { user } = useAuth();
  useEffect(() => {
    const requestInterceptor = axiosInstance.interceptors.request.use(
      (config) => {
        config.headers.Authorization = `Bearer ${user.accessToken}`;
        return config;
      }
    );

    return () => {
      axiosInstance.interceptors.request.eject(requestInterceptor);
    };
  }, [user.accessToken]);

  return axiosInstance;
};
export default useAxiosSecure;
