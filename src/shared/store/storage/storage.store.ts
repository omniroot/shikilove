import { create } from "zustand";
import { persist, createJSONStorage } from "zustand/middleware";

interface IStorage {
	scrollPositions: {
		[key: string]: number;
	};
}

interface IStorageStore {
	storage: IStorage;
}

export const useStorageStore = create<IStorageStore>()(
	persist(
		() => ({
			storage: { scrollPositions: {} },
		}),
		{
			name: "storage", // name of item in the storage (must be unique)
			storage: createJSONStorage(() => localStorage), // (optional) by default the 'localStorage' is used
			partialize: (state) => ({ ...state.storage }),
		},
	),
);
