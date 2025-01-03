import { useForumCritiques } from "@/shared/services/forum/hooks/useForumCritiques.tsx";
import { getPosterImage } from "@/shared/utils/getPosterImage.ts";
import { AnimeCard } from "@features/AnimeCard/AnimeCard.tsx";
import { AnimeList } from "@features/AnimeList/AnimeList.tsx";
import { createLazyRoute } from "@tanstack/react-router";
import { Button } from "@ui/Button/Button.tsx";
import { Loader } from "@ui/Loader/Loader.tsx";

export const CritiquesPage = () => {
	const { critiques, isCritiquesLoading } = useForumCritiques();

	const onCritiqueShikimoriButtonClick = (
		event: React.MouseEvent<HTMLAnchorElement | HTMLButtonElement>,
	) => {
		event.stopPropagation();
		event.preventDefault();
		alert("Not realized");
	};

	if (!critiques || isCritiquesLoading) return <Loader fullscreen />;
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
						testSlot={<Button onClick={onCritiqueShikimoriButtonClick}>Shikimori</Button>}
					/>
				);
			})}
		</AnimeList>
	);
};

export const Route = createLazyRoute("/discovery/critiques")({
	component: CritiquesPage,
});
