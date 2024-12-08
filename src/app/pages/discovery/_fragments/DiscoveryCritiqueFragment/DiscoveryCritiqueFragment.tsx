import { useForumCritiques } from "@/shared/services/forum/hooks/useForumCritiques.tsx";
import { getPosterImage } from "@/shared/utils/getPosterImage.ts";
import { AnimeCard } from "@features/AnimeCard/AnimeCard.tsx";
import { AnimeList } from "@features/AnimeList/AnimeList.tsx";

export const DiscoveryCritiqueFragment = () => {
	const { critiques, isCritiquesLoading } = useForumCritiques();

	if (!critiques || isCritiquesLoading) return "Loading...";
	return (
		<AnimeList scroll="none">
			{critiques.map((critique) => {
				return (
					<AnimeCard
						key={critique.id}
						variant="horizontal"
						anime={{
							id: String(critique.linked.target.id),
							name: critique.topic_title,
							poster: getPosterImage(critique.linked.target.image.x96),
							description: `Critique by ${critique.user.nickname}`,
						}}
					/>
				);
			})}
		</AnimeList>
	);
};
