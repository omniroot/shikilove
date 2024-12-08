import { FC } from "react";
import styles from "./AnimeScreenshots.module.scss";
import { ImageView } from "@ui/ImageView/ImageView.tsx";
import { HeadingSection } from "@ui/HeadingSection/HeadingSection.tsx";
import { Button } from "@ui/Button/Button.tsx";
import { RightArrowIcon } from "@/shared/icons/index.tsx";

interface IAnimeScreenshot {
	id: string;
	originalUrl: string;
	x166Url: string;
	x332Url: string;
}

interface IAnimeScreenshotsProps {
	screenshots: IAnimeScreenshot[];
}
export const AnimeScreenshots: FC<IAnimeScreenshotsProps> = ({ screenshots }) => {
	let count = 0;

	if (!screenshots.length) return;
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
				{screenshots.map((screenshot) => {
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
