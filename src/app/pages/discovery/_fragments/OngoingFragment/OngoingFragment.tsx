import { useAnimeOngoings } from "@/shared/services/anime/hooks/useAnimeOngoing.tsx";
import { getAnimeCardData } from "@/shared/utils/getAnimeCardData.ts";
import { AnimeCard } from "@features/AnimeCard/AnimeCard.tsx";
import { AnimeList } from "@features/AnimeList/AnimeList.tsx";

export const OngoingFragment = () => {
	const { animeOngoings, isAnimeOngoingsLoading } = useAnimeOngoings();

	if (!animeOngoings || isAnimeOngoingsLoading) return "Loading...";
	return (
		<AnimeList scroll="none">
			{animeOngoings.map((ongoing) => (
				<AnimeCard key={ongoing.id} animeCard={getAnimeCardData(ongoing)} />
			))}
		</AnimeList>
	);
};
