import {
	ProfileIcon,
	AnimeIcon,
	SearchIcon,
	SettingsIcon,
} from "@/shared/icons";
import styles from "./BottomNavigation.module.scss";
import { Link, useLocation } from "react-router-dom";
import clsx from "clsx";
import { ReactNode } from "react";

interface IPage {
	name: string;
	path: string;
	icon: ReactNode;
}

const pages: IPage[] = [
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
	// {
	// 	name: "Logout",
	// 	path: "/logout",
	// 	icon: <LogoutIcon />,
	// },
];

export const BottomNavigation = () => {
	const currentPage = useLocation().pathname;
	const isCurrentPage = (page: IPage) => {
		// console.log(currentLink, page.path);
		const _currentPage = currentPage.split("/")[1].replaceAll("/", "");
		const _nextPage = page.path.replaceAll("/", "");

		if (_currentPage === _nextPage) {
			console.log(_currentPage, _nextPage, "===> true");
			return true;
		}
		console.log(_currentPage, _nextPage, "===> false");
		return false;
	};
	console.log(currentPage);
	if (currentPage === "/login/") {
		return null;
	}

	return (
		<div className={styles.bottom_navigation}>
			{pages.map((page) => {
				if (isCurrentPage(page)) {
					return (
						<Link
							className={clsx(styles.navitem, styles.active)}
							to={page.path}
							key={page.name}
						>
							{page.icon}
						</Link>
					);
				}
				return (
					<Link className={styles.navitem} to={page.path} key={page.name}>
						{page.icon}
					</Link>
				);
			})}
		</div>
	);
};
