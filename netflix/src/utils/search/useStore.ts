import { create } from "zustand";

export const useSearchStore = create((set) => ({
  searchText: "",
  setSearch: (movie: string) => set({ searchText: movie }),
}));
