import type { FC, ReactNode } from "react";
import { Link, useLocation } from "react-router-dom";
import styles from "./NavBar.module.scss";
import clsx from "clsx";

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

	const isCurrentPage = (page: IPage) => {
		// console.log(currentLink, page.path);
		const _currentPage = currentPage.split("/")[1].replaceAll("/", "");
		const _nextPage = page.path.replaceAll("/", "");

		if (_currentPage === _nextPage) { console.log(_currentPage, _nextPage, "===> true"); return true }
		console.log(_currentPage, _nextPage, "===> false")
		return false;
	};

	return (
		<div className={styles.navbar}>
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
