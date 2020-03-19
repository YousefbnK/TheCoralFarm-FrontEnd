import axios from "axios";

export const instance2 = axios.create({
  baseURL: "http://192.168.137.1:80/api/"
});
