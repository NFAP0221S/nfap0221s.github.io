import { create } from 'zustand'
import { devtools } from 'zustand/middleware';
import breadCrumbSlice, { BreadCrumbSlice } from './breadCrumbSlice'

type BoundStoreType = BreadCrumbSlice

export const useBoundStore = create<BoundStoreType>()(
  devtools((...a) => ({
    ...breadCrumbSlice(...a),
  }))
);