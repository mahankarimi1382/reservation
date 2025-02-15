import Cookies from "js-cookie";
import { create } from "zustand";
import { persist, createJSONStorage } from "zustand/middleware";

export const myStore = create((set) => ({
  reservationType: null,
  setReservationType: (type) => set(() => ({ reservationType: type })),
  isEdit: false,
  setIsEdit: () => set((state) => ({ isEdit: !state.isEdit })),
  isSpecialtiesClick: false,
  setIsSpecialtiesClick: () =>
    set((state) => ({ isSpecialtiesClick: !state.isSpecialtiesClick })),

  bimehTakmili: "",
  setBimehTakmili: (value) => set(() => ({ bimehTakmili: value })),

  bimeAsli: "",
  setBimeAsli: (value) => set(() => ({ bimeAsli: value })),

  justOnline: false,
  setJustOnline: (value) => set(() => ({ justOnline: value })),

  hasTurn: false,
  setHasTurn: (value) => set(() => ({ hasTurn: value })),

  acceptInsurance: false,
  setAcceptInsurance: (value) => set(() => ({ acceptInsurance: value })),

  gender: "",
  setGender: (value) => set(() => ({ gender: value })),

  sDate: "",
  setSDate: (value) => set(() => ({ sDate: value })),

  eDate: "",
  setEDate: (value) => set(() => ({ eDate: value })),

  onlineTypeId: "",
  setOnlineTypeId: (value) => set(() => ({ onlineTypeId: value })),

  cityId: "",
  setCityId: (value) => set(() => ({ cityId: value })),

  provinceId: "",
  setProvinceId: (value) => set(() => ({ provinceId: value })),

  provinceNameSearchBox: "",
  setProvinceNameSearchBox: (value) =>
    set(() => ({ provinceNameSearchBox: value })),

  cityNameSeacrhBox: "",
  setCityNameSeacrhBox: (value) => set(() => ({ cityNameSeacrhBox: value })),

  officeOrClinicHozoori: "",

  setOfficeOrClinicHozoori: (value) =>
    set(() => ({ officeOrClinicHozoori: value })),

  token: Cookies.get("token"),
  setToken: (token) => {
    Cookies.set("token", token);
    console.log(token);
    set(() => ({ token: token }));
  },
  selectedBaner: {},
  setSelectedBaner: (item) => set(() => ({ selectedBaner: item })),
  isSerchDoctorLoading: true,
  setIsSerchDoctorLoading: (bool) =>
    set(() => ({ isSerchDoctorLoading: bool })),
  specialistSearch: { name: null, id: null },
  setSpecialistSearch: (name, id) =>
    set(() => ({
      specialistSearch: {
        name: name,
        id: id,
      },
    })),
  currentPageDoctorSearch: 1,
  setCurrentPageDoctorSearch: (page) =>
    set(() => ({ currentPageDoctorSearch: page })),
}));

export const fullNameStorage = create(
  persist(
    (set) => ({
      fullName: "",
      setFullName: (name) => set({ fullName: name }),
    }),
    {
      name: "FullName",
      storage: createJSONStorage(() => sessionStorage),
    }
  )
);

export const smeIdStorage = create(
  persist(
    (set) => ({
      smeId: "",
      setSmeId: (id) => set({ smeId: id }),
      removeSmeId: () => set({ smeId: "" }),
    }),
    {
      name: "smeId",
      storage: createJSONStorage(() => sessionStorage),
    }
  )
);
export const nationalCodeStorage = create(
  persist(
    (set) => ({
      userName: "",
      setUserName: (code) => set({ userName: code }),
    }),
    {
      name: "userName",
      storage: createJSONStorage(() => sessionStorage),
    }
  )
);
