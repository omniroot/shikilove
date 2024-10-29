import { useAnime } from "@/shared/hooks/useAnime";
import { AnimeInfo } from "@features/AnimeInfo/AnimeInfo.tsx";
import { AnimeInfoSection } from "@features/AnimeInfoSection/AnimeInfoSection.tsx";
import { AnimeScreenshots } from "@features/AnimeScreenshots/AnimeScreenshots.tsx";
import { AnimeSimilarList } from "@features/AnimeSimilarList/AnimeSimilarList.tsx";
import { useParams } from "react-router-dom";
import styles from "./AnimePage.module.scss";
import { useChangeTitle } from "@/shared/hooks/useChangeTitle.tsx";

export const AnimePage = () => {
	const { animeId } = useParams();
	const { changeTitle } = useChangeTitle();
	const { anime } = useAnime(animeId || "1");

	// console.log("@userRate ", anime?.userRate);
	// console.log("@anime ", anime);
	if (!anime) return null;

	changeTitle(anime.russian);
	return (
		<div className={styles.anime_page}>
			<AnimeInfo />
			<AnimeInfoSection title="About">
				<span>{anime?.description}</span>
			</AnimeInfoSection>
			<AnimeInfoSection title="Screenshots">
				<AnimeScreenshots screenshots={anime?.screenshots} />
			</AnimeInfoSection>
			<AnimeInfoSection title="Similar">
				<AnimeSimilarList />
			</AnimeInfoSection>
		</div>
	);
};

export default AnimePage;
