import { ProfileIcon, AnimeIcon, SearchIcon, SettingsIcon, HomeIcon } from "@/shared/icons";
import { ReactNode } from "react";

export interface IPage {
	name: string;
	path: string;
	icon: ReactNode;
	inMobile: boolean;
}

export const PAGES = {
	sidebar_start: [
		{
			name: "Home",
			path: "/",
			icon: <HomeIcon />,
			inMobile: true,
		},
		{
			name: "Animes",
			path: "/animes/",
			icon: <AnimeIcon width={24} height={22} />,
			inMobile: true,
		},
		{
			name: "Search",
			path: "/search",
			icon: <SearchIcon />,
			inMobile: true,
		},
	],
	sidebar_end: [
		{
			name: "Profile",
			path: "/profile?status=watching",
			icon: <ProfileIcon />,
			inMobile: true,
		},
		{
			name: "Settings",
			path: "/settings",
			icon: <SettingsIcon />,
			inMobile: false,
		},
	],
};
