import { useFetchAnimeById } from "@/shared/hooks/useFetchAnimeById";
import {
	AnimeEpisodeIcon,
	AnimeRateIcon,
	AnimeStatusIcon,
} from "@/shared/icons";
import { AnimeGenres } from "@features/AnimeGenres/AnimeGenres";
import { AnimeInfoLine } from "@features/AnimeInfoLine/AnimeInfoLine";
import { AnimeStatus } from "@features/AnimeStatus/AnimeStatus";
import { AnimeWatch } from "@features/AnimeWatch/AnimeWatch";
import { Divider } from "@ui/Divider/Divider";
import { ImageView } from "@ui/ImageView/ImageView";
import { useParams } from "react-router-dom";
import styles from "./AnimeInfo.module.scss";

export const AnimeInfo = () => {
	const { animeId } = useParams();

	const { anime } = useFetchAnimeById(animeId || "1");

	console.log("reredner animeinfo");

	if (!anime) return <div>Anime info loading...</div>;

	return (
		<div className={styles.anime_info}>
			<ImageView src={anime?.poster.mainUrl} className={styles.anime_image} />
			<div className={styles.anime_info_left}>
				<span className={styles.name}>{anime?.name}</span>
				<AnimeInfoLine>
					<AnimeStatusIcon /> {anime?.status}
				</AnimeInfoLine>
				<AnimeInfoLine>
					<AnimeEpisodeIcon />
					{anime.episodes > 0 ? anime.episodes : anime.episodesAired} episodes
				</AnimeInfoLine>
				<AnimeInfoLine>
					<AnimeRateIcon /> {anime?.score}
				</AnimeInfoLine>
				<AnimeGenres />
				<Divider orientation="vertical" />
			</div>
			<div className={styles.anime_info_right}>
				<AnimeStatus />
				<AnimeWatch />
			</div>
		</div>
	);
};
