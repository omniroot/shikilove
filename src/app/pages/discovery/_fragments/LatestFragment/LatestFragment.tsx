import { useAnimeLatests } from "@/shared/services/anime/hooks/useAnimeLatest.tsx";
import { getAnimeCardData } from "@/shared/utils/getAnimeCardData.ts";
import { AnimeCard } from "@features/AnimeCard/AnimeCard.tsx";
import { AnimeList } from "@features/AnimeList/AnimeList.tsx";

export const LatestFragment = () => {
	const { animeLatests, isAnimeLatestsLoading } = useAnimeLatests();

	if (!animeLatests || isAnimeLatestsLoading) return "Loading...";
	return (
		<AnimeList scroll="none">
			{animeLatests.map((latest) => (
				<AnimeCard key={latest.id} animeCard={getAnimeCardData(latest)} />
			))}
		</AnimeList>
	);
};
