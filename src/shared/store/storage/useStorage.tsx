import { IWatchHistory, useStorageStore } from "@/shared/store/storage/storage.store";
import { produce } from "immer";
export const useStorage = () => {
	const { storage } = useStorageStore();
	// console.log({ storage });

	const getScrollPosition = (url: string) => {
		return storage.scrollPositions[url] ?? 0;
	};
	const addScrollPosition = (url: string, position: number) => {
		useStorageStore.setState((prev) => {
			return produce(prev, (draft) => {
				draft.storage.scrollPositions[url] = position;
			});
		});
		return storage.scrollPositions[url] ?? 0;
	};

	const getWatchHistory = (url: string) => {
		console.log(storage.watchHistory, url);

		return storage.watchHistory[url] ?? [];
	};
	const addWatchHistory = (url: string, data: IWatchHistory) => {
		useStorageStore.setState((prev) => {
			return produce(prev, (draft) => {
				draft.storage.watchHistory[url] = { ...data };
			});
		});
	};

	return {
		getScrollPosition,
		addScrollPosition,
		getWatchHistory,
		addWatchHistory,
	};
};
