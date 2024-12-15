import { useAnilibGetAnimeByName } from "@/shared/services/anilib/useAnilib.ts";
import { IAnime } from "@/shared/services/anime/anime.interface.ts";
import { EpisodeSelect } from "@pages/anime/_components/AnimeWatchContainer/_components/WatchBottomSheet/_components/EpisodeSelect/EpisodeSelect.tsx";
import { BottomSheet } from "@ui/BottomSheet/BottomSheet.tsx";
import { FC, useEffect, useRef, useState } from "react";
import styles from "./WatchBottomSheet.module.scss";
import { DubTeamSelect } from "@pages/anime/_components/AnimeWatchContainer/_components/WatchBottomSheet/_components/DubTeamSelect/DubTeamSelect.tsx";
import { QualitySelect } from "@pages/anime/_components/AnimeWatchContainer/_components/WatchBottomSheet/_components/QualitySelect/QualitySelect.tsx";

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

	useEffect(() => {
		const watching = JSON.parse(localStorage.getItem("watching") || "{}");

		const currentAnime = watching[anime.name];
		if (currentAnime) {
			setEpisode(currentAnime.episode);
			setTeam(currentAnime.team);
			setLink(currentAnime.link);
		}
	}, [videoRef]);

	const onVideoLoad = () => {
		const watching = JSON.parse(localStorage.getItem("watching") || "{}");
		const currentAnime = watching[anime.name];

		if (videoRef.current && currentAnime) {
			videoRef.current.currentTime = currentAnime.timecode || 0;
		}
	};

	// useEffect(() => {
	// 	if (videoRef.current) {
	// 		const watching = JSON.parse(localStorage.getItem("watching") || "{}");
	// 		const nextWatching = {
	// 			...watching,
	// 			[anime.name]: {
	// 				...watching[anime.name],
	// 				timecode: videoRef.current.currentTime,
	// 			},
	// 		};
	// 		localStorage.setItem("watching", JSON.stringify(nextWatching));
	// 	}
	// }, [videoRef]);

	// const { isLoading, episodes, changeEpisode, videos } = useWatchBottomSheet({
	// 	name: anime.name,
	// });
	// const [activeEpisode, setActiveEpisode] = useState<string>();
	// const [activeTeam, setActiveTeam] = useState<string>();
	// const [activeQuality, setActiveQuality] = useState<string>();
	// const [episodesSelectElements, setEpisodesSelectElements] = useState<ISelectElement[]>([]);
	// const [teamsSelectElements, setTeamsSelectElements] = useState<ISelectElement[]>([]);
	// const [qualitiesSelectElements, setQualitiesSelectElements] = useState<ISelectElement[]>([]);
	// const prefferedTeam = "AniLibria.TV";

	// useEffect(() => {
	// 	if (episodes) {
	// 		let _nextActiveElement = "";
	// 		const _nextElements = episodes.map((episode) => {
	// 			if (Number(episode.number) === anime.userRate.episodes) {
	// 				_nextActiveElement = episode.number;
	// 			}
	// 			return {
	// 				value: episode.number,
	// 				label: episode.name ? `${episode.number}: ${episode.name}` : `${episode.number}`,
	// 			};
	// 		});
	// 		setEpisodesSelectElements(_nextElements);
	// 		setActiveEpisode(_nextActiveElement);
	// 		changeEpisode(Number(_nextActiveElement));
	// 	}
	// }, [episodes]);

	// useEffect(() => {
	// 	if (videos) {
	// 		let _nextActiveElement = "";
	// 		const _nextElements = videos.map((video) => {
	// 			if (video.team === prefferedTeam) {
	// 				_nextActiveElement = video.team;
	// 			}
	// 			return {
	// 				value: video.team,
	// 				label: video.team,
	// 			};
	// 		});

	// 		setTeamsSelectElements(_nextElements);
	// 		setActiveTeam(_nextActiveElement);
	// 	}
	// }, [videos]);

	// useEffect(() => {
	// 	if (videos && activeEpisode) {
	// 		const _nextElements = videos
	// 			.filter((video) => video.team === activeTeam)
	// 			.map(({ links }) => {
	// 				return links.map((link) => ({
	// 					value: link.quality,
	// 					label: link.quality,
	// 				})) as ISelectElement[];
	// 			});

	// 		// setVideosSelectElements(_nextElements);
	// 	}
	// }, [activeTeam, videos]);

	// useEffect(() => {
	// 	if (activeEpisode && episodes) {
	// 		changeEpisode(Number(activeEpisode));
	// 	}
	// }, [activeEpisode]);

	// useEffect(() => {
	// 	if (activeEpisode && episodes) {
	// 		changeEpisode(Number(activeEpisode));
	// 	}
	// }, [episodes]);

	// // const isHentai = anime?.genres.some((genre) => genre.name === "Hentai");

	// useEffect(() => {
	// 	if (animeName === "") return;
	// 	console.log("effect");

	// 	if (!anilibAnime) {background: linear-gradient(180deg, rgb(205, 179, 206) 0%, rgb(192, 176, 159) 100%);
	// 	}
	// 	if (!anilibEpisodes && anilibAnime) {
	// 		fetchAnilibEpisodes();
	// 	}
	// }, [animeName, anilibAnime]);

	// useEffect(() => {
	// 	if (!anilibVideo && episode) {
	// 		fetchAnilibVideo();
	// 		return;
	// 	}
	// 	if (anilibVideo) {
	// 		const qualities = anilibVideo.filter((video) => video.team === "AniDUB");
	// 		const max_quailty = qualities[0].videos[0];
	// 		setPlayer(max_quailty);
	// 	}
	// }, [anilibVideo]);

	// if (isLoading || !anilibEpisodes)
	// 	return (
	// 		<BottomSheet title="Watch" onOutsideClick={onOutsideClick}>
	// 			<span>Loading...</span>
	// 		</BottomSheet>
	// 	);

	return (
		<BottomSheet
			title="Watch"
			onOutsideClick={_onOutsideClick}
			className={styles.watch_bottom_sheet}
		>
			{!anilibAnime ? (
				<span>Loading...</span>
			) : (
				<div className={styles.content}>
					<div className={styles.selects}>
						<EpisodeSelect
							animeSlugUrl={anilibAnime.slug_url}
							defaultEpisode={episode.episode > 0 ? episode.episode : anime.userRate.episodes || 1}
							onEpisodeSelect={onEpisodeSelect}
						/>
						{episode.episode > 0 && (
							<DubTeamSelect episodeId={episode.episodeId} onTeamSelect={onTeamSelect} />
						)}
						{episode.episode > 0 && team.length && (
							<QualitySelect
								episodeId={episode.episodeId}
								team={team}
								onQualitySelect={onQualitySelect}
							/>
						)}
					</div>

					{link !== "" && (
						<div>
							<video
								src={link}
								ref={videoRef}
								className={styles.video_player}
								controls
								onLoadedMetadata={onVideoLoad}
							/>
						</div>
					)}
				</div>
			)}
		</BottomSheet>
	);
};
