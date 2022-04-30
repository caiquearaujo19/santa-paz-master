import create from 'zustand';

export const useAppStore = create(set => ({
  year: new Date().getFullYear().toString(),
  yearList: ["2022"],
  changeYear: (year) => set(() => ({ year: year }))
}));