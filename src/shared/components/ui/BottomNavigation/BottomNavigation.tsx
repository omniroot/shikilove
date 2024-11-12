import styles from "./BottomNavigation.module.scss";
import { Link, useLocation } from "react-router-dom";
import clsx from "clsx";
import { FC } from "react";
import { IPage, PAGES } from "@/shared/consts/pages.tsx";
import { ImageView } from "@ui/ImageView/ImageView.tsx";
import { useUser } from "@/shared/services/user/useUser.tsx";

const isCurrentPage = (currentPage: string, page: IPage) => {
	// console.log(currentLink, page.path);
	const _currentPage = currentPage.split("/")[1].replaceAll("/", "");
	const _nextPage = page.path.replaceAll("/", "");

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
	const pages = PAGES.bottomNavigation;

	if (currentPage === "/login/") {
		return null;
	}

	const _class = clsx(styles.bottom_navigation, className);

	return (
		<div className={_class}>
			{pages.map((page) => {
				// console.log(page);

				if (page.path === `/users/${currentUser?.id}`) {
					// console.log("####", page);
					return (
						<Link
							className={clsx(styles.navitem, styles.profile, {
								[styles.active]: currentPage.includes("users"),
							})}
							to={page.path}
							key={page.name}
						>
							<ImageView
								src={currentUser?.avatar}
								className={styles.profile_image}
								loading="eager"
							/>
						</Link>
					);
				}
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
