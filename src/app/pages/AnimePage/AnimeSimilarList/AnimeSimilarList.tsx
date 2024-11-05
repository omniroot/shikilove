import { useAnime } from "@/shared/hooks/useAnime.tsx";
import { AnimeCard } from "@features/AnimeCard/AnimeCard.tsx";
import { AnimeList } from "@features/AnimeList/AnimeList.tsx";
import { useParams } from "react-router-dom";

export const AnimeSimilarList = () => {
	const { animeId } = useParams();
	let { similarAnimes } = useAnime(animeId || "1");

	if (similarAnimes) {
		similarAnimes = similarAnimes.slice(0, 20);
	}

	return (
		<AnimeList>
			{similarAnimes?.map((anime) => (
				<AnimeCard key={anime.id} similarAnime={anime} variant="similar" />
			))}
		</AnimeList>
	);
};
