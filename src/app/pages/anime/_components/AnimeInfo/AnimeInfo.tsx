import { parseShikimoriText } from "@/shared/utils/parseShikimoriText.ts";
import { BottomSheet } from "@ui/BottomSheet/BottomSheet.tsx";
import { Divider } from "@ui/Divider/Divider.tsx";
import { ImageView } from "@ui/ImageView/ImageView.tsx";
import { AnimatePresence } from "motion/react";
import { FC, useState } from "react";
import styles from "./AnimeInfo.module.scss";
import { IAnime } from "@pages/anime/_api/anime/anime.interface.ts";

interface IAnimeInfoProps {
	anime: IAnime;
}

export const AnimeInfo: FC<IAnimeInfoProps> = ({ anime }) => {
	const [descriptionBottomSheet, setDescriptionBottomSheet] = useState(false);

	const toggleDescriptionBottomSheet = () => {
		setDescriptionBottomSheet((prev) => !prev);
	};

	return (
		<div className={styles.anime_info}>
			<ImageView
				src={anime.poster.mainUrl}
				full={anime.poster.originalUrl}
				className={styles.poster}
				allowFullscreen
				loading="eager"
			/>
			<div className={styles.subinfo}>
				<div className={styles.name}>{anime.name}</div>
				<div className={styles.russian}>{anime.russian}</div>
				{anime?.description?.length > 0 && (
					<>
						<Divider orientation="horizontal" />
						<div
							className={styles.description}
							onClick={toggleDescriptionBottomSheet}
							dangerouslySetInnerHTML={{
								__html: parseShikimoriText(anime.description),
							}}
						>
							{/* {anime.description} */}
						</div>
					</>
				)}
			</div>

			<AnimatePresence>
				{descriptionBottomSheet && (
					<BottomSheet title="Description" onOutsideClick={toggleDescriptionBottomSheet}>
						<div dangerouslySetInnerHTML={{ __html: parseShikimoriText(anime.description) }}></div>
					</BottomSheet>
				)}
			</AnimatePresence>
		</div>
	);
};
