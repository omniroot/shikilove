import type { ISimilarAnime } from "@/shared/hooks/usеFetchSimilarAnime";
import { getPosterImage } from "@/shared/utils/getPosterImage";
import { AnimeCard } from "@features/AnimeCard/AnimeCard";
import type { FC } from "react";
import styles from "./AnimeSimilarList.module.scss";

interface IAnimeSimilarListProps {
	animes?: ISimilarAnime[] | null;
	variant?: "scroll" | "grid";
}
export const AnimeSimilarList: FC<IAnimeSimilarListProps> = ({
	variant = "scroll",
	animes,
	...rest
}) => {
	return (
		<div className={styles.animesimilarlist} {...rest}>
			{animes?.map((anime) => (
				<AnimeCard
					key={anime.id}
					id={anime.id}
					title={anime.name}
					image={getPosterImage(anime.image.preview)}
				/>
			))}
		</div>
	);
};
