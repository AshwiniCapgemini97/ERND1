import axios from "axios";
import { apiBaseURL } from "../constants/constant";

const httpClient = axios.create({
  baseURL: apiBaseURL,
  headers: {
    Accept: "*/*",
  },
});

export const Api = {
  get(url, params = {}) {
    return httpClient.get(url, { params });
  },

  delete(url, params = {}) {
    return httpClient.delete(url, { params });
  },

  post(url, data) {
    return httpClient.post(url, data);
  },

  put(url, data) {
    return httpClient.put(url, data);
  },

  patch(url, data) {
    return httpClient.patch(url, data);
  },
};
