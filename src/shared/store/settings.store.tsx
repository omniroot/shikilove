import { useEffect } from "react";
import { create } from "zustand";

type ITheme = "default" | "catppuccin" | "catppuccin-dark" | "tokyo-night";

interface IUseSettings {
	theme: ITheme;
	setTheme: (newTheme: ITheme) => void;
}
const useSettingsStore = create<IUseSettings>((set) => ({
	theme: (localStorage.getItem("theme") as ITheme) || "default",
	setTheme: (newTheme) => set(() => ({ theme: newTheme })),
}));

export const useSettings = () => {
	const { theme, setTheme } = useSettingsStore();
	if (!localStorage.getItem("theme")) {
		localStorage.setItem("theme", "default");
	}

	useEffect(() => {
		document.documentElement.setAttribute("theme", theme);
		console.log("New theme", theme);
		localStorage.setItem("theme", theme);
	}, [theme]);

	return { theme, setTheme };
};
