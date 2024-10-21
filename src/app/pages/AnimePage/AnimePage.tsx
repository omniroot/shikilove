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
import { Divider } from "@ui/Divider/Divider";
import {
	AnimeStatusSelect,
	animeStatusSelectOptions,
	IAnimeStatusSelectOption,
} from "@features/AnimeStatusSelect/AnimeStatusSelect";
import { Tooltip } from "@ui/Tooltip/Tooltip";
import { useChangeAnimeUserRate } from "@/shared/hooks/useChangeAnimeUserRate";
import { AnimeEpisodeSelect } from "@features/AnimeEpisodeSelect/AnimeEpisodeSelect";
import { AnimeScreenshots } from "@features/AnimeScreenshots/AnimeScreenshots";
import { Button } from "@ui/Button/Button";
import { openAnimeExternal } from "@/shared/utils/openAnimeSites";

export const AnimePage = () => {
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

	const selectedEpisode = anime?.userRate?.episodes || 0;

	console.log("@userRate ", anime?.userRate);
	console.log("@anime ", anime);

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

	const onAnimegoButtonClick = () => {
		if (anime?.russian) openAnimeExternal(anime.russian, "animego");
	};

	const onHAnimeButtonClick = () => {
		if (anime?.name) openAnimeExternal(anime.name, "hanime");
	};

	const onNHentaiButtonClick = () => {
		if (anime?.name) openAnimeExternal(anime.name, "nhentai");
	};

	console.log(selectedStatus);
	if (!anime) return null;
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
						<AnimeStatusIcon /> {anime?.status}
					</AnimeInfoLine>
					<AnimeInfoLine>
						<AnimeEpisodeIcon /> {anime?.episodes} episodes
					</AnimeInfoLine>
					<AnimeInfoLine>
						<AnimeRateIcon /> {anime?.score}
					</AnimeInfoLine>
					<div className={styles.genres_list}>
						{anime?.genres?.map((genre) => (
							<Tooltip
								key={genre.id}
								title="ну умер и умер, чё бубнить-то?ну умер и умер, чё бубнить-то?"
							>
								<div className={styles.genre}>{genre.name}</div>
							</Tooltip>
						))}
					</div>
				</div>
				<Divider orientation="vertical" />
				<div className={styles.anime_info_right}>
					{!anime.userRate ? (
						<div>Add to list</div>
					) : (
						<div className={styles.user_selects}>
							<AnimeEpisodeSelect
								eipsodesCount={anime.episodes}
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

					<div className={styles.watch_container}>
						<Button variant="animego" onClick={onAnimegoButtonClick}>
							Animego
						</Button>
						<Button variant="hanime" onClick={onHAnimeButtonClick}>
							hAnime
						</Button>
						<Button variant="nhentai" onClick={onNHentaiButtonClick}>
							Nhentai
						</Button>
					</div>
				</div>
			</div>
			<AnimeInfoSection title="About">
				<span>{anime?.description}</span>
			</AnimeInfoSection>
			<AnimeInfoSection title="Screenshots">
				<AnimeScreenshots screenshots={anime.screenshots} />
			</AnimeInfoSection>
			<AnimeInfoSection title="Similar">
				<AnimeSimilarList animeId={animeId} />
			</AnimeInfoSection>
		</div>
	);
};
