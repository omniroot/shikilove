import styles from "./BottomNavigation.module.scss";
import { Link, useLocation } from "react-router-dom";
import clsx from "clsx";
import { FC } from "react";
import { IPage, PAGES } from "@/shared/consts/pages.tsx";

const isCurrentPage = (currentPage: string, page: IPage) => {
	const _currentPage = currentPage.split("/")[1].replaceAll("/", "");
	const _nextPage = page.path.replaceAll("/", "");

	if (_currentPage === _nextPage) {
		return true;
	}
	return false;
};

interface IBottomNavigationProps {
	className?: string;
}
export const BottomNavigation: FC<IBottomNavigationProps> = ({ className }) => {
	const currentPage = useLocation().pathname;
	const pages = PAGES.bottomNavigation;

	if (currentPage === "/login/") {
		return null;
	}

	const _class = clsx(styles.bottom_navigation, className);

	return (
		<div className={_class}>
			{pages.map((page) => {
				return (
					<Link
						className={clsx(styles.navitem, {
							[styles.active]: isCurrentPage(currentPage, page),
						})}
						to={page.path}
						key={page.name}
					>
						{page.icon}
					</Link>
				);
			})}
		</div>
	);
};
