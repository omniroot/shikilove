import { useFetchSimilarAnime } from "@/shared/hooks/usеFetchSimilarAnime";
import { getPosterImage } from "@/shared/utils/getPosterImage";
import type { FC } from "react";
import { AnimeList } from "@features/AnimeList/AnimeList";
import { AnimeCard } from "@features/AnimeCard/AnimeCard";

interface IAnimeSimilarListProps {
	animeId?: string;
}
export const AnimeSimilarList: FC<IAnimeSimilarListProps> = ({ animeId }) => {
	let { similarAnimes } = useFetchSimilarAnime(animeId || "1");

	if (similarAnimes) {
		similarAnimes = similarAnimes?.slice(0, 20);
	}

	return (
		<AnimeList>
			{similarAnimes?.map((anime) => (
				<AnimeCard
					key={anime.id}
					id={anime.id}
					image={getPosterImage(anime.image.preview)}
					title={anime.name}
				/>
			))}
		</AnimeList>
	);
};
