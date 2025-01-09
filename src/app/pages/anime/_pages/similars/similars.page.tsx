import { getPosterImage } from "@/shared/utils/getPosterImage.ts";
import { AnimeCard } from "@features/AnimeCard/AnimeCard.tsx";
import { createLazyRoute } from "@tanstack/react-router";
import { HeadingSection } from "@ui/HeadingSection/HeadingSection.tsx";
import styles from "./similars.page.module.scss";
import { useGetAnime } from "@pages/anime/_api/anime/getAnimes/getAnimes.ts";
import { useGetAnimeSimilars } from "@pages/anime/_api/anime/getAnimeSimilars/getAnimeSimilars.ts";

export const SimilarsPage = () => {
	const { animeId } = Route.useParams();
	const { data: anime } = useGetAnime({ animeId });
	const { data: similarAnimes } = useGetAnimeSimilars({ animeId });

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
