import { IAnime } from "@/shared/services/anime/anime.interface.ts";
import styles from "./AnimeInfo.module.scss";
import { FC, useState } from "react";
import { ImageView } from "@ui/ImageView/ImageView.tsx";
import { Divider } from "@ui/Divider/Divider.tsx";
import { BottomSheet } from "@ui/BottomSheet/BottomSheet.tsx";
import { AnimatePresence } from "motion/react";

interface IAnimeInfoProps {
	anime: IAnime | undefined;
}

export const AnimeInfo: FC<IAnimeInfoProps> = ({ anime }) => {
	const [descriptionBottomSheet, setDescriptionBottomSheet] = useState(false);

	const onDescriptionClick = () => {
		setDescriptionBottomSheet((prev) => !prev);
	};

	if (!anime) return "Anime Loading...";
	return (
		<div className={styles.anime_info}>
			<ImageView
				src={anime.poster.mainUrl}
				full={anime.poster.originalUrl}
				className={styles.poster}
				allowFullscreen
			/>
			<div className={styles.subinfo}>
				<div className={styles.name}>{anime.name}</div>
				<div className={styles.russian}>{anime.russian}</div>
				{anime?.description?.length > 0 && (
					<>
						<Divider orientation="horizontal" />
						<div className={styles.description} onClick={onDescriptionClick}>
							{anime.description}
						</div>
					</>
				)}
			</div>

			<AnimatePresence>
				{descriptionBottomSheet && (
					<BottomSheet title="Description" onOutsideClick={() => setDescriptionBottomSheet(false)}>
						{anime?.description}
					</BottomSheet>
				)}
			</AnimatePresence>
		</div>
	);
};
