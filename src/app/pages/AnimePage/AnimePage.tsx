import { useFetchAnimeById } from "@/shared/hooks/useFetchAnimeById";

import { ImageView } from "@ui/ImageView/ImageView";
import styles from "./AnimePage.module.scss";
import { useParams } from "react-router-dom";
import {
	AnimeEpisodeIcon,
	AnimeRateIcon,
	AnimeStatusIcon,
} from "@/shared/icons";
import { AnimeInfoLine } from "@features/AnimeInfoLine/AnimeInfoLine";
import { AnimeInfoSection } from "@features/AnimeAbout/AnimeInfoSection";
import { AnimeSimilarList } from "@features/AnimeSimilarList/AnimeSimilarList";

export const AnimePage = () => {
	const { animeId } = useParams();
	const { anime } = useFetchAnimeById(animeId || "1");

	return (
		<div className={styles.anime_page}>
			<div className={styles.anime_info}>
				<ImageView
					src={anime?.poster.mainUrl}
					radius="1"
					width="230px"
					height="340px"
				/>
				<div className={styles.anime_info_left}>
					<span className={styles.name}>{anime?.name}</span>
					<AnimeInfoLine>
						{" "}
						<AnimeStatusIcon /> {anime?.status}
					</AnimeInfoLine>
					<AnimeInfoLine>
						{" "}
						<AnimeEpisodeIcon /> {anime?.episodes} episodes
					</AnimeInfoLine>
					<AnimeInfoLine>
						{" "}
						<AnimeRateIcon /> {anime?.score}
					</AnimeInfoLine>
					<div className={styles.genres_list}>
						{anime?.genres?.map((genre) => (
							<div key={genre.id} className={styles.genre}>{genre.name}</div>
						))}
					</div>
				</div>
				<div>
					{/* <span>{anime?.name}</span>
					<span>{anime?.status}</span> */}
				</div>
			</div>
			<AnimeInfoSection title="About">
				<span>{anime?.description}</span>
			</AnimeInfoSection>
			<AnimeInfoSection title="Screenshots">
				<div>Add AnimeScreenshots component</div>
			</AnimeInfoSection>
			<AnimeInfoSection title="Similar">
				<AnimeSimilarList animeId={animeId} />
			</AnimeInfoSection>
		</div>
	);
};
