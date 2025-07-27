import { create } from "zustand";

const useGameStore = create((set) => ({
  playWithComputer: null,
  playerSymbol: null,
  winner: null,

  setPlayWithComputer: (value) => set({ playWithComputer: value }),
  setPlayerSymbol: (symbol) => set({ playerSymbol: symbol }),
  setWinner: (winner) => set({ winner }),
}));

export default useGameStore;
