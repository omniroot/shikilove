import { create } from "zustand";
import { createJSONStorage, persist } from "zustand/middleware";

export const THEMES = [
	"default",
	"catppuccin",
	"catppuccin-dark",
	"tokyo-night",
	"everforest",
	"pastel-red",
	"pastel-green",
	"modern-dark",
] as const;
export type IThemes =
	| "default"
	| "catppuccin"
	| "catppuccin-dark"
	| "tokyo-night"
	| "everforest"
	| "pastel-red"
	| "pastel-green"
	| "modern-dark";

interface ISettings {
	theme: IThemes;
}

interface ISettingsStore {
	settings: ISettings;
}

export const useSettingsStore = create<ISettingsStore>()(
	persist(
		// @ts-expect-error bcz
		(set) => ({
			settings: { theme: "default" }, // Используем IThemes.Default
		}),
		{
			name: "settings", // имя элемента в хранилище (должно быть уникальным)
			storage: createJSONStorage(() => localStorage), // (опционально) по умолчанию используется 'localStorage'
			partialize: (state) => ({ settings: state.settings }), // Изменено на правильную структуру
		},
	),
);
