import { useAnimeLatests } from "@/shared/services/anime/hooks/useAnimeLatest.tsx";
import { AnimeCard } from "@features/AnimeCard/AnimeCard.tsx";
import { AnimeList } from "@features/AnimeList/AnimeList.tsx";

export const LatestFragment = () => {
	const { animeLatests, isAnimeLatestsLoading } = useAnimeLatests();

	if (!animeLatests || isAnimeLatestsLoading) return "Loading...";
	return (
		<AnimeList scroll="none">
			{animeLatests.map((latest) => (
				<AnimeCard
					key={latest.id}
					variant="horizontal"
					anime={{
						id: latest.id,
						poster: latest.poster.mainUrl,
						name: latest.name,
						episodes: latest.episodes,
						userRate: {
							episodes: latest.userRate.episodes,
							id: String(latest.userRate.id),
							score: latest.userRate.score,
							status: latest.userRate.status,
						},
					}}
				/>
			))}
		</AnimeList>
	);
};
