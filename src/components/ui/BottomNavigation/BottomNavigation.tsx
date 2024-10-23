import styles from "./BottomNavigation.module.scss";
import { Link, useLocation } from "react-router-dom";
import clsx from "clsx";
import { IPage, PAGES } from "@/shared/consts/pages";

const isCurrentPage = (currentPage: string, page: IPage) => {
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

export const BottomNavigation = () => {
	const currentPage = useLocation().pathname;
	const pages = PAGES.bottomNavigation;

	if (currentPage === "/login/") {
		return null;
	}

	return (
		<div className={styles.bottom_navigation}>
			{pages.map((page) => {
				if (isCurrentPage(currentPage, page)) {
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
