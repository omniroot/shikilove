import { Tooltip } from "@ui/Tooltip/Tooltip";
import styles from "./AnimeGenres.module.scss";
import { useFetchAnimeById } from "@/shared/hooks/useFetchAnimeById";
import { useParams } from "react-router-dom";
export const AnimeGenres = () => {
	const { animeId } = useParams();

	const { anime } = useFetchAnimeById(animeId || "1");
	return (
		<div className={styles.genres_list}>
			{anime?.genres?.map((genre) => (
				<Tooltip
					key={genre.name}
					title="ну умер и умер, чё бубнить-то?ну умер и умер, чё бубнить-то?"
				>
					<div className={styles.genre}>{genre.name}</div>
				</Tooltip>
			))}
		</div>
	);
};
