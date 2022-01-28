/**
 * @description Initialises our store/global state. Whenever we want to access
 * the global state we have to import useStore from this file.
 * src:
 * https://blog.bitsrc.io/zustands-guide-to-simple-state-management-12c654c69990
 */
import create from "zustand";

interface GlobalState {
  apples: number;
  bananas: number;
  addApple: () => void;
  addBanana: () => void;
}

// creates our store(our global state). The set function merges the current
// state object with the resulting object of our set function.
// src: https://github.com/pmndrs/zustand
const useStore = create<GlobalState>((set) => ({
  apples: 0,
  bananas: 0,
  addApple: () => set((state) => ({ apples: state.apples + 1 })),
  addBanana: () => set((state) => ({ bananas: state.bananas + 1 })),
}));

export default useStore;
