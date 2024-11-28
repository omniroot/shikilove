import { IAnime } from "@/shared/services/anime/anime.interface.ts";
import styles from "./AnimeMoreInfo.module.scss";
import { FC } from "react";
import { motion } from "framer-motion";

interface IAnimeMoreInfoProps {
	anime: IAnime | undefined;
}
export const AnimeMoreInfo: FC<IAnimeMoreInfoProps> = ({ anime }) => {
	if (!anime) return "Anime more info loading...";
	return (
		<motion.div className={styles.anime_more_info} initial={{ scale: 0.9 }} animate={{ scale: 1 }}>
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
		</motion.div>
	);
};