import { SearchIcon } from "@/shared/icons/index.tsx";
import styles from "./Header.module.scss";
import { Button } from "@ui/Button/Button.tsx";
import { useFloatingSearchBar } from "@/shared/store/store.tsx";

export const Header = () => {
	const { toggleFloatingSearchBar } = useFloatingSearchBar();

	return (
		<div className={styles.header}>
			<div className={styles.left}>
				<span className={styles.logo}>ShikiLove</span>
			</div>
			<div className={styles.right}>
				<Button className={styles.search_button} onClick={toggleFloatingSearchBar}>
					<SearchIcon />
				</Button>
			</div>
		</div>
	);
};
