import { SearchIcon, SettingsIcon } from "@/shared/icons/index.tsx";
import styles from "./Header.module.scss";
import { Button } from "@ui/Button/Button.tsx";
import { useFloatingSearchBar } from "@/shared/store/store.tsx";
import { Link } from "react-router-dom";

export const Header = () => {
	const { toggleFloatingSearchBar } = useFloatingSearchBar();

	return (
		<div className={styles.header}>
			<div className={styles.left}>
				<span className={styles.logo}>ShikiLove</span>
			</div>
			<div className={styles.right}>
				<Link to={"/settings"} className={styles.settings_button}>
					<SettingsIcon />
				</Link>

				<Button className={styles.search_button} onClick={toggleFloatingSearchBar}>
					<SearchIcon />
				</Button>
			</div>
		</div>
	);
};
