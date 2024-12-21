import { useAnilibGetAnimeByName } from "@/shared/services/anilib/useAnilib.ts";
import { IAnime } from "@/shared/services/anime/anime.interface.ts";
import { DubTeamSelect } from "@pages/anime/_components/AnimeWatchContainer/_components/WatchBottomSheet/_components/DubTeamSelect/DubTeamSelect.tsx";
import { EpisodeSelect } from "@pages/anime/_components/AnimeWatchContainer/_components/WatchBottomSheet/_components/EpisodeSelect/EpisodeSelect.tsx";
import { QualitySelect } from "@pages/anime/_components/AnimeWatchContainer/_components/WatchBottomSheet/_components/QualitySelect/QualitySelect.tsx";
import { BottomSheet } from "@ui/BottomSheet/BottomSheet.tsx";
import { Loader } from "lucide-react";
import { FC, useLayoutEffect, useRef, useState } from "react";
import styles from "./WatchBottomSheet.module.scss";
import { AnimePlayer } from "@features/AnimePlayer/AnimePlayer";

interface IWatchBottomSheetProps {
	anime: IAnime;
	onOutsideClick: () => void;
}

export const WatchBottomSheet: FC<IWatchBottomSheetProps> = ({ anime, onOutsideClick }) => {
	const { anilibAnime } = useAnilibGetAnimeByName(anime.name);
	const videoRef = useRef<HTMLVideoElement>(null);
	const [episode, setEpisode] = useState({ episodeId: -1, episode: -1 });
	const [team, setTeam] = useState("");
	const [link, setLink] = useState("");

	const onEpisodeSelect = (newValue: { episodeId: number; episode: number }) => {
		console.log("new episode: ", newValue);
		setEpisode(newValue);
	};

	const onTeamSelect = (newValue: string) => {
		console.log("new team: ", newValue);
		setTeam(newValue);
	};

	const onQualitySelect = (newValue: string) => {
		console.log("new link: ", newValue);

		setLink(newValue);
	};
	console.log({ episode, team, link });

	const _onOutsideClick = () => {
		console.log("Exit and save watching session");

		const watching = JSON.parse(localStorage.getItem("watching") || "{}");

		const nextWatching = {
			...watching,
			[anime.name]: {
				episode,
				team,
				link,
				timecode: videoRef.current?.currentTime,
			},
		};
		localStorage.setItem("watching", JSON.stringify(nextWatching));

		onOutsideClick();
	};

	const onVideoLoad = () => {
		const watching = JSON.parse(localStorage.getItem("watching") || "{}");
		const currentAnime = watching[anime.name];

		if (videoRef.current && currentAnime) {
			videoRef.current.currentTime = currentAnime.timecode || 0;
		}
	};

	useLayoutEffect(() => {
		const watching = JSON.parse(localStorage.getItem("watching") || "{}");

		const currentAnime = watching[anime.name];
		if (currentAnime) {
			console.log("Loaded from last watching", currentAnime);

			setEpisode(currentAnime.episode);
			setTeam(currentAnime.team);
			setLink(currentAnime.link);
		}
	}, []);

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
							<DubTeamSelect episodeId={episode.episodeId} onTeamSelect={onTeamSelect} />
						)}
					</div>
					{episode.episode > 0 && team.length && (
						<QualitySelect
							episodeId={episode.episodeId}
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
