import { PlusIcon } from "@/shared/icons/index.tsx";
import { Button } from "@ui/Button/Button.tsx";
import styles from "./home.page.module.scss";
import { AnimePlayer } from "@features/AnimePlayer/AnimePlayer";

export const HomePage = () => {
	return (
		<div className={styles.home_page}>
			<span>No widgets in Home Page</span>
			<Button variant="outline">
				<PlusIcon />
				Add widget
			</Button>
			<AnimePlayer
				title="Необъятный океан"
				src="https://video1.anilib.me/.%D0%B0s//uploads/converted_videos/anime/13850/players/65742/e5dc327f-0c86-41ee-a2bd-b934da8d8c33_2160.mp4"
			/>
		</div>
	);
};
