import { useChangeTitle } from "@/shared/hooks/useChangeTitle.tsx";
import { useAnime } from "@/shared/services/anime/hooks/useAnime.tsx";
import {
	AnimeInfo,
	AnimeMoreInfo,
	AnimeWatchContainer,
	AnimeScreenshots,
	AnimeSimilar,
} from "@pages/anime/_components/index.ts";
import { useEffect } from "react";
import { useParams } from "react-router-dom";
import styles from "./anime.page.module.scss";

export const AnimePage = () => {
	const { animeId } = useParams();
	const { anime } = useAnime(animeId || "20");
	const { changeTitle } = useChangeTitle();

	useEffect(() => {
		if (anime) {
			changeTitle(anime.russian);
		}
		return () => changeTitle("");
	}, [anime]);

	if (!anime) return;

	return (
		<div className={styles.anime_page}>
			<AnimeInfo anime={anime} />
			<AnimeMoreInfo anime={anime} />
			<AnimeWatchContainer anime={anime} />
			<AnimeScreenshots anime={anime} />
			<AnimeSimilar anime={anime} />
		</div>
	);
};

export default AnimePage;
