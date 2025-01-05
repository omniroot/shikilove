import { create } from "zustand";

interface IAuthStore {
	userId: number | null;
	isAuthorized: boolean;
	setIsAuthorized: (newState: boolean) => void;
	setUserId: (newState: number) => void;
}
export const useAuthStore = create<IAuthStore>((set) => ({
	userId: Number(localStorage.getItem("user_id")) || null,
	isAuthorized: false,
	setIsAuthorized: (newState) => set(() => ({ isAuthorized: newState })),
	setUserId: (newState) => {
		localStorage.setItem("user_id", String(newState));
		set({ userId: newState });
	},
}));
