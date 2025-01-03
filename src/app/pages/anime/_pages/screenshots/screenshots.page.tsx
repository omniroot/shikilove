import { useAnime } from "@/shared/services/anime/hooks/useAnime.tsx";
import { createLazyRoute } from "@tanstack/react-router";
import { HeadingSection } from "@ui/HeadingSection/HeadingSection.tsx";
import { ImageView } from "@ui/ImageView/ImageView.tsx";
import styles from "./screenshots.page.module.scss";

export const ScreenshotsPage = () => {
	const { animeId } = Route.useParams();
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

export const Route = createLazyRoute("/animes/$animeId/screenshots")({
	component: ScreenshotsPage,
});
