import { useFetchAnimeById } from "@/shared/hooks/useFetchAnimeById";
import { AnimeEpisodeSelect } from "@features/AnimeEpisodeSelect/AnimeEpisodeSelect";
import {
	AnimeStatusSelect,
	animeStatusSelectOptions,
	IAnimeStatusSelectOption,
} from "@features/AnimeStatusSelect/AnimeStatusSelect";
import { useParams } from "react-router-dom";
import styles from "./AnimeStatus.module.scss";
import { useChangeAnimeUserRate } from "@/shared/hooks/useChangeAnimeUserRate";

export const AnimeStatus = () => {
	const { animeId } = useParams();
	const { anime } = useFetchAnimeById(animeId || "1");

	const { changeAnimeUserStatus, changeAnimeUserEpisodes } =
		useChangeAnimeUserRate();
	const selectedStatus =
		animeStatusSelectOptions.find((option) => {
			if (anime?.userRate !== null) {
				return option.value === anime?.userRate.status;
			}
			return {};
		}) || null;

	const onAnimeUserStatusSelected = (item: IAnimeStatusSelectOption) => {
		if (anime?.userRate && item) {
			changeAnimeUserStatus(anime.userRate.id, item.value);
		}
	};

	const onAnimeUserEpisodeSelected = (episode: number) => {
		if (anime?.userRate && episode) {
			changeAnimeUserEpisodes(anime.userRate.id, episode);
		}
	};

	const selectedEpisode = anime?.userRate?.episodes || 0;

	if (!anime) return <div>Anime status loading...</div>;

	return (
		<div>
			{!anime.userRate ? (
				<div>Add to list</div>
			) : (
				<div className={styles.user_selects}>
					<AnimeEpisodeSelect
						eipsodesCount={
							anime.episodes > 0 ? anime.episodes : anime.episodesAired
						}
						defaultValue={{
							label: selectedEpisode,
							value: selectedEpisode,
						}}
						onOptionSelected={onAnimeUserEpisodeSelected}
					/>
					<AnimeStatusSelect
						defaultValue={selectedStatus}
						onOptionSelected={onAnimeUserStatusSelected}
					/>
				</div>
			)}
		</div>
	);
};
