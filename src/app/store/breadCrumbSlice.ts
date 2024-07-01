// src/store/breadCrumbSlice.ts
import { StateCreator } from 'zustand';

interface Crumb {
  label: string;
  href: string;
}

export interface BreadCrumbSlice {
  crumbs: Crumb[];
  setCrumbs: (crumbs: Crumb[]) => void;
  addCrumb: (crumb: Crumb) => void;
  removeCrumb: (label: string) => void;
  resetCrumbs: () => void;
}

const createBreadCrumbSlice: StateCreator<BreadCrumbSlice> = (set) => ({
  crumbs: [],
  setCrumbs: (crumbs) => set({ crumbs }),
  addCrumb: (crumb) =>
    set((state) => ({
      crumbs: [...state.crumbs, crumb],
    })),
  removeCrumb: (label) =>
    set((state) => ({
      crumbs: state.crumbs.filter((c) => c.label !== label),
    })),
  resetCrumbs: () => set({ crumbs: [] }),
});

export default createBreadCrumbSlice;
