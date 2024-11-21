import { Button } from "@ui/Button/Button.tsx";
import styles from "./home.page.module.scss";
import { PlusIcon } from "@/shared/icons/index.tsx";

export const HomePage = () => {
	return (
		<div className={styles.home_page}>
			<span>No widgets in Home Page</span>
			<Button>
				<PlusIcon />
				Add widget
			</Button>
		</div>
	);
};
