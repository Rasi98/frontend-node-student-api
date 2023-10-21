import axios, { Method, AxiosResponse } from "axios";

const apiInstance = axios.create({
  baseURL: "http://localhost:3000/api",
  timeout: 5000,
  headers: {
    "Content-Type": "application/json",
  },
});

const ApiRequest = <T>(
  method: Method,
  url: string,
  data: unknown
): Promise<AxiosResponse<T>> => {
  return apiInstance.request<T>({
    method,
    url,
    data,
  });
};

export default ApiRequest;
