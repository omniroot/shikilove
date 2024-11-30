import { HeadingSection } from "@ui/HeadingSection/HeadingSection.tsx";
import styles from "./screenshots.page.module.scss";
import { useAnime } from "@/shared/services/anime/hooks/useAnime.tsx";
import { useParams } from "react-router-dom";
import { ImageView } from "@ui/ImageView/ImageView.tsx";

export const ScreenshotsPage = () => {
	const { animeId } = useParams();
	const { anime } = useAnime(animeId || "0");

	if (!anime) return;
	return (
		<div className={styles.screenshots_page}>
			<HeadingSection title={`${anime.name} | Screenshots`}>
				{anime.screenshots.map((screenshot) => (
					<ImageView
						key={screenshot.id}
						src={screenshot.x332Url}
						full={screenshot.originalUrl}
						allowFullscreen
						className={styles.screenshot}
					/>
				))}
			</HeadingSection>
		</div>
	);
};

export default ScreenshotsPage;
