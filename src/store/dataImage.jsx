import { create } from "zustand";

const useDataStore = create((set) => ({
  image: "",
  changeImage: (data) => set((state) => ({ image: data })),
}));

export { useDataStore };
