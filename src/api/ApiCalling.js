import { Eror, success } from "@/components/ToastAlerts";
import { axiosConfig } from "./axiosConfig";
import axios from "axios";
import { ErrorHandler } from "@/utils/ErrorHandler";
export const signup = (setIsLoading, data, setIsValidateModal) => {
  setIsLoading(true);
  console.log(data);
  axiosConfig
    .post("Authentication/sign-up", data)
    .then((res) => {
      console.log(res);
      if (data.phoneNumber == "string") {
        success(`کد تایید به شماره ی ${data.userName} پیامک شد`);
      } else {
        success(`کد تایید به شماره ی ${data.phoneNumber} پیامک شد`);
      }
      setIsValidateModal(true);
      setIsLoading(false);
    })
    .catch((err) => {
      setIsLoading(false);
      console.log(err);
    });
};
export const signin = (
  setIsLoading,
  data2,
  setFullName,
  setToken,
  closeModal,
  setSmeId
) => {
  console.log(data2);
  setIsLoading(true);
  axiosConfig
    .put("Authentication/sign-in", data2)
    .then((res) => {
      setIsLoading(false);
      console.log(res);
      console.log(res.data);
      let token = res.data.result.token;
      let name = res.data.result.userFullname;
      let smeId = res.data.result.smeprofileId;
      setSmeId(smeId);
      setToken(token);
      setFullName(name);
      success(`${name} خوش آمدید`);
      closeModal();
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
  code,
  phoneNumber,
  setIsWrongCode,
  setIsLoading,
  closeModal,
  setToken,
  setFullName,
  setSmeId
) => {
  setIsLoading(true);
  axiosConfig
    .post(`Authentication/activating-registration`, {
      metadata: {
        userId: "3fa85f64-5717-4562-b3fc-2c963f66afa6",
        userName: "string",
      },
      mobile: phoneNumber,
      activationCode: code,
    })
    .then((res) => {
      console.log(res);
      success("ورود موفق");
      closeModal();
      setFullName(res.data.result.userFullname);
      setToken(res.data.result.token);
      if (res.data.result.userFullname != "string") {
        let name = res.data.result.userFullname;
        setSmeId(create_sme_profile(name, token));
      }
    })
    .catch((err) => {
      setIsLoading(false);
      Eror("کد وارد شده صحیح نمی باشد");
      setIsWrongCode(true);
    });
};
export const create_sme_profile = (name, token) => {
  axios
    .post(
      "https://myapi.dadehavaran.com:8040/API/v1/SmeProfile/create-sme-profile",
      {
        metadata: {
          userId: "3fa85f64-5717-4562-b3fc-2c963f66afa6",
          userName: "",
        },
        smeName: name,
        nationalCode: "",
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
      return res.data.result.id;
    })
    .catch((err) => {
      console.log(err);
    });
};
export const add_specialties = (data, setIsLoading, setIsAddSpecialModal) => {
  setIsLoading(true);
  console.log(data);
  axiosConfig
    .post("Specialist/create-specialist", data)
    .then((res) => {
      setIsLoading(false);
      console.log(res);
      success("تخصص با موفقیت ثبت شد");
      setIsAddSpecialModal(false);
    })
    .catch((err) => {
      console.log(err);
      setIsLoading(false);
    });
};

export const get_specialties = async (url) => {
  try {
    const response = await axiosConfig.get(url);
    const specialties = response.data.result.list;
    return specialties;
  } catch (error) {
    console.error("Error fetching specialties:", error);
    return null;
  }
};
export const delete_specialties = async (id, setList, closeModal) => {
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
    const url = "Specialist/read-specialists";

    const data = await get_specialties(url);
    if (data) {
      setList(data);
    }
    success("تخصص با موفقیت حذف شد");
    closeModal();
    console.log(response);
  } catch (error) {
    console.log(error);
    Eror("امکان حذف این تخصص وجود ندارد");
  }
};
export const get_province = async () => {
  try {
    const response = await axiosConfig.get("Province/read-province");
    const provinces = response.data.result.list;
    console.log(provinces);
    return provinces;
  } catch (error) {
    console.error("Error fetching specialties:", error);
    return null;
  }
};
export const read_city = (id, setCities) => {
  axiosConfig
    .post("City/read-city", {
      metadata: {
        userId: "3fa85f64-5717-4562-b3fc-2c963f66afa6",
        userName: "string",
      },
      provinceId: id,
    })
    .then((res) => {
      console.log(res);
      setCities(res.data.result.list);
    })
    .catch((err) => {
      console.log(err);
    });
};
export const add_doctor = (data, setIsLoading, setIsAddDoctorModal) => {
  console.log(data);
  axiosConfig
    .post("Doctor/create-doctor", data)
    .then((res) => {
      console.log(res);
      success("پزشک با موفقیت ثبت شد");
      setIsAddDoctorModal(false);
      setIsLoading(false);
    })
    .catch((err) => {
      console.log(err);
      setIsLoading(false);
    });
};
export const add_article = (data, setLoading) => {
  console.log(data);
  axiosConfig
    .post("Article/create-articles", data)
    .then((res) => {
      setLoading(false);
      console.log(res);
      success(`مقاله با عنوان ${data.title} ثبت شد`);
    })
    .catch((err) => {
      setLoading(false);
      Eror();
      console.log(err);
    });
};

export const upload_file = (file, token, setFileId, setIsLoading) => {
  const formData = new FormData();
  formData.append("file", file);

  axios
    .post(
      "https://myapi.dadehavaran.com:8040/api/v1/FileManagement/upload",
      formData,
      {
        headers: {
          "Content-Type": "multipart/form-data",
          Authorization: token || "",
        },
      }
    )
    .then((res) => {
      setIsLoading(false);
      console.log(res);
      setFileId(res.data.result.id);
    })
    .catch((err) => {
      setIsLoading(false);
      console.log(err);
    });
};
export const edit_specialties = (data, setIsLoading, setIsAddSpecialModal) => {
  setIsLoading(true);
  console.log(data);
  axiosConfig
    .put("Specialist/update-specialist", data)
    .then((res) => {
      setIsLoading(false);
      console.log(res);
      success("تخصص با موفقیت ویرایش شد");
      setIsAddSpecialModal(false);
    })
    .catch((err) => {
      console.log(err);
      setIsLoading(false);
      if (
        err.response.data.message &&
        err.response.data.message.message ==
          "حجم فایل برای ذخیره در بیس64 زیاد است !"
      ) {
        Eror("حجم فایل بیش از حد مجاز است");
      } else {
        Eror();
      }
    });
};
export const get_doctors = async (url) => {
  try {
    const response = await axiosConfig.get(url);
    const doctors = response.data.result.list;
    console.log(doctors);
    return doctors;
  } catch (error) {
    console.error("Error fetching specialties:", error);
    return null;
  }
};
export const delete_doctor = async (id, setDoctors, closeModal) => {
  console.log(id);
  try {
    const response = await axiosConfig.delete("Doctor/delete-Doctor", {
      data: {
        metadata: {
          userId: "3fa85f64-5717-4562-b3fc-2c963f66afa6",
          userName: "0200013076",
        },
        id: id,
      },
    });
    const url = "Doctor/read-all-doctors";

    const data = await get_doctors(url);
    if (data) {
      setDoctors(data);
    }
    closeModal();
    success("پزشک با موفقیت حذف شد")
    console.log(response);
  } catch (error) {
    console.log(error);
  }
};

export const get_specialties_by_id = async (id) => {
  try {
    const response = await axiosConfig.get(
      `Specialist/read-specialist?SpecialistId=${id}`
    );
    const specialist = response.data.result.data.name;
    // console.log(specialist);
    return specialist;
  } catch (error) {
    console.error("Error fetching specialties:", error);
    return null;
  }
};
export const get_doctors_by_special_id = async (id) => {
  try {
    const response = await axiosConfig.get(
      `Doctor/read-doctors-byspeciality?SpecialistId=1133`
    );
    const doctors = response.data.result.list;
    return doctors;
  } catch (error) {
    console.error("Error fetching specialties:", error);
    return null;
  }
};
export const edit_doctors = (data, setIsLoading, setIsAddDoctorModal) => {
  console.log(data);
  axiosConfig
    .put("Doctor/update-doctor", data)
    .then((res) => {
      setIsLoading(false);
      console.log(res);
      success("دکتر با موفقیت ویرایش شد");
      setIsAddDoctorModal(false);
    })
    .catch((err) => {
      console.log(err);
      setIsLoading(false);
    });
};
export const add_patient = (data, setIsLoading, setIsAddTurn) => {
  console.log(data);
  axiosConfig
    .post("Patient/create-patient", data)
    .then((res) => {
      console.log(res);
      setIsLoading(false);
      setIsAddTurn(false);
      success("بیمار با موفقیت ثبت شد");
    })
    .catch((err) => {
      Eror();
      console.log(err);
      setIsLoading(false);
    });
};

export const get_patients = async (url) => {
  try {
    const response = await axiosConfig.get(url);
    const patients = response.data.result.list;
    console.log(patients);
    return patients;
  } catch (error) {
    console.error("Error fetching specialties:", error);
    return null;
  }
};
export const delete_patient = async (id, setPatients) => {
  console.log(id);
  try {
    const response = await axiosConfig.delete("Patient/delete-patient", {
      data: {
        metadata: {
          userId: "3fa85f64-5717-4562-b3fc-2c963f66afa6",
          userName: "0200013076",
        },
        id: id,
      },
    });
    const url = "Patient/read-all-patients";

    const data = await get_patients(url);
    if (data) {
      setPatients(data);
    }
    console.log(response);
  } catch (error) {
    console.log(error);
  }
};
export const create_ads = (data, setLoading) => {
  console.log(data);
  axiosConfig
    .post("Ads/create-ads", data)
    .then((res) => {
      setLoading(false);
      console.log(res);
      success("بنر با موفقیت ثبت شد");
    })
    .catch((err) => {
      setLoading(false);
      console.log(err);
    });
};
export const add_medical_center = (data, setLoading) => {
  console.log(data);
  axiosConfig
    .post("Clinic/create-Clinic", data)
    .then((res) => {
      setLoading(false);
      console.log(res);
      success("کلینیک با موفقیت ثبت شد");
    })
    .catch((err) => {
      setLoading(false);
      console.log(err);
      Eror();
    });
};
export const add_Office = (data, setLoading) => {
  console.log(data);
  axiosConfig
    .post("Office/create-Office", data)
    .then((res) => {
      setLoading(false);
      console.log(res);
      success("مطب با موفقیت ثبت شد");
    })
    .catch((err) => {
      setLoading(false);
      console.log(err);
      Eror();
    });
};
export const sendCodeAgain = (phoneNumber) => {
  axiosConfig
    .post("Authentication/generate-registration-code", {
      metadata: {
        userId: "3fa85f64-5717-4562-b3fc-2c963f66afa6",
        userName: "string",
        smeProfileId: 0,
      },
      mobile: phoneNumber,
    })
    .then((res) => {
      console.log(res);
    })
    .catch((err) => {
      console.log(err);
      Eror();
    });
};
