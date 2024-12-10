import { FC } from "react";
import styles from "./AnimeScreenshots.module.scss";
import { ImageView } from "@ui/ImageView/ImageView.tsx";
import { HeadingSection } from "@ui/HeadingSection/HeadingSection.tsx";
import { Button } from "@ui/Button/Button.tsx";
import { RightArrowIcon } from "@/shared/icons/index.tsx";
import { IAnime } from "@/shared/services/anime/anime.interface.ts";

interface IAnimeScreenshotsProps {
	anime: IAnime;
}
export const AnimeScreenshots: FC<IAnimeScreenshotsProps> = ({ anime }) => {
	let count = 0;

	if (!anime.screenshots) return;
	return (
		<HeadingSection
			title="Screenshots"
			actionsSlot={
				<Button variant="ternary" as="Link" to="screenshots">
					More
					<RightArrowIcon />
				</Button>
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
