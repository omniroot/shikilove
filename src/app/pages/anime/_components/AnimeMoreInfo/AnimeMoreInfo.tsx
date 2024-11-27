import { IAnime } from "@/shared/services/anime/anime.interface.ts";
import styles from "./AnimeMoreInfo.module.scss";
import { FC } from "react";
interface IAnimeMoreInfoProps {
	anime: IAnime | undefined;
}
export const AnimeMoreInfo: FC<IAnimeMoreInfoProps> = ({ anime }) => {
	if (!anime) return "Anime more info loading...";
	return (
		<div className={styles.anime_more_info}>
			<div className={styles.element}>
				<span className={styles.title}>Skikimiori</span>
				<span className={styles.content}>{anime.score}</span>
			</div>
			<div className={styles.element}>
				<span className={styles.title}>Episodes</span>
				<span className={styles.content}>{anime.episodes || anime.episodesAired}</span>
			</div>
			<div className={styles.element}>
				<span className={styles.title}>Duration</span>
				<span className={styles.content}>{anime.duration}</span>
			</div>
		</div>
	);
};
