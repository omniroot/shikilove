import { useEffect } from "react";
import { create } from "zustand";

interface IStorage {
	scrollPositions: {
		[key: string]: number;
	};
}

interface IUseStorageStore extends IStorage {
	getScrollPosition: (url: string) => number;
	addScrollPosition: (url: string, position: number) => void;
}

const useStorageStore = create<IUseStorageStore>((set, get) => ({
	scrollPositions: {},
	getScrollPosition: (url) => {
		const position = get().scrollPositions[url];
		return position ?? 0;
	},
	addScrollPosition: (url, position) => {
		set((state) => ({ scrollPositions: { ...state.scrollPositions, [url]: position } }));
	},
}));

useStorageStore.subscribe((state) => {
	const storage: IStorage = {
		scrollPositions: state.scrollPositions,
	};

	localStorage.setItem("storage", JSON.stringify(storage));
});

export const useStorage = () => {
	const storage = useStorageStore();

	useEffect(() => {
		const storage: IStorage = JSON.parse(localStorage.getItem("storage") || "{}") || {
			scrollPositions: { "/": 0 },
		};
		useStorageStore.setState(storage);
	}, []);

	return storage;
};
