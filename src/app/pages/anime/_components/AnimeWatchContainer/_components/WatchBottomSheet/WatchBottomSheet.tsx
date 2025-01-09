import { useStorage } from "@/shared/store/storage/useStorage.tsx";
import { AnimePlayer } from "@features/AnimePlayer/AnimePlayer";
import { DubTeamSelect } from "@pages/anime/_components/AnimeWatchContainer/_components/WatchBottomSheet/_components/DubTeamSelect/DubTeamSelect.tsx";
import { EpisodeSelect } from "@pages/anime/_components/AnimeWatchContainer/_components/WatchBottomSheet/_components/EpisodeSelect/EpisodeSelect.tsx";
import {
	IQuality,
	QualitySelect,
} from "@pages/anime/_components/AnimeWatchContainer/_components/WatchBottomSheet/_components/QualitySelect/QualitySelect.tsx";
import { BottomSheet } from "@ui/BottomSheet/BottomSheet.tsx";
import { Loader } from "lucide-react";
import { FC, useRef, useState } from "react";
import styles from "./WatchBottomSheet.module.scss";
import { IAnime } from "@pages/anime/_api/anime/anime.interface.ts";
import { useGetAnilibAnime } from "@pages/anime/_api/anilib/getAnilibAnime/getAnilibAnime.ts";

interface IWatchBottomSheetProps {
	anime: IAnime;
	onOutsideClick: () => void;
}

export const WatchBottomSheet: FC<IWatchBottomSheetProps> = ({ anime, onOutsideClick }) => {
	const { getWatchHistory, addWatchHistory } = useStorage();
	const previuosWatchState = getWatchHistory(anime.name);
	console.info({ previuosWatchState });
	const { data: anilibAnime } = useGetAnilibAnime({ name: anime.name });
	const videoRef = useRef<HTMLVideoElement>(null);
	const [episode, setEpisode] = useState(
		previuosWatchState.episode ?? { episodeId: -1, episode: -1 },
	);
	const [team, setTeam] = useState(previuosWatchState.team ?? "");
	const [quality, setQuality] = useState(previuosWatchState.quality ?? "");
	const [link, setLink] = useState(previuosWatchState.link ?? "");

	const onEpisodeSelect = (newValue: { episodeId: number; episode: number }) => {
		console.log("new episode: ", newValue);
		setEpisode(newValue);
	};

	const onTeamSelect = (newValue: string) => {
		console.log("new team: ", newValue);
		setTeam(newValue);
	};

	const onQualitySelect = (newValue: IQuality) => {
		console.log("new link: ", newValue);

		setLink(newValue.link);
		setQuality(newValue.quality);
	};
	console.log({ episode, team, link });

	const _onOutsideClick = () => {
		console.log("Exit and save watching session");

		addWatchHistory(anime.name, {
			episode,
			team,
			link,
			quality,
			timecode: videoRef.current?.currentTime ?? 0,
		});

		onOutsideClick();
	};

	// const onVideoLoad = () => {
	// 	const watching = JSON.parse(localStorage.getItem("watching") || "{}");
	// 	const currentAnime = watching[anime.name];

	// 	if (videoRef.current && currentAnime) {
	// 		videoRef.current.currentTime = currentAnime.timecode || 0;
	// 	}
	// };

	// useLayoutEffect(() => {
	// 	const watching = JSON.parse(localStorage.getItem("watching") || "{}");

	// 	const currentAnime = watching[anime.name];
	// 	if (currentAnime) {
	// 		console.log("Loaded from last watching", currentAnime);

	// 		setEpisode(currentAnime.episode);
	// 		setTeam(currentAnime.team);
	// 		setLink(currentAnime.link);
	// 	}
	// }, []);

	return (
		<BottomSheet
			title="Watch"
			onOutsideClick={_onOutsideClick}
			className={styles.watch_bottom_sheet}
		>
			{!anilibAnime ? (
				<Loader />
			) : (
				<div className={styles.content}>
					<div className={styles.selects}>
						<EpisodeSelect
							animeSlugUrl={anilibAnime.slug_url}
							defaultEpisode={
								episode.episode > 0 ? episode.episode : (anime.userRate?.episodes ?? 1)
							}
							onEpisodeSelect={onEpisodeSelect}
						/>
						{episode.episode > 0 && (
							<DubTeamSelect
								episodeId={episode.episodeId}
								defaultTeam={team}
								onTeamSelect={onTeamSelect}
							/>
						)}
					</div>
					{episode.episode > 0 && team.length && (
						<QualitySelect
							episodeId={episode.episodeId}
							defaultQuality={quality}
							defaultLink={link}
							team={team}
							onQualitySelect={onQualitySelect}
						/>
					)}

					{link !== "" && (
						<div>
							<AnimePlayer src={link} />
							{/* <video
								src={link}
								ref={videoRef}
								className={styles.video_player}
								controls
								onLoadedMetadata={onVideoLoad}
							/> */}
						</div>
					)}
				</div>
			)}
		</BottomSheet>
	);
};
