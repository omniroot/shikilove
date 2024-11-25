import { useForumCollections } from "@/shared/services/forum/hooks/useForumCollections.tsx";
import { AnimeCard } from "@features/AnimeCard/AnimeCard.tsx";
import { AnimeList } from "@features/AnimeList/AnimeList.tsx";

export const DiscoveryCollectionsFragment = () => {
	const { collections, isCollectionsLoading } = useForumCollections();

	if (!collections || isCollectionsLoading) return "Loading...";
	return (
		<AnimeList scroll="none">
			{collections.map((collection) => (
				<AnimeCard
					key={collection.id}
					variant="horizontal"
					anime={{
						id: String(collection.id),
						name: collection.topic_title,
					}}
				/>
			))}
		</AnimeList>
	);
};
