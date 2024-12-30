import { PlusIcon } from "@/shared/icons/index.tsx";
import { Button } from "@ui/Button/Button.tsx";
import styles from "./home.page.module.scss";
import { AnimePlayer } from "@features/AnimePlayer/AnimePlayer";
import { useLocalStorage } from "@uidotdev/usehooks";
import { useEffect } from "react";

export const HomePage = () => {
	const [test, setTest] = useLocalStorage<string>("test");

	const link =
		"http://commondatastorage.googleapis.com/gtv-videos-bucket/sample/ForBiggerBlazes.mp4";

	return (
		<div className={styles.home_page}>
			<span>No widgets in Home Page</span>
			{test}
			<Button onClick={() => setTest(String(Math.random()))}>change test variable</Button>
			<Button variant="outline">
				<PlusIcon />
				Add widget
			</Button>
			<AnimePlayer title="Chrome cast test" src={link} />
		</div>
	);
};
