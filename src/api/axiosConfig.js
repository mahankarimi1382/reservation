// import axios from "axios";
// import Cookies from "js-cookie";

// const token = Cookies.get("token");
// console.log(token);
// export const axiosConfig = axios.create({
//   baseURL: "https://myapi.dadehavaran.com:8040/API/v1/",
//   headers: {
//     "Content-Type": "application/json",
//     Authorization: token || "",
//   },
// });
import { Eror } from "@/components/ToastAlerts";
import axios from "axios";
import Cookies from "js-cookie";

const token = Cookies.get("token");
console.log(token);

export const axiosConfig = axios.create({
  baseURL: "https://myapi.dadehavaran.com:8040/API/v1/",
  headers: {
    "Content-Type": "application/json",
    Authorization: token || "",
  },
});

axiosConfig.interceptors.response.use(
  (response) => {
    return response;
  },
  (err) => {
    console.log(err);
    if (err.message == "Network Error") {
      Eror("خطا در برقراری ارتباط !");
    } else if (
      err.response &&
      err.response.data.message.message ==
        "حجم فایل برای ذخیره در بیس64 زیاد است !"
    ) {
      Eror("حجم فایل بیش از حد مجاز است");
    } 
    else if (err.response && err.response.data.message.message) {
      Eror(err.response.data.message.message);
    }
    return Promise.reject(err);
  }
);
