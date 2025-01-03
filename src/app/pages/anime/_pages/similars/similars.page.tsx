import { useAnime } from "@/shared/services/anime/hooks/useAnime.tsx";
import { useSimilarAnimes } from "@/shared/services/anime/hooks/useAnimeSimilar.tsx";
import { getPosterImage } from "@/shared/utils/getPosterImage.ts";
import { AnimeCard } from "@features/AnimeCard/AnimeCard.tsx";
import { createLazyRoute } from "@tanstack/react-router";
import { HeadingSection } from "@ui/HeadingSection/HeadingSection.tsx";
import styles from "./similars.page.module.scss";

export const SimilarsPage = () => {
	const { animeId } = Route.useParams();
	const { anime } = useAnime(animeId || "0");
	const { similarAnimes } = useSimilarAnimes(animeId || "0");

	if (!anime || !similarAnimes) return;
	return (
		<div className={styles.similars_page}>
			<HeadingSection title={`${anime.name} | Similars`}>
				{similarAnimes.map((similar) => (
					<AnimeCard
						key={similar.id}
						variant="horizontal"
						anime={{
							id: similar.id,
							poster: getPosterImage(similar.image.x96),
							name: similar.name,
							russian: similar.russian,
							episodes: similar.episodes || similar.episodes_aired,
							airedOn: similar.aired_on,
							kind: similar.kind,
							score: Number(similar.score),
							userRate: {},
						}}
					/>
				))}
			</HeadingSection>
		</div>
	);
};

export const Route = createLazyRoute("/animes/$animeId/similars")({
	component: SimilarsPage,
});
