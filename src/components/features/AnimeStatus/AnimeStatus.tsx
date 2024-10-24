import { useFetchAnimeById } from "@/shared/hooks/useFetchAnimeById.tsx";
import { AnimeEpisodeSelect } from "@features/AnimeEpisodeSelect/AnimeEpisodeSelect.tsx";
import {
	AnimeStatusSelect,
	animeStatusSelectOptions,
	IAnimeStatusSelectOption,
} from "@features/AnimeStatusSelect/AnimeStatusSelect.tsx";
import { useParams } from "react-router-dom";
import styles from "./AnimeStatus.module.scss";
import { useChangeAnimeUserRate } from "@/shared/hooks/useChangeAnimeUserRate.tsx";
import { ButtonGroup } from "@ui/ButtonGroup/ButtonGroup.tsx";
import {
	DroppedIcon,
	PlannedIcon,
	PostponedIcon,
	WatchedIcon,
	WatchingIcon,
} from "@/shared/icons/index.tsx";
import { useFetchUserRates } from "@/shared/hooks/useFetchUserRates.tsx";
import { IUserRateAnimeStatus } from "@/shared/types/userRate.interface.ts";

const addToElements = [
	{
		id: "watching",
		title: "watching",
		icon: <WatchingIcon />,
	},
	{
		id: "planned",
		title: "planned",
		icon: <PlannedIcon />,
	},
	{
		id: "completed",
		title: "completed",
		icon: <WatchedIcon />,
	},
	{
		id: "rewatching",
		title: "rewatching",
		icon: <PostponedIcon />,
	},
	{
		id: "on_hold",
		title: "postponed",
		icon: <PostponedIcon />,
	},
	{
		id: "dropped",
		title: "dropped",
		icon: <DroppedIcon />,
	},
];

export const AnimeStatus = () => {
	const { animeId } = useParams();
	const { anime, refetchAnime } = useFetchAnimeById(animeId || "1");
	const { addToUserRate } = useFetchUserRates();

	const { changeAnimeUserStatus, changeAnimeUserEpisodes } =
		useChangeAnimeUserRate();
	const selectedStatus =
		animeStatusSelectOptions.find((option) => {
			if (anime?.userRate !== null) {
				return option.value === anime?.userRate.status;
			}
			return {};
		}) || null;

	const selectedEpisode = anime?.userRate?.episodes || 0;

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

	const onAddToSelectChanged = (id: string) => {
		if (addToUserRate && animeId && id) {
			addToUserRate(animeId, id as IUserRateAnimeStatus);
			refetchAnime();
		}
	};

	if (!anime) return <div>Anime status loading...</div>;

	return (
		<div>
			{!anime.userRate ? (
				<div className={styles.add_to_container}>
					<span className={styles.add_to_text}>Add To:</span>
					<ButtonGroup
						className={styles.add_to_select}
						elements={addToElements}
						onClick={onAddToSelectChanged}
						deafultActive="1"
					/>
				</div>
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
