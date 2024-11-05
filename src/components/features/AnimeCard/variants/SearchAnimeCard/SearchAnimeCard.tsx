import { FC } from "react";
import styles from "./SearchAnimeCard.module.scss";
import { ImageView } from "@ui/ImageView/ImageView.tsx";
import { Link } from "react-router-dom";
import { title } from "process";
import { StarIcon } from "@/shared/icons/index.tsx";
import { IAnime } from "@/shared/services/anime/anime.interface.ts";
interface ISearchAnimeCardProps {
	animeSearch: IAnime;
}

export const SearchAnimeCard: FC<ISearchAnimeCardProps> = ({ animeSearch: userRateAnime }) => {
	return (
		<Link to={`/animes/${userRateAnime.id}`} className={styles.anime_card} key={userRateAnime.id}>
			<ImageView src={userRateAnime.poster.mainUrl} alt={title} className={styles.anime_image} />
			<div className={styles.info_container}>
				<div className={styles.anime_title}>{userRateAnime.name}</div>
				<div className={styles.subinfo_container}>
					<span className={styles.user_status}>{userRateAnime.status}</span>
					{/* <RightArrowIcon /> */}
					<span className={styles.user_episodes}>
						{userRateAnime.episodes} /{userRateAnime.episodes || userRateAnime.episodesAired}
					</span>
					{/* <RightArrowIcon /> */}
					<span>
						{userRateAnime.score} <StarIcon />
					</span>
				</div>
				<div className={styles.bottominfo}>
					<span>{userRateAnime.kind}</span>
					<span>-</span>
					<span>{userRateAnime.releasedOn.year || userRateAnime.airedOn.year}</span>
				</div>
			</div>
		</Link>
	);
};
