import { RightArrowIcon } from "@/shared/icons/index.tsx";
import { ButtonLink } from "@ui/Button/Button.tsx";
import { HeadingSection } from "@ui/HeadingSection/HeadingSection.tsx";
import { ImageView } from "@ui/ImageView/ImageView.tsx";
import { FC } from "react";
import styles from "./AnimeScreenshots.module.scss";
import { IAnime } from "@pages/anime/_api/anime/anime.interface.ts";

interface IAnimeScreenshotsProps {
	anime: IAnime;
}
export const AnimeScreenshots: FC<IAnimeScreenshotsProps> = ({ anime }) => {
	let count = 0;

	if (!anime.screenshots.length) return;
	return (
		<HeadingSection
			title="Screenshots"
			actionsSlot={
				<ButtonLink variant="outline" from="/animes/$animeId" to="screenshots">
					More
					<RightArrowIcon />
				</ButtonLink>
			}
		>
			<div className={styles.anime_screenshots_container}>
				{anime.screenshots.map((screenshot) => {
					count++;
					if (count <= 5) {
						return (
							<ImageView
								alt={`Anime screenshot ${screenshot.id}`}
								src={screenshot.x332Url}
								className={styles.anime_screenshot_image}
								full={screenshot.originalUrl}
								key={screenshot.id}
								allowFullscreen
							/>
						);
					}
				})}
			</div>
		</HeadingSection>
	);
};
