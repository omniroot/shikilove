import { useFetchSimilarAnime } from "@/shared/hooks/usеFetchSimilarAnime";
import { getPosterImage } from "@/shared/utils/getPosterImage";
import type { FC } from "react";
import styles from "./AnimeSimilarList.module.scss";
import { ImageView } from "@ui/ImageView/ImageView";
import { Link } from "react-router-dom";

interface IAnimeSimilarListProps {
	animeId?: string;
}
export const AnimeSimilarList: FC<IAnimeSimilarListProps> = ({ animeId }) => {
	let { similarAnimes } = useFetchSimilarAnime(animeId || "1");

	if (similarAnimes) {
		similarAnimes = similarAnimes?.slice(0, 20);
	}

	return (
		<div className={styles.anime_similar_list}>
			{similarAnimes?.map((anime) => (
				<Link to={`/animes/${anime.id}`} className={styles.anime_card} key={anime.id}>
					<ImageView
						radius="1"
						src={getPosterImage(anime.image.preview)}
						width="100%"
						height="85%"
						alt={anime.name}
					/>
					<span className={styles.anime_title}>{anime.name}</span>
				</Link>
			))}
		</div>
	);
};
