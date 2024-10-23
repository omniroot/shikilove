import { useFetchSimilarAnime } from "@/shared/hooks/usеFetchSimilarAnime.tsx";
import { getPosterImage } from "@/shared/utils/getPosterImage.ts";
import { AnimeCard } from "@features/AnimeCard/AnimeCard.tsx";
import { AnimeList } from "@features/AnimeList/AnimeList.tsx";
import type { FC } from "react";

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
