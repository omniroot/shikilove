import { FC } from "react";
import styles from "./AnimeScreenshots.module.scss";
import { ImageView } from "@ui/ImageView/ImageView";

interface IAnimeScreenshot {
	id: string;
	originalUrl: string;
	x166Url: string;
	x332Url: string;
}

interface IAnimeScreenshotsProps {
	screenshots: IAnimeScreenshot[];
}
export const AnimeScreenshots: FC<IAnimeScreenshotsProps> = ({
	screenshots,
}) => {
	return (
		<div className={styles.anime_screenshots_container}>
			{screenshots.map((screenshot) => {
				return (
					<ImageView
						width="350px"
						height="200px"
						radius="1"
						alt={`Anime screenshot ${screenshot.id}`}
						src={screenshot.x332Url}
						key={screenshot.id}
					/>
				);
			})}
		</div>
	);
};
