import { useAnime } from "@/shared/services/anime/hooks/useAnime.tsx";
import { AnimeInfo } from "@pages/anime/_components/AnimeInfo/AnimeInfo.tsx";
import { WatchButton } from "@pages/anime/_components/WatchButton/WatchButton.tsx";
import { useParams } from "react-router-dom";
import styles from "./anime.page.module.scss";
import { ImageView } from "@ui/ImageView/ImageView.tsx";

export const AnimePage = () => {
	const { animeId } = useParams();
	const { anime } = useAnime(animeId || "20");

	return (
		<div className={styles.anime_page}>
			<AnimeInfo anime={anime} />
			<WatchButton animeId={animeId} />
			<ImageView
				src={anime?.screenshots[0].x332Url}
				full={anime?.screenshots[0].originalUrl}
				allowFullscreen
			/>
		</div>
	);
};

export default AnimePage;
