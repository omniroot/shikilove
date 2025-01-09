import { AnimeCard } from "@features/AnimeCard/AnimeCard.tsx";
import { AnimeList } from "@features/AnimeList/AnimeList.tsx";
import { ICollection, useGetCollections } from "@pages/discovery/_api/collections/index.ts";
import { createLazyRoute } from "@tanstack/react-router";
import { Button } from "@ui/Button/Button.tsx";
import { Loader } from "@ui/Loader/Loader.tsx";

export const CollectionsPage = () => {
	const {
		data: collectionsPages,
		isFetching: isLoading,
		fetchNextPage: fetchNext,
	} = useGetCollections();

	const collections = collectionsPages?.pages.reduce<ICollection[]>((acc, collections) => {
		for (const collection of collections) {
			const lastCollectionId = acc[acc.length - 1]?.id;

			if (lastCollectionId !== collection.id) {
				acc.push(collection);
			}
		}
		return acc;
	}, []);

	const onCollectionShikimoriButtonClick = (
		event: React.MouseEvent<HTMLAnchorElement | HTMLButtonElement>,
		link: string,
	) => {
		event.stopPropagation();
		event.preventDefault();
		window.open(link, "_blank");
	};

	const onMoreButtonClick = () => {
		console.log("more button clicked");

		fetchNext();
	};

	return (
		<AnimeList scroll="none">
			{isLoading && <Loader fullscreen />}
			{collections &&
				collections.map((collection) => {
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
			<Button onClick={onMoreButtonClick} style={{ width: "100%" }}>
				More
			</Button>
		</AnimeList>
	);
};

export const Route = createLazyRoute("/discovery/collections")({
	component: CollectionsPage,
});
