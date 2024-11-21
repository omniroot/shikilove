import { create } from "zustand";

type ITheme = "default" | "catppuccin";

interface IUseSettings {
	theme: ITheme;
	setTheme: (newTheme: ITheme) => void;
}
export const useSettingsStore = create<IUseSettings>((set) => ({
	theme: (localStorage.getItem("theme") as ITheme) || "default",
	setTheme: (newTheme) => set(() => ({ theme: newTheme })),
}));

useSettingsStore.subscribe((state) => {
	console.log("Settings updated:", state);
	localStorage.setItem("theme", state.theme);
});
