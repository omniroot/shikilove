import { IPage, PAGES } from "@/shared/consts/pages.tsx";
import { useUser } from "@/shared/services/user/useUser.tsx";
import clsx from "clsx";
import { FC } from "react";
import { Link, useLocation } from "react-router-dom";
import styles from "./BottomNavigation.module.scss";
import { ImageView } from "@ui/ImageView/ImageView.tsx";

const isCurrentPage = (currentPage: string, page: IPage) => {
	// console.log(currentLink, page.path);
	const _currentPage = currentPage.split("/")[1].replaceAll("/", "");
	const _nextPage = page.path.split("?")[0].replaceAll("/", "");

	if (_currentPage === _nextPage || _currentPage.includes(page.path)) {
		// console.log(_currentPage, _nextPage, "===> true");
		return true;
	}
	// console.log(_currentPage, _nextPage, "===> false");
	return false;
};

interface IBottomNavigationProps {
	className?: string;
}
export const BottomNavigation: FC<IBottomNavigationProps> = ({ className }) => {
	const currentPage = useLocation().pathname;
	const { currentUser } = useUser();
	const pages = PAGES.sidebar_start.concat(PAGES.sidebar_end);

	if (currentPage === "/login/") {
		return null;
	}

	const _class = clsx(styles.bottom_navigation, className);

	return (
		<div className={_class}>
			{pages.map((page) => {
				if (page.inMobile) {
					return (
						<Link
							className={clsx(styles.navitem, {
								[styles.active]: isCurrentPage(currentPage, page),
							})}
							to={page.path}
							key={page.name}
						>
							{page.path.includes("profile") ? (
								<ImageView src={currentUser?.avatar} className={styles.profile_image} />
							) : (
								page.icon
							)}
						</Link>
					);
				}
			})}
		</div>
	);
};