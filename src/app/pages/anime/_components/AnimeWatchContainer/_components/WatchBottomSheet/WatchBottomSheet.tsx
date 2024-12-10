import {
	useAnilibGetAnimeByName,
	useAnilibGetEpisodes,
	useAnilibGetVideo,
} from "@/shared/services/anilib/useAnilib.ts";
import { IAnime } from "@/shared/services/anime/anime.interface.ts";
import { BottomSheet } from "@ui/BottomSheet/BottomSheet.tsx";
import { ButtonGroup, IButtonGroupElement } from "@ui/ButtonGroup/ButtonGroup.tsx";
import { FC, useEffect, useState } from "react";
import styles from "./WatchBottomSheet.module.scss";

interface IWatchBottomSheetProps {
	anime: IAnime;
	onOutsideClick: () => void;
}
export const WatchBottomSheet: FC<IWatchBottomSheetProps> = ({ anime, onOutsideClick }) => {
	const [animeName] = useState(anime?.name || "");
	const [player, setPlayer] = useState({ quality: 1080, link: "" });

	const { fetchAnilibAnime, anilibAnime } = useAnilibGetAnimeByName(animeName);
	const { fetchAnilibEpisodes, anilibEpisodes } = useAnilibGetEpisodes(anilibAnime?.slug_url || "");

	const [episodesSelectElements] = useState(
		anilibEpisodes?.map((episode) => {
			return {
				id: String(episode.id),
				title: episode.name ? `Episode ${episode.number}: ${episode.name}` : episode.number,
			};
		}) || ([] as IButtonGroupElement[]),
	);

	const [episode, setEpisode] = useState(() => {
		if (anime?.userRate && anime?.userRate?.episodes > 0) {
			return episodesSelectElements[anime?.userRate?.episodes - 1];
		} else {
			return episodesSelectElements[0];
		}
	});

	console.log({ episodesSelectElements, episode });

	const { fetchAnilibVideo, anilibVideo } = useAnilibGetVideo(Number(episode?.id || 0) || 0);

	// const isHentai = anime?.genres.some((genre) => genre.name === "Hentai");

	useEffect(() => {
		if (animeName === "") return;
		console.log("effect");

		if (!anilibAnime) {
			fetchAnilibAnime();
		}
		if (!anilibEpisodes && anilibAnime) {
			fetchAnilibEpisodes();
		}
	}, [animeName, anilibAnime]);

	useEffect(() => {
		if (!anilibVideo && episode) {
			fetchAnilibVideo();
			return;
		}
		if (anilibVideo) {
			const qualities = anilibVideo.filter((video) => video.team === "AniDUB");
			const max_quailty = qualities[0].videos[0];
			setPlayer(max_quailty);
		}
	}, [anilibVideo]);

	if (!anime && !anilibAnime) return;
	return (
		<BottomSheet title="Watch" onOutsideClick={onOutsideClick}>
			<div className={styles.content}>
				<div className={styles.episodes_group}></div>
				{anilibAnime?.name}
				{episodesSelectElements && episode && (
					<ButtonGroup
						className={styles.episodes_group}
						elements={episodesSelectElements}
						activeElement={episode}
						setActiveElement={(newValue) => setEpisode(newValue)}
					/>
				)}
				{player.link !== "" && (
					<div>
						<span>{player.quality}p</span>
						<video src={player.link} className={styles.video_player} controls />
					</div>
				)}
			</div>
		</BottomSheet>
	);
};
