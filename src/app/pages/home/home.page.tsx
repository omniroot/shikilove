import { PlusIcon } from "@/shared/icons/index.tsx";
import { Button } from "@ui/Button/Button.tsx";
import styles from "./home.page.module.scss";

export const HomePage = () => {
	return (
		<div className={styles.home_page}>
			<span>No widgets in Home Page</span>
			<Button variant="outline">
				<PlusIcon />
				Add widget
			</Button>
		</div>
	);
};
