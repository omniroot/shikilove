import { getPosterImage } from "@/shared/utils/getPosterImage.ts";
import { AnimeCard } from "@features/AnimeCard/AnimeCard.tsx";
import { AnimeList } from "@features/AnimeList/AnimeList.tsx";
import { useGetCritiques } from "@pages/discovery/_api/critiques/critiques.api.ts";
import { ICritique } from "@pages/discovery/_api/critiques/critiques.types.ts";
import { createLazyRoute } from "@tanstack/react-router";
import { Button } from "@ui/Button/Button.tsx";
import { Loader } from "@ui/Loader/Loader.tsx";

export const CritiquesPage = () => {
	const {
		data: critiquesPages,
		isFetching: isLoading,
		fetchNextPage: fetchNext,
	} = useGetCritiques();

	const critiques = critiquesPages?.pages.reduce<ICritique[]>((acc, critiques) => {
		for (const critique of critiques) {
			const lastCritiqueId = acc[acc.length - 1]?.id;

			if (lastCritiqueId !== critique.id) {
				acc.push(critique);
			}
		}
		return acc;
	}, []);
	const onMoreButtonClick = () => {
		console.log("more button clicked");

		fetchNext();
	};

	const onCritiqueShikimoriButtonClick = (
		event: React.MouseEvent<HTMLAnchorElement | HTMLButtonElement>,
	) => {
		event.stopPropagation();
		event.preventDefault();
		alert("Not realized");
	};

	return (
		<AnimeList scroll="none">
			{isLoading && <Loader fullscreen />}
			{critiques &&
				critiques.map((critique) => {
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
							testSlot={<Button onClick={onCritiqueShikimoriButtonClick}>Shikimori</Button>}
						/>
					);
				})}
			<Button onClick={onMoreButtonClick} style={{ width: "100%" }} disabled={isLoading}>
				More
			</Button>
		</AnimeList>
	);
};

export const Route = createLazyRoute("/discovery/critiques")({
	component: CritiquesPage,
});
