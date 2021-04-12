import axios from "axios";

export const API = axios.create({
  baseURL: "http://192.168.13.1:3333",
});
