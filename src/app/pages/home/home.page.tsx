import styles from "./home.page.module.scss";

export const HomePage = () => {
	return (
		<div className={styles.home_page}>
			{/* <span>No widgets in Home Page</span> */}
			<span className={styles.news}>Stable 1.0 version is release!</span>
			{/* <Button variant="outline">
				<PlusIcon />
				Add widget
			</Button> */}
		</div>
	);
};
