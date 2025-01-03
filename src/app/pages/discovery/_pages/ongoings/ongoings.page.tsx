import { useAnimeOngoings } from "@/shared/services/anime/hooks/useAnimeOngoing.tsx";
import { AnimeCard } from "@features/AnimeCard/AnimeCard.tsx";
import { AnimeList } from "@features/AnimeList/AnimeList.tsx";
import { createLazyRoute } from "@tanstack/react-router";
import { Loader } from "@ui/Loader/Loader.tsx";

export const OngoingsPage = () => {
	const { animeOngoings, isAnimeOngoingsLoading } = useAnimeOngoings();

	if (!animeOngoings || isAnimeOngoingsLoading) return <Loader fullscreen />;
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
						episodes: ongoing.episodes || ongoing.episodesAired,
					}}
				/>
			))}
		</AnimeList>
	);
};

export const Route = createLazyRoute("/discovery/ongoings")({
	component: OngoingsPage,
});
