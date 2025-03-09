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
  setSmeId,
  setPatients
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
      if (res.data.result.patients) {
        setPatients(res.data.result.patients);
      }
      success("ورود موفق");
      closeModal();
      setFullName(res.data.result.userFullname);
      if (res.data.result.smeprofileId) {
        setSmeId(res.data.result.smeprofileId);
      }
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
export const delete_specialties = async (
  id,
  setList,
  closeModal,
  setIsLoading,
  specialist
) => {
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
    const newList = specialist.filter((item) => item.id != id);
    setList(newList);
    setIsLoading(false);
    success("تخصص با موفقیت حذف شد");
    closeModal();
    console.log(response);
  } catch (error) {
    console.log(error);
    setIsLoading(false);
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
export const delete_doctor = async (
  id,
  setDoctors,
  closeModal,
  setIsLoading,
  doctors
) => {
  console.log(id);
  setIsLoading(true);
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
    const newList = doctors.filter((item) => item.id !== id);
    setDoctors(newList);
    closeModal();
    setIsLoading(false);
    success("پزشک با موفقیت حذف شد");
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
export const get_doctors_by_special_id = async () => {
  try {
    const response = await axiosConfig.get(
      `Doctor/read-doctors-byspeciality?SpecialistId=1128`
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
export const add_patient = (data, setIsLoading, setIsAddPatient) => {
  console.log(data);
  axiosConfig
    .post("Patient/create-patient", data)
    .then((res) => {
      console.log(res);
      setIsLoading(false);
      setIsAddPatient(false);
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
export const add_medical_center = (data, setLoading, closeModal) => {
  console.log(data);
  axiosConfig
    .post("Clinic/create-Clinic", data)
    .then((res) => {
      setLoading(false);
      console.log(res);
      success("مرکز درمانی با موفقیت ثبت شد");
      closeModal();
    })
    .catch((err) => {
      setLoading(false);
      console.log(err);
      Eror();
    });
};
export const add_Office = (data, setLoading, closeModal) => {
  console.log(data);
  axiosConfig
    .post("Office/create-Office", data)
    .then((res) => {
      setLoading(false);
      console.log(res);
      success("مطب با موفقیت ثبت شد");
      closeModal();
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
export const get_ads = async (url) => {
  try {
    const response = await axiosConfig.get(url);
    const banners = response.data.result.list;
    console.log(banners);
    return banners;
  } catch (error) {
    console.error("Error fetching specialties:", error);
    return null;
  }
};
export const delete_ads = async (id, setBanners, closeModal) => {
  console.log(id);
  try {
    const response = await axiosConfig.delete("Ads/delete-ads", {
      data: {
        metadata: {
          userId: "3fa85f64-5717-4562-b3fc-2c963f66afa6",
          userName: "string",
        },
        id: id,
      },
    });
    const url = "Ads/read-smeprofile-ads?SmeProfileId=6";

    const data = await get_ads(url);
    if (data) {
      setBanners(data);
    }
    closeModal();
    console.log(response);
    success("بنر با موفقیت حذف شد");
  } catch (error) {
    console.log(error);
  }
};

export const read_files = async (url) => {
  try {
    const response = await axiosConfig.get(url);
    const file = response.data;
    console.log(file);
    return file;
  } catch (error) {
    console.error("Error fetching specialties:", error);
    return null;
  }
};
export const search_doctors = async (data) => {
  console.log(data);
  try {
    const response = await axiosConfig.get(
      `Doctor/search-doctors?DoctorName=${data.name}&pagesize=${data.pagesize}&pageNumber=${data.currentPage}&specialistIds=${data.specialistId}&ProvinceId=${data.provinceId}&CityId=${data.cityId}&BimehTakmili=${data.BimehTakmili}&BimeAsli=${data.BimeAsli}&JustOnline=${data.JustOnline}&HasTurn=${data.HasTurn}&AcceptInsurance=${data.AcceptInsurance}&Gender=${data.Gender}&Sdate=${data.Sdate}&Edate=${data.Edate}&OnlineTypeId=${data.OnlineTypeId}&OfficeOrClinicHozoori=${data.OfficeOrClinicHozoori}`
    );
    const doctors = response.data.result;
    console.log(doctors);
    return doctors;
  } catch (error) {
    console.error("Error fetching specialties:", error);
    return null;
  }
};
export const get_clinics = async () => {
  try {
    const response = await axiosConfig.get("Clinic/read-Clinics");
    const data = response;
    console.log(data);
    return data.data.result.list;
  } catch (error) {
    console.error("Error fetching specialties:", error);
    return null;
  }
};
export const get_offices = async () => {
  try {
    const response = await axiosConfig.get("Office/read-Offices");
    const data = response;
    console.log(data);
    return data.data.result.list;
  } catch (error) {
    console.error("Error fetching specialties:", error);
    return null;
  }
};
export const search_doctors_list = async (
  name = "",
  currentPage,
  specialistId
) => {
  console.log("name" + name);
  try {
    const response = await axiosConfig.get(
      `Doctor/search-list-doctors?DoctorName=${name}&pagesize=10&pageNumber=${currentPage}&specialist=${specialistId}`
    );
    const doctors = response.data.result;
    console.log(doctors);
    return doctors;
  } catch (error) {
    console.error("Error fetching specialties:", error);
    return null;
  }
};
export const get_doctor_treatmentCenter = async (id) => {
  try {
    const response = await axiosConfig.get(
      `DoctorTreatmentCenter/read-DoctorTreatmentCenterByDoctorId?Id=${id}`
    );
    const treatmentCenter = response.data.result.list;
    console.log(treatmentCenter);
    return treatmentCenter;
  } catch (error) {
    console.error("Error fetching specialties:", error);
    return null;
  }
};
export const create_doctor_treatment = (
  data,
  setIsLoading,
  closeModal,
  message
) => {
  axiosConfig
    .post("/DoctorTreatmentCenter/create-DoctorTreatmentCenter", data)
    .then((res) => {
      setIsLoading(false);
      console.log(res);
      success(message);
      closeModal();
    })
    .catch((err) => {
      setIsLoading(false);
      console.log(err);
    });
};

export const delete_office = async (id, setMedicalCenters, closeModal) => {
  try {
    const response = await axiosConfig.delete("Office/delete-Office", {
      data: {
        metadata: {
          userId: "3fa85f64-5717-4562-b3fc-2c963f66afa6",
          userName: "string",
          smeProfileId: 0,
        },
        id,
      },
    });

    const data = await get_offices();
    if (data) {
      setMedicalCenters(data);
    }
    closeModal();
    console.log(response);
    success("مطب با موفقیت حذف شد");
  } catch (error) {
    console.log(error);
  }
};
export const delete_clinic = async (
  id,
  setMedicalCenters,
  closeModal,
  setIsLoading
) => {
  setIsLoading(true);
  try {
    const response = await axiosConfig.delete("Clinic/delete-Clinic", {
      data: {
        metadata: {
          userId: "3fa85f64-5717-4562-b3fc-2c963f66afa6",
          userName: "string",
          smeProfileId: 0,
        },
        id,
      },
    });

    const data = await get_clinics();
    if (data) {
      setMedicalCenters(data);
    }
    closeModal();
    console.log(response);
    setIsLoading(false);
    success("مرکز درمانی با موفقیت حذف شد");
  } catch (error) {
    console.log(error);
  }
};

export const delete_doctor_treatment = async (
  id,
  setTreatmenCenters,
  closeModal
) => {
  console.log(id);
  try {
    const response = await axiosConfig.delete(
      "DoctorTreatmentCenter/delete-DoctorTreatmentCenter",
      {
        data: {
          metadata: {
            userId: "3fa85f64-5717-4562-b3fc-2c963f66afa6",
            userName: "string",
            smeProfileId: 0,
          },
          id,
        },
      }
    );

    const data = await get_doctor_treatmentCenter(id);
    if (data) {
      setTreatmenCenters(data);
    }
    closeModal();
    console.log(response);
    success("مرکز درمانی دکتر با موفقیت حذف شد");
  } catch (error) {
    console.log(error);
  }
};

export const read_office_type = async () => {
  try {
    const response = await axiosConfig.get("OfficeType/read-OfficeTypes");
    const data = response.data.result.list;
    console.log("OfficeType", data);
    return data;
  } catch (error) {
    console.error("Error fetching specialties:", error);
    return null;
  }
};

export const create_Reservation = (data, setIsLoading, closeModal) => {
  console.log(data);
  axiosConfig
    .post("/Reservation/create-reservation", data)
    .then((res) => {
      console.log(res);
      success("نوبت با موفقیت ثبت شد");
      setIsLoading(false);
      closeModal();
    })
    .catch((err) => {
      console.log(err);
      setIsLoading(false);
    });
};
export const get_doctor_profile_by_id = async (id) => {
  console.log(id);
  try {
    const response = await axiosConfig.get(`Doctor/read-doctor-byid?Id=${id}`);
    const doctorProfile = response.data.result.data;
    console.log(doctorProfile);
    return doctorProfile;
  } catch (error) {
    console.error("Error fetching specialties:", error);
    return null;
  }
};
export const get_doctor_reservation = async (id) => {
  console.log(id);
  try {
    const response = await axiosConfig.get(
      `Reservation/read-doctor-reservation?DoctorId=${id}`
    );
    const reservation = response.data.result.data;
    console.log(reservation);
    return reservation;
  } catch (error) {
    console.error("Error fetching specialties:", error);
    return null;
  }
};

export const add_patient_by_user = (
  data,
  setIsLoading,
  setSteps,
  setPatientId
) => {
  console.log(data);
  axiosConfig
    .post("Patient/create-patient", data)
    .then((res) => {
      console.log(res.data.result.patient.id);
      setPatientId(res.data.result.patient.id);
      setIsLoading(false);
      setSteps(2);
    })
    .catch((err) => {
      Eror();
      console.log(err);
      setIsLoading(false);
    });
};
export const patinet_reservation = (data, setIsLoading, router) => {
  console.log(data);
  axiosConfig
    .post("PatientReservation/create-patientreservation", data)
    .then((res) => {
      console.log(res);
      setIsLoading(false);
      success("نوبت شما با موفقیت رزرو شد");
      router.push("/");
    })
    .catch((err) => {
      Eror();
      console.log(err);
      setIsLoading(false);
    });
};
export const get_doctor_treatment_reservation = async (
  doctorId,
  treatmentId
) => {
  console.log(doctorId, treatmentId);
  try {
    const response = await axiosConfig.get(
      `Reservation/read-doctor-treatmentcenter-reservation?DoctorId=${doctorId}&TreatmentCenterId=${treatmentId}`
    );
    const reservation = response.data.result.data;
    console.log(reservation);
    return reservation;
  } catch (error) {
    console.error("Error fetching specialties:", error);
    return null;
  }
};
export const get_doctor_treatmentCenter_hozoori = async (id) => {
  try {
    const response = await axiosConfig.get(
      `DoctorTreatmentCenter/read-DoctorTreatmentCenterByDoctorIdHozoori?Id=${id}`
    );
    const treatmentCenter = response.data.result.list;
    console.log(treatmentCenter);
    return treatmentCenter;
  } catch (error) {
    console.error("Error fetching specialties:", error);
    return null;
  }
};
export const get_doctor_treatmentCenter_online = async (id) => {
  try {
    const response = await axiosConfig.get(
      `DoctorTreatmentCenter/read-DoctorTreatmentCenterByDoctorIdOnline?Id=${id}`
    );
    const treatmentCenter = response.data.result.list;
    console.log(treatmentCenter);
    return treatmentCenter;
  } catch (error) {
    console.error("Error fetching specialties:", error);
    return null;
  }
};

export const get_all_users = async () => {
  try {
    const response = await axiosConfig.get(`UserProfile/read-all-userprofiles`);
    const users = response.data.result.list;
    console.log(users);
    return users;
  } catch (error) {
    console.error("Error fetching specialties:", error);
    return null;
  }
};

export const get_user_role_by_username = async (userName = "") => {
  try {
    const response = await axiosConfig.get(
      `UserManager/read-user-role?UserName=${userName}`
    );
    const userRoles = response.data.result.list;
    console.log(userRoles);
    return userRoles;
  } catch (error) {
    console.error("Error fetching specialties:", error);
    return null;
  }
};

export const get_roles = async () => {
  try {
    const response = await axiosConfig.get(`RoleManager/read-roles`);
    const Roles = response.data.result.list;
    console.log(Roles);
    return Roles;
  } catch (error) {
    console.error("Error fetching specialties:", error);
    return null;
  }
};
export const add_role_to_user = (data, setIsLoading, closeModal) => {
  axiosConfig
    .post("UserManager/add-role-to-user", data)
    .then(() => {
      success("دسترسی با موفقیت داده شد");
      setIsLoading(false);
      closeModal();
    })
    .catch((err) => {
      console.log(err);
      setIsLoading(false);
    });
};
export const get_4first_doctor_turns = async () => {
  try {
    const response = await axiosConfig.get(
      `Doctor/readfirstfreeturns?DoctorId=1239`
    );
    const turns = response.data.result.list;
    console.log(turns);
    return turns;
  } catch (error) {
    console.error("Error fetching specialties:", error);
    return null;
  }
};

export const read_all_insirances = async () => {
  try {
    const response = await axiosConfig.get(`Insurance/read-all-insurances`);
    const insurances = response.data.result.list;
    console.log(insurances);
    return insurances;
  } catch (error) {
    console.error("Error fetching specialties:", error);
    return null;
  }
};

export const read_firsPage_doctors = async () => {
  console.log("first");
  try {
    const response = await axiosConfig.get(
      `Reservation/read-doctor-resevationtop4firstpage`
    );
    const doctors = response.data.result.data;
    console.log(doctors);
    return doctors;
  } catch (error) {
    console.error("Error fetching specialties:", error);
    return null;
  }
};
export const follow_doctor_profile = (data, setIsLoading) => {
  axiosConfig
    .post("FollowProfile/create-FollowProfile", data)
    .then(() => {
      success("پزشک به علاقه مندی ها اضافه شد");
      setIsLoading(false);
    })
    .catch((err) => {
      console.log(err);
      setIsLoading(false);
    });
};
export const read_followed_profile = async (smeId) => {
  console.log("first");
  try {
    const response = await axiosConfig.get(
      `FollowProfile/read-FollowProfile?Id=${smeId}`
    );
    const followedList = response.data.result.list;
    console.log(followedList);
    return followedList;
  } catch (error) {
    console.error("Error fetching specialties:", error);
    return null;
  }
};
export const get_first_page_specialties = async () => {
  try {
    const response = await axiosConfig.get(
      "Specialist/read-specialists-firstpage"
    );
    const specialties = response.data.result.list;
    return specialties;
  } catch (error) {
    console.error("Error fetching specialties:", error);
    return null;
  }
};

export const get_all_turns = async () => {
  try {
    const response = await axiosConfig.get(
      "PatientReservation/read-all-patientreservations"
    );
    const turns = response.data.result.list;
    return turns;
  } catch (error) {
    console.error("Error fetching specialties:", error);
    return null;
  }
};
export const edit_clinic = (data, setLoading, closeModal) => {
  setLoading(true);
  console.log(data);
  axiosConfig
    .put("Clinic/update-Clinic", data)
    .then((res) => {
      setLoading(false);
      console.log(res);
      success("مرکز درمانی با موفقیت ویرایش شد");
      closeModal();
    })
    .catch((err) => {
      console.log(err);
      setLoading(false);
    });
};
export const edit_office = (data, setLoading, closeModal) => {
  console.log(data);
  axiosConfig
    .put("Office/update-Office", data)
    .then((res) => {
      success("مطب با موفقیت ویرایش شد");
      setLoading(false);
      console.log(res);
      closeModal();
    })
    .catch((err) => {
      console.log(err);
      setLoading(false);
    });
};
export const create_role = (data, setIsLoading, closeModal) => {
  axiosConfig
    .post("RoleManager/create-role", data)
    .then(() => {
      success("نقش با موفقیت ثبت شد");
      setIsLoading(false);
      closeModal();
    })
    .catch((err) => {
      console.log(err);
      setIsLoading(false);
    });
};

export const create_reservation_date_to_date = (
  data,
  setIsLoading,
  closeModal
) => {
  console.log(data);
  axiosConfig
    .post("/Reservation/create-reservationfromdatetodate", data)
    .then((res) => {
      console.log(res);
      success("نوبت با موفقیت ثبت شد");
      setIsLoading(false);
      closeModal();
    })
    .catch((err) => {
      console.log(err);
      setIsLoading(false);
    });
};
