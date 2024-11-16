import { StarIcon } from "@/shared/icons/index.tsx";
import { IAnimeCard } from "@/shared/types/anime_card.interface.ts";
import { ImageView } from "@ui/ImageView/ImageView.tsx";
import { FC } from "react";
import { Link } from "react-router-dom";
import styles from "./HorizontalAnimeCard.module.scss";

interface IHorizontalAnimeCardProps {
	animeCard: IAnimeCard;
}

export const HorizontalAnimeCard: FC<IHorizontalAnimeCardProps> = ({ animeCard }) => {
	return (
		<Link to={`/animes/${animeCard.id}`} className={styles.anime_card} key={animeCard.id}>
			<ImageView src={animeCard.poster} alt={animeCard.name} className={styles.anime_image} />
			<div className={styles.info_container}>
				<div className={styles.anime_title}>{animeCard.name}</div>
				<div className={styles.subinfo_container}>
					<span className={styles.user_status}>{animeCard.userRate?.status}</span>
					{/* <RightArrowIcon /> */}
					<span className={styles.user_episodes}>
						{animeCard.userRate?.episodes} /{animeCard.userRate?.episodes}
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
			</div>
		</Link>
	);
};
