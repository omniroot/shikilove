import { StarIcon } from "@/shared/icons/index.tsx";
import { IAnimeCard } from "@/shared/types/anime_card.interface.ts";
import { ImageView } from "@ui/ImageView/ImageView.tsx";
import { FC } from "react";
import { Link } from "react-router-dom";
import styles from "./HorizontalAnimeCard.module.scss";
import { motion } from "framer-motion";

interface IHorizontalAnimeCardProps {
	animeCard: IAnimeCard;
}

export const HorizontalAnimeCard: FC<IHorizontalAnimeCardProps> = ({ animeCard }) => {
	return (
		<motion.div
			className={styles.anime_card}
			initial={{ opacity: 0.9, scale: 1, y: 30 }}
			whileInView={{ opacity: 1, scale: 1, y: 0 }}
			transition={{ duration: 0.25 }}
		>
			<ImageView src={animeCard.poster} alt={animeCard.name} className={styles.anime_image} />
			<Link to={`/animes/${animeCard.id}`} className={styles.info_container}>
				<div className={styles.anime_title}>{animeCard.name}</div>
				<div className={styles.subinfo_container}>
					<span className={styles.user_status}>{animeCard.userRate?.status}</span>
					{/* <RightArrowIcon /> */}
					<span className={styles.user_episodes}>
						{animeCard.userRate?.episodes} /{animeCard.episodes}
					</span>
					{/* <RightArrowIcon /> */}
					<span>
						{animeCard.score} <StarIcon />
					</span>
				</div>
				<div className={styles.bottominfo}>
					<span>{animeCard.kind}</span>
					<span>-</span>
					<span>{animeCard.airedOn}</span>
				</div>
			</Link>
		</motion.div>
	);
};
