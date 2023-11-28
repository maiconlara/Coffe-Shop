import axios from "axios";

export const api = axios.create({
  baseURL: "http://192.168.100.43:3000",
  headers: {
    "Content-Type": "application/json",
    Accept: "application/json",
  },
});
