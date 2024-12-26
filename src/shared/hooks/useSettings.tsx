import { useEffect } from "react";
import { create } from "zustand";

const THEMES = [
	"default",
	"catppuccin",
	"catppuccin-dark",
	"tokyo-night",
	"everforest",
	"pastel-red",
	"pastel-green",
	"modern-dark",
];
type ITheme = (typeof THEMES)[number];

interface ISettings {
	theme: ITheme;
	showHeader: boolean;
}

interface IUseSettingsStore extends ISettings {
	themes: ITheme[];
	setTheme: (newTheme: ITheme) => void;
	toggleShowHeader: () => void;
}

const useSettingsStore = create<IUseSettingsStore>((set) => ({
	themes: THEMES,
	theme: "default",
	showHeader: true,
	setTheme: (newTheme) => set(() => ({ theme: newTheme })),
	toggleShowHeader: () => set((state) => ({ showHeader: !state.showHeader })),
}));

useSettingsStore.subscribe((state) => {
	// TODO optimize it
	const settings: ISettings = {
		theme: state.theme,
		showHeader: state.showHeader,
	};
	localStorage.setItem("settings", JSON.stringify(settings));
});

export const useSettings = () => {
	const settings = useSettingsStore();

	useEffect(() => {
		const settings: ISettings = JSON.parse(localStorage.getItem("settings") || "{}") || {
			theme: "default",
		};
		useSettingsStore.setState(settings);
	}, []);

	useEffect(() => {
		document.documentElement.setAttribute("theme", settings.theme);
	}, [settings.theme]);

	return settings;
};
