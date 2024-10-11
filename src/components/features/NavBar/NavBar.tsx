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
	const currentLink = useLocation().pathname;
	const isCurrentPage = (page: IPage) => page.path === currentLink;

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
