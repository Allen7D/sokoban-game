import { create } from "zustand";

export enum TileMap {
  Wall = 1,
  FLOOR = 2,
}

const useStore = create(() => ({
  mapData: [
    [1, 1, 1, 1, 1],
    [1, 2, 2, 2, 1],
    [1, 2, 2, 2, 1],
    [1, 2, 2, 2, 1],
    [1, 1, 1, 1, 1],
  ],
}));

export default useStore;
