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

  token: Cookies.get("token"),
  setToken: (token) => {
    Cookies.set("token", token);
    console.log(token);
    set(() => ({ token: token }));
  },
  selectedBaner: {},
  setSelectedBaner: (item) => set(() => ({ selectedBaner: item })),
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
