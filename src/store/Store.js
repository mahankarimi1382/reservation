import { create } from "zustand";
export const myStore = create((set) => ({
  reservationType: null,
  setReservationType: (type) => set(() => ({ reservationType: type })),
  isEdit: false,
  setIsEdit: () => set((state) => ({ isEdit: !state.isEdit })),
}));
