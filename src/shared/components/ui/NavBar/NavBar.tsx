import type { FC, ReactNode } from "react";
import { Link, useLocation } from "@tanstack/react-router";
import styles from "./NavBar.module.scss";
import clsx from "clsx";
import { ImageView } from "@ui/ImageView/ImageView.tsx";
import { useCurrentUser } from "@/shared/services/user/hooks/useCurrentUser.tsx";

interface IPage {
	name: string;
	path: string;
	icon?: ReactNode;
}
interface INavBarProps {
	pages: IPage[];
}

export const NavBar: FC<INavBarProps> = ({ pages }) => {
	const currentPage = useLocation().pathname;
	const { currentUser } = useCurrentUser();

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

	return (
		<div className={styles.navbar}>
			{pages.map((page) => {
				console.log("!!", page);

				if (page.path === `/users/${currentUser?.id}/`) {
					return (
						<Link
							className={clsx(styles.navitem, styles.profile, {
								[styles.active]: isCurrentPage(page),
							})}
							to={page.path}
							key={page.name}
							viewTransition
						>
							<ImageView src={currentUser?.avatar || ""} className={styles.profile_image} />
						</Link>
					);
				}
				return (
					<Link
						className={clsx(styles.navitem, { [styles.active]: isCurrentPage(page) })}
						to={page.path}
						key={page.name}
						viewTransition
					>
						{page.icon}
					</Link>
				);
			})}
		</div>
	);
};
