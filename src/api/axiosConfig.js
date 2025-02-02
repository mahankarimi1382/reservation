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
    if (
      err.response.data.message &&
      err.response.data.message.message ===
        "نام کاربری یا شماره تلفن صحیح نمیباشد ."
    ) {
      Eror(err.response.data.message.message);
    } else if (
      err.response.data.message &&
      err.response.data.message.message ==
        `نام کاربری ${data.userName} قبلا توسط شخص دیگری انتخاب شده است`
    ) {
      Eror(err.response.data.message.message);
    } else if (err.response.data.code == 500) {
      Eror("گذرواژه باید شامل حروف بزرگ و عدد باشد");
    }
    return Promise.reject(err);
  }
);
