import { RightArrowIcon } from "@/shared/icons/index.tsx";
import { IAnimeCard } from "@/shared/types/anime_card.interface.ts";
import { ImageView } from "@ui/ImageView/ImageView.tsx";
import { motion } from "framer-motion";
import { FC } from "react";
import { Link } from "react-router-dom";
import styles from "./HorizontalAnimeCard.module.scss";

interface IHorizontalAnimeCardProps {
	anime: IAnimeCard;
}

export const HorizontalAnimeCard: FC<IHorizontalAnimeCardProps> = ({ anime }) => {
	return (
		<motion.div
			initial={{ opacity: 0.9, scale: 0.9 }}
			whileInView={{ opacity: 1, scale: 1 }}
			transition={{ duration: 0.25 }}
			className={styles.anime_card}
		>
			<ImageView src={anime.poster} alt="poster" className={styles.poster} />
			<Link to={`/animes/${anime.id}`} className={styles.info}>
				<span className={styles.title}>{anime.name}</span>
				<div className={styles.line}>
					{anime.userRate?.status}
					<RightArrowIcon height={12} />
					<span className={styles.user_episodes}>
						{anime.userRate?.episodes} /{anime.episodes}
					</span>
				</div>
				{/* <div className={styles.bottominfo}>{anime.episodes}</div> */}
			</Link>
		</motion.div>
	);
};

// export const HorizontalAnimeCard: FC<IHorizontalAnimeCardProps> = ({ animeCard }) => {
// 	return (
// 		<motion.div
//
// 		>
// 			<ImageView src={animeCard.poster} alt={animeCard.name} className={styles.anime_image} />
//
// 				<div className={styles.anime_title}>{animeCard.name}</div>
//
// 				</div>
// 				<div className={styles.bottominfo}>
// 					<span>{animeCard.kind}</span>
// 					<span>-</span>
// 					<span>{animeCard.airedOn}</span>
// 				</div>
//
// 		</motion.div>
// 	);
// };
