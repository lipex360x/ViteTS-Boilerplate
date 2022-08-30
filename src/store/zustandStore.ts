import create from "zustand";
import { produce } from 'immer'

export type ZustandStore = {
  count: number;
  increment: () => void;
  decrement: () => void;
  reset: () => void;
};

export const useZustandStore = create<ZustandStore>((set) => ({
  count: 0,

  increment: () => set((state) =>
    produce(state, (draft) => {
      draft.count += 1
    })
  ),

  decrement: () => set((state) =>
    produce(state, (draft) => {
      draft.count -= 1
    })
  ),

  reset: () => set({ count: 0 })
}));
