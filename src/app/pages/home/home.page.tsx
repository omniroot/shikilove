import { PlusIcon } from "@/shared/icons/index.tsx";
import { Button } from "@ui/Button/Button.tsx";
import { useEffect } from "react";
import styles from "./home.page.module.scss";

export const HomePage = () => {
	const link =
		"http://commondatastorage.googleapis.com/gtv-videos-bucket/sample/ForBiggerBlazes.mp4";

	const onButtonClick = () => {
		// addABear();
		// setTest(Math.random());
	};

	useEffect(() => {
		window.addEventListener("storage", (event) => {
			console.log(event);
		});
	}, []);

	return (
		<div className={styles.home_page}>
			<span>No widgets in Home Page</span>
			{/* {bears} */}
			<Button onClick={onButtonClick}>change test variable</Button>
			<Button variant="outline">
				<PlusIcon />
				Add widget
			</Button>
			{/* <AnimePlayer title="Chrome cast test" src={link} /> */}
		</div>
	);
};
