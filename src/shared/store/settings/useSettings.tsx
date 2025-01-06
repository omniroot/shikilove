import { IThemes, useSettingsStore } from "@/shared/store/settings/settings.store.ts";
import { produce } from "immer";
import { useEffect } from "react";

export const useSettings = () => {
	const { settings } = useSettingsStore();

	const changeTheme = (theme: IThemes) => {
		useSettingsStore.setState((prev) => {
			return produce(prev, (draft) => {
				draft.settings.theme = theme;
			});
		});
	};

	useEffect(() => {
		document.documentElement.setAttribute("theme", settings.theme);
	}, [settings.theme]);

	return { theme: settings.theme, changeTheme };
};
