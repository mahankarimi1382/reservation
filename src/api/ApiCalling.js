import { Eror, success } from "@/components/ToastAlerts";
import { axiosConfig } from "./axiosConfig";
import axios from "axios";

export const signup = (setIsLoading, data, setIsValidateModal) => {
  setIsLoading(true);
  console.log(data);
  axiosConfig
    .post("Authentication/sign-up", data)
    .then((res) => {
      console.log(res);
      success(`کد تایید به شماره ی ${data.phoneNumber} پیامک شد`);
      setIsValidateModal(true);
    })
    .catch((err) => {
      setIsLoading(false);
      console.log(err.response);
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
    });
};
export const signin = (
  setIsLoading,
  data,
  setFullName,
  setToken,
  closeModal,
  setSmeId,
  setUserName
) => {
  console.log(data.userName);
  setIsLoading(true);
  axiosConfig
    .put("Authentication/sign-in", data)
    .then((res) => {
      setIsLoading(false);
      console.log(res);
      console.log(res.data);
      let name = res.data.result.userFullname;
      let token = res.data.result.token;
      let nationalCode = data.userName;
      setUserName(nationalCode);
      setToken(token);
      setFullName(name);
      success(`${name} خوش آمدید`);
      closeModal();
      create_sme_profile(name, nationalCode, token, setSmeId);
    })
    .catch((err) => {
      console.log(err);
      setIsLoading(false);
      if (err.message === "Network Error") {
        Eror("خطا در برقراری ارتباط !");
      } else {
        Eror("نام کاربری یا کلمه عبور اشتباه است !");
      }
    });
};
export const activating_registarion = (
  data,
  setIsWrongCode,
  setIsLoading,
  closeModal
) => {
  setIsLoading(true);
  console.log(activationCode);

  axiosConfig
    .post(`Authentication/activating-registration`, data)
    .then((res) => {
      console.log(res);
      success("ورود موفق");
      closeModal();
    })
    .catch((err) => {
      setIsLoading(false);
      Eror("کد وارد شده صحیح نمی باشد");
      setIsWrongCode(true);

      console.log(err.response.data.message);
    });
};
export const create_sme_profile = (Name, nationalCode, token, setSmeId) => {
  axios
    .post(
      "http://84.47.224.220:8040/API/v1/SmeProfile/create-sme-profile",
      {
        metadata: {
          userId: "3fa85f64-5717-4562-b3fc-2c963f66afa6",
          userName: nationalCode,
        },
        smeName: Name,
        nationalCode: nationalCode,
        businessCode: "",
        managerName: "",
        registerNumber: "",
        economyCode: "",
        permitNo: "",
        managerPhoneNumber: "",
        managerEmail: "",
        aboutUs: "",
        tellNumber: "",
        activitySubject: "",
        smeEmail: "",
        smeWebsite: "",
        address: "",
        status: true,
        cityId: 1,
        smeType: 1,
        industrialParkId: 1,
        logo: "",
        headerpic: "",
        postalcode: "",
        smeRankId: 2,
      },
      {
        headers: {
          Authorization: token,
        },
      }
    )
    .then((res) => {
      console.log(res);
      console.log(res.data.result.id);
      setSmeId(res.data.result.id);
    })
    .catch((err) => {
      console.log(err);
    });
};
export const add_specialties = (
  data,
  setIsLoading,
  setIsAddSpecialtiesModal
) => {
  setIsLoading(true);

  axiosConfig
    .post("Specialist/create-specialist", data)
    .then((res) => {
      setIsLoading(false);
      console.log(res);
      success("تخصص با موفقیت ثبت شد");
      setIsAddSpecialtiesModal(false);
      window.location.reload();
    })
    .catch((err) => {
      console.log(err);
      setIsLoading(false);
      Eror("خطا");
    });
};

export const get_specialties = async (url) => {
  try {
    const response = await axiosConfig.get(url);
    const specialties = response.data.result.list;
    console.log(specialties);
    return specialties;
  } catch (error) {
    console.error("Error fetching specialties:", error);
    return null;
  }
};
export const delete_specialties = async (id, route) => {
  console.log(id);
  try {
    const response = await axiosConfig.delete("Specialist/delete-specialist", {
      data: {
        metadata: {
          userId: "3fa85f64-5717-4562-b3fc-2c963f66afa6",
          userName: "0200013076",
        },
        id: id,
      },
    });
    console.log(response);
    window.location.reload();
  } catch (error) {
    console.log(error);
  }
};
