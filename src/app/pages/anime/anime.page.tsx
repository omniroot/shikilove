import { useChangeTitle } from "@/shared/hooks/useChangeTitle.tsx";
import {
	AnimeFranchises,
	AnimeInfo,
	AnimeMoreInfo,
	AnimeScreenshots,
	AnimeSimilar,
	AnimeWatchContainer,
} from "@pages/anime/_components/index.ts";
import { createLazyRoute } from "@tanstack/react-router";
import { Loader } from "@ui/Loader/Loader.tsx";
import { useEffect } from "react";
import styles from "./anime.page.module.scss";
import { useGetAnime } from "@pages/anime/_api/anime/getAnimes/getAnimes.ts";

export const AnimePage = () => {
	const { animeId } = Route.useParams();
	const { data: anime } = useGetAnime({ animeId });
	const { changeTitle } = useChangeTitle();

	useEffect(() => {
		if (anime) {
			changeTitle(anime.russian);
		}
		return () => changeTitle("");
	}, [anime]);

	if (!anime) return <Loader fullscreen />;

	return (
		<div className={styles.anime_page}>
			<AnimeInfo anime={anime} />
			<AnimeMoreInfo anime={anime} />
			<AnimeWatchContainer anime={anime} />
			<AnimeScreenshots anime={anime} />
			<AnimeFranchises anime={anime} />
			<AnimeSimilar anime={anime} />
		</div>
	);
};

export const Route = createLazyRoute("/animes/$animeId")({
	component: AnimePage,
});
