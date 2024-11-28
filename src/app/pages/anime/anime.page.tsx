import { useChangeTitle } from "@/shared/hooks/useChangeTitle.tsx";
import { useAnime } from "@/shared/services/anime/hooks/useAnime.tsx";
import { AnimeInfo } from "@pages/anime/_components/AnimeInfo/AnimeInfo.tsx";
import { AnimeMoreInfo } from "@pages/anime/_components/AnimeMoreInfo/AnimeMoreInfo.tsx";
import { AnimeScreenshots } from "@pages/anime/_components/AnimeScreenshots/AnimeScreenshots.tsx";
import { AnimeWatchContainer } from "@pages/anime/_components/AnimeWatchContainer/AnimeWatchContainer.tsx";
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

	return (
		<div className={styles.anime_page}>
			<AnimeInfo anime={anime} />
			<AnimeMoreInfo anime={anime} />
			<AnimeWatchContainer anime={anime} />
			<AnimeScreenshots screenshots={anime?.screenshots || []} />
		</div>
	);
};

export default AnimePage;
