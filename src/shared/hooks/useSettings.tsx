import { useSettingsStore } from "@/shared/store/settings.store.tsx";

export const useSettings = () => {
	const { theme, setTheme } = useSettingsStore();
	if (!localStorage.getItem("theme")) {
		localStorage.setItem("theme", "default");
	}

	return { theme, setTheme };
};
