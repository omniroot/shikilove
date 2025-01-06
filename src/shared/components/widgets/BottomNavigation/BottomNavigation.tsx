import { DiscoveryIcon, HomeIcon, ProfileIcon, SettingsIcon } from "@/shared/icons/index.tsx";
import { useUser } from "@pages/user/_api/user";
import { Link, useLocation } from "@tanstack/react-router";
import { ImageView } from "@ui/ImageView/ImageView.tsx";
import clsx from "clsx";
import { FC } from "react";
import styles from "./BottomNavigation.module.scss";

// const isCurrentPage = (currentPage: string, page: IPage) => {
// 	// console.log(currentLink, page.path);
// 	const _currentPage = currentPage.split("/")[1].replaceAll("/", "");
// 	const _nextPage = page.path.split("?")[0].replaceAll("/", "");

// 	if (_currentPage === _nextPage || _currentPage.includes(page.path)) {
// 		// console.log(_currentPage, _nextPage, "===> true");
// 		return true;
// 	}
// 	// console.log(_currentPage, _nextPage, "===> false");
// 	return false;
// };

interface IBottomNavigationProps {
	className?: string;
}
export const BottomNavigation: FC<IBottomNavigationProps> = ({ className }) => {
	const currentPage = useLocation().pathname;
	const { data: currentUser } = useUser();
	const currenUserId = localStorage.getItem("user_id") || "0";

	if (currentPage === "/login/") {
		return null;
	}

	const _class = clsx(styles.bottom_navigation, className);

	// TODO temp solution, find a better way
	if (!currentUser) return null;
	return (
		<div className={_class}>
			<Link
				className={styles.navitem}
				to="/"
				activeProps={{ className: styles.active }}
				viewTransition
			>
				<HomeIcon />
			</Link>

			<Link
				className={styles.navitem}
				to="/discovery"
				activeProps={{ className: styles.active }}
				viewTransition
			>
				<DiscoveryIcon />
			</Link>

			<Link
				className={styles.navitem}
				to="/users/$userId"
				params={{ userId: currenUserId }}
				activeProps={{ className: styles.active }}
				viewTransition
			>
				{currentUser?.avatar ? (
					<ImageView src={currentUser?.avatar} className={styles.profile_image} />
				) : (
					<ProfileIcon />
				)}
			</Link>

			<Link
				className={styles.navitem}
				to="/settings"
				activeProps={{ className: styles.active }}
				viewTransition
			>
				<SettingsIcon />
			</Link>
		</div>
	);
};
