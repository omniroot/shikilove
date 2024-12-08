import { useForumCollections } from "@/shared/services/forum/hooks/useForumCollections.tsx";
import { AnimeCard } from "@features/AnimeCard/AnimeCard.tsx";
import { AnimeList } from "@features/AnimeList/AnimeList.tsx";
import { Button } from "@ui/Button/Button.tsx";
import { Link } from "react-router-dom";

export const DiscoveryCollectionsFragment = () => {
	const { collections, isCollectionsLoading } = useForumCollections();

	const onCollectionShikimoriButtonClick = (
		event: React.MouseEvent<HTMLAnchorElement | HTMLButtonElement>,
		link: string,
	) => {
		event.stopPropagation();
		event.preventDefault();
		window.open(link, "_blank");
	};

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
						testSlot={
							<Button
								onClick={(event) =>
									onCollectionShikimoriButtonClick(
										event,
										`https://shikimori.me/collections/${collection.linked_id}`,
									)
								}
							>
								Shikimori
							</Button>
						}
					/>
				);
			})}
		</AnimeList>
	);
};
