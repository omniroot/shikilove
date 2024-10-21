import { AnimeInfo } from "@features/AnimeInfo/AnimeInfo";
import { AnimeInfoSection } from "@features/AnimeInfoSection/AnimeInfoSection";
import styles from "./AnimePage.module.scss";
import { AnimeScreenshots } from "@features/AnimeScreenshots/AnimeScreenshots";
import { AnimeSimilarList } from "@features/AnimeSimilarList/AnimeSimilarList";
import { useFetchAnimeById } from "@/shared/hooks/useFetchAnimeById";
import { useParams } from "react-router-dom";

export const AnimePage = () => {
	const { animeId } = useParams();
	const { anime } = useFetchAnimeById(animeId || "1");

	// console.log("@userRate ", anime?.userRate);
	// console.log("@anime ", anime);

	if (!anime) return null;
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
				<AnimeSimilarList animeId={animeId} />
			</AnimeInfoSection>
		</div>
	);
};
