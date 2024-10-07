import { create } from 'zustand'
export const useStore = create((set) => ({
    reservationType: null,
    setReservationType: (type) => set(() => ({ reservationType: type })),
  }))