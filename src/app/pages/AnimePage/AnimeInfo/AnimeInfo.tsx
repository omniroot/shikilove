import { useAnime } from "@/shared/hooks/useAnime";
import { AnimeStatusIcon, AnimeEpisodeIcon, AnimeRateIcon } from "@/shared/icons/index.tsx";
import { AnimeGenres } from "@/app/pages/AnimePage/AnimeGenres/AnimeGenres";
import { AnimeInfoLine } from "@features/AnimeInfoLine/AnimeInfoLine.tsx";
import { AnimeStatus } from "@/app/pages/AnimePage/AnimeStatus/AnimeStatus";
import { AnimeWatch } from "@/app/pages/AnimePage/AnimeWatch/AnimeWatch";
import { Divider } from "@ui/Divider/Divider.tsx";
import { ImageView } from "@ui/ImageView/ImageView.tsx";
import { useParams } from "react-router-dom";
import styles from "./AnimeInfo.module.scss";

export const AnimeInfo = () => {
	const { animeId } = useParams();

	const { anime } = useAnime(animeId || "1");

	console.log("reredner animeinfo");

	if (!anime) return <div>Anime info loading...</div>;

	return (
		<div className={styles.anime_info}>
			<ImageView src={anime.poster.mainUrl} className={styles.anime_image} />
			<div className={styles.anime_info_left}>
				<span className={styles.name}>{anime.name}</span>
				<AnimeInfoLine>
					<AnimeStatusIcon /> {anime.status}
				</AnimeInfoLine>
				<AnimeInfoLine>
					<AnimeEpisodeIcon />
					{anime.episodes > 0 ? anime.episodes : anime.episodesAired} episodes
				</AnimeInfoLine>
				<AnimeInfoLine>
					<AnimeRateIcon /> {anime.score}
				</AnimeInfoLine>
				<AnimeGenres />
			</div>
			<Divider orientation="vertical" />
			<div className={styles.anime_info_right}>
				<AnimeStatus />
				<AnimeWatch />
			</div>
		</div>
	);
};
