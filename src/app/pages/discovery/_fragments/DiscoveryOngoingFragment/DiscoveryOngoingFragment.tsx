import { useAnimeOngoings } from "@/shared/services/anime/hooks/useAnimeOngoing.tsx";
import { AnimeCard } from "@features/AnimeCard/AnimeCard.tsx";
import { AnimeList } from "@features/AnimeList/AnimeList.tsx";

export const OngoingFragment = () => {
	const { animeOngoings, isAnimeOngoingsLoading } = useAnimeOngoings();

	if (!animeOngoings || isAnimeOngoingsLoading) return "Loading...";
	return (
		<AnimeList scroll="none">
			{animeOngoings.map((ongoing) => (
				<AnimeCard
					key={ongoing.id}
					variant="horizontal"
					anime={{
						id: ongoing.id,
						poster: ongoing.poster.mainUrl,
						name: ongoing.name,
						episodes: ongoing.episodes,
					}}
				/>
			))}
		</AnimeList>
	);
};
