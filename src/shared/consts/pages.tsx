import {
	ProfileIcon,
	AnimeIcon,
	SearchIcon,
	SettingsIcon,
	LogoutIcon,
} from "@/shared/icons";
import { ReactNode } from "react";

export interface IPage {
	name: string;
	path: string;
	icon: ReactNode;
}

export const PAGES = {
	sidebar_start: [
		{
			name: "Profile",
			path: "/",
			icon: <ProfileIcon />,
		},
		{
			name: "Animes",
			path: "/animes/",
			icon: <AnimeIcon width={24} height={22} />,
		},
		{
			name: "Search",
			path: "/search",
			icon: <SearchIcon />,
		},
	],
	sidebar_end: [
		{
			name: "Settings",
			path: "/settings",
			icon: <SettingsIcon />,
		},
		{
			name: "Logout",
			path: "/logout",
			icon: <LogoutIcon />,
		},
	],

	bottomNavigation: [
		{
			name: "Profile",
			path: "/",
			icon: <ProfileIcon />,
		},
		{
			name: "Animes",
			path: "/animes/",
			icon: <AnimeIcon width={24} height={22} />,
		},
		{
			name: "Search",
			path: "/search",
			icon: <SearchIcon />,
		},
		{
			name: "Settings",
			path: "/settings",
			icon: <SettingsIcon />,
		},
	] as IPage[],
};
