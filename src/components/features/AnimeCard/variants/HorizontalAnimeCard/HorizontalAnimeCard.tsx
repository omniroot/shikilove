import { FC } from "react";
import styles from "./HorizontalAnimeCard.module.scss";
import { ImageView } from "@ui/ImageView/ImageView.tsx";
import { Link } from "react-router-dom";
import { IUserRate } from "@/shared/services/userRate/userRate.interface.ts";
import { title } from "process";
import { StarIcon } from "@/shared/icons/index.tsx";
interface IHorizontalAnimeCardProps {
	userRateAnime: IUserRate;
}

export const HorizontalAnimeCard: FC<IHorizontalAnimeCardProps> = ({ userRateAnime }) => {
	return (
		<Link
			to={`/animes/${userRateAnime.anime.id}`}
			className={styles.anime_card}
			key={userRateAnime.id}
		>
			<ImageView
				src={userRateAnime.anime.poster.main2xUrl}
				alt={title}
				className={styles.anime_image}
			/>
			<div className={styles.info_container}>
				<div className={styles.anime_title}>{userRateAnime.anime.name}</div>
				<div className={styles.subinfo_container}>
					<span className={styles.user_status}>{userRateAnime.status}</span>
					{/* <RightArrowIcon /> */}
					<span className={styles.user_episodes}>
						{userRateAnime.episodes} /
						{userRateAnime.anime.episodes || userRateAnime.anime.episodesAired}
					</span>
					{/* <RightArrowIcon /> */}
					<span>
						{userRateAnime.anime.score} <StarIcon />
					</span>
				</div>
				<div className={styles.bottominfo}>
					<span>{userRateAnime.anime.kind}</span>
					<span>-</span>
					<span>{userRateAnime.anime.releasedOn.year || userRateAnime.anime.airedOn.year}</span>
				</div>
			</div>
		</Link>
	);
};
