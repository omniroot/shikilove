import ProfilePage from "@/app/pages/ProfilePage/ProfilePage.tsx";
import { ProfileIcon, AnimeIcon, SearchIcon, SettingsIcon, HomeIcon } from "@/shared/icons";
import { ReactNode } from "react";

export interface IPage {
	name: string;
	path: string;
	icon: ReactNode;
}

export const PAGES = {
	sidebar_start: [
		{
			name: "Home",
			path: "/",
			icon: <HomeIcon />,
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
			name: "Profile",
			path: "/profile",
			icon: <ProfileIcon />,
		},
		{
			name: "Settings",
			path: "/settings",
			icon: <SettingsIcon />,
		},
	],

	bottomNavigation: [
		{
			name: "Home",
			path: "/",
			icon: <HomeIcon />,
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
			name: "Profile",
			path: "/profile",
			icon: <ProfilePage />,
		},
	] as IPage[],
};
