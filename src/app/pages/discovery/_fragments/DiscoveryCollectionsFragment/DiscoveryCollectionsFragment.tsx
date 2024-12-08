import { useForumCollections } from "@/shared/services/forum/hooks/useForumCollections.tsx";
import { AnimeCard } from "@features/AnimeCard/AnimeCard.tsx";
import { AnimeList } from "@features/AnimeList/AnimeList.tsx";

export const DiscoveryCollectionsFragment = () => {
	const { collections, isCollectionsLoading } = useForumCollections();

	if (!collections || isCollectionsLoading) return "Loading...";
	return (
		<AnimeList scroll="none">
			{collections.map((collection) => {
				return (
					<AnimeCard
						key={collection.id}
						variant="horizontal"
						anime={{
							id: String(collection.id),
							name: collection.topic_title,
						}}
						testSlot={<a href={`https://shikimori.me${collection.forum.url}`}>Read on Shikimori</a>}
					/>
				);
			})}
		</AnimeList>
	);
};
