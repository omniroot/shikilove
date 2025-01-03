import { NavBar } from "@ui/NavBar/NavBar";
import styles from "./Sidebar.module.scss";
import { useLocation } from "@tanstack/react-router";
import { PAGES } from "@/shared/consts/pages";
import { ShikimoriIcon } from "@/shared/icons";

export const Sidebar = () => {
	const currentPage = useLocation().pathname;
	const pages_start = PAGES.sidebar_start;
	const pages_end = PAGES.sidebar_end;

	if (currentPage === "/login/") {
		return null;
	}

	return (
		<div className={styles.sidebar_container}>
			<div className={styles.sidebar}>
				<ShikimoriIcon className={styles.shikimori_icon} />
				<div className={styles.divider} />
				<NavBar pages={pages_start} />
				<div className={styles.spacer} />
				<NavBar pages={pages_end} />
			</div>
		</div>
	);
};
