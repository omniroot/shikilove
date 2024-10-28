import { useAnime } from "@/shared/hooks/useAnime";
import { Tooltip } from "@ui/Tooltip/Tooltip.tsx";
import { useParams } from "react-router-dom";
import styles from "./AnimeGenres.module.scss";
export const AnimeGenres = () => {
	const { animeId } = useParams();

	const { anime } = useAnime(animeId || "1");
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
