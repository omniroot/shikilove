import {
	AnimeIcon,
	LogoutIcon,
	ProfileIcon,
	SearchIcon,
	SettingsIcon,
	ShikimoriIcon,
} from "@/shared/icons";
import { NavBar } from "@features/NavBar/NavBar";
import styles from "./Sidebar.module.scss";
import { useLocation } from "react-router-dom";

const start_pages = [
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
];

const end_pages = [
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
];

export const Sidebar = () => {
	const currentPage = useLocation().pathname;

	if (currentPage === "/login/") {
		return null;
	}

	return (
		<div className={styles.sidebar_container}>
			<div className={styles.sidebar}>
				<ShikimoriIcon className={styles.shikimori_icon} />
				<div className={styles.divider} />
				<NavBar pages={start_pages} />
				<div className={styles.spacer} />
				<NavBar pages={end_pages} />
			</div>
		</div>
	);
};
