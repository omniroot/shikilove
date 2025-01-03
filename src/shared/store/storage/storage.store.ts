import { create } from "zustand";
import { persist, createJSONStorage } from "zustand/middleware";

export interface IWatchHistory {
	episode: {
		episodeId: number;
		episode: number;
	};
	team: string;
	link: string;
	quality: string;
	timecode: number;
}

interface IStorage {
	scrollPositions: {
		[key: string]: number;
	};
	watchHistory: {
		[key: string]: IWatchHistory;
	};
}

interface IStorageStore {
	storage: IStorage;
}

export const useStorageStore = create<IStorageStore>()(
	persist(
		() => ({
			storage: { scrollPositions: {}, watchHistory: {} },
		}),
		{
			name: "storage", // name of item in the storage (must be unique)
			storage: createJSONStorage(() => localStorage), // (optional) by default the 'localStorage' is used
			partialize: (state) => ({ ...state }),
		},
	),
);
