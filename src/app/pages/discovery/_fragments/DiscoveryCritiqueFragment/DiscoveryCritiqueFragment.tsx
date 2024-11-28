import { useForumCritiques } from "@/shared/services/forum/hooks/useForumCritiques.tsx";
import { AnimeCard } from "@features/AnimeCard/AnimeCard.tsx";
import { AnimeList } from "@features/AnimeList/AnimeList.tsx";

export const DiscoveryCritiqueFragment = () => {
	const { critiques, isCritiquesLoading } = useForumCritiques();

	if (!critiques || isCritiquesLoading) return "Loading...";
	return (
		<AnimeList scroll="none">
			{critiques.map((critique) => (
				<AnimeCard
					key={critique.id}
					variant="horizontal"
					anime={{
						id: String(critique.id),
						name: critique.topic_title,
					}}
				/>
			))}
		</AnimeList>
	);
};
