import axios from "axios";

export const instance = axios.create({
  // yousef: macpro
  // baseURL: "http://192.168.8.109:80/api/"

  // Buhamad: surface
  // baseURL: "http://192.168.8.109:80/api/"

  // Buhamad: acer
  baseURL: "http://172.20.10.3:80/api/"
});
