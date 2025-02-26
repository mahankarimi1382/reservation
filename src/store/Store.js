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

  storedIdsMultipleSearch: "",
  setStoredIdsMultipleSearch: (value) =>
    set(() => ({ storedIdsMultipleSearch: value })),

  filtredBoxes: [],
  setFiltredBoxes: (boxitems) => set(() => ({ filtredBoxes: boxitems })),

  multiSpecialtiesBoxes: [],
  setMultiSpecialtiesBoxes: (boxitems) =>
    set(() => ({ multiSpecialtiesBoxes: boxitems })),

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
  specialistSearch: null,
  setSpecialistSearch: (id) =>
    set(() => ({
      specialistSearch: id,
    })),
  specialistNames: { name: null },
  setSpecialistNames: (name) =>
    set(() => ({
      specialistNames: {
        name: name,
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

export const doctorProfileStore = create(
  persist(
    (set) => ({
      doctorId: "",
      setDoctorId: (id) => set(() => ({ doctorId: id })),
      doctorName: "",
      setDoctorName: (name) => set(() => ({ doctorName: name })),
    }),
    {
      name: "doctor-search-id",
      storage: createJSONStorage(() => sessionStorage),
    }
  )
);
export const reservationStore = create(
  persist(
    (set) => ({
      reservationId: "",
      setReservationId: (id) => set(() => ({ reservationId: id })),
      turnId: "",
      setTurnId: (id) => set(() => ({ turnId: id })),
      patientId: "",
      setPatientId: (id) => set(() => ({ patientId: id })),
    }),
    {
      name: "reservation-details",
      storage: createJSONStorage(() => sessionStorage),
    }
  )
);
