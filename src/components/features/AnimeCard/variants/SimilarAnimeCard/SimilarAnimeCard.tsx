import { FC } from "react";
import styles from "./SimilarAnimeCard.module.scss";
import { ISimilarAnime } from "@/shared/services/anime/anime.interface.ts";
import { ImageView } from "@ui/ImageView/ImageView.tsx";
import { getPosterImage } from "@/shared/utils/getPosterImage.ts";
import { Link } from "react-router-dom";
interface ISimilarAnimeCardProps {
	similarAnime: ISimilarAnime;
}
export const SimilarAnimeCard: FC<ISimilarAnimeCardProps> = ({ similarAnime }) => {
	return (
		<Link to={`/animes/${similarAnime.id}`} className={styles.similar_anime_card}>
			<ImageView src={getPosterImage(similarAnime.image.preview)} className={styles.anime_image} />
			<span className={styles.anime_title}>{similarAnime.name}</span>
			<span className={styles.anime_episodes}>
				{similarAnime.episodes || similarAnime.episodes_aired} episodes
			</span>
			<div>
				<span>{similarAnime.kind}</span>
				<span> - </span>
				<span>
					{similarAnime.released_on?.split("-")[0] || similarAnime.aired_on?.split("-")[0]}
				</span>
			</div>
		</Link>
	);
};
