import axios from "axios";
import Cookies from "js-cookie";

const token = Cookies.get("token");
console.log(token);
export const axiosConfig = axios.create({
  baseURL: "https://84.47.224.220:8040/API/v1/",
  headers: {
    "Content-Type": "application/json",
    Authorization: token || "",
  },
});
