import { useStorageStore } from "@/shared/store/storage/storage.store";
import { produce } from "immer";
export const useStorage = () => {
	const { storage } = useStorageStore();

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

	return { getScrollPosition, addScrollPosition };
};
