import { IAnime } from "@/shared/services/anime/anime.interface.ts";
import { BottomSheet } from "@ui/BottomSheet/BottomSheet.tsx";
import { Button } from "@ui/Button/Button.tsx";
import { FC, useState } from "react";
import styles from "./WatchBottomSheet.module.scss";
import { useExternalSites } from "@/shared/hooks/useExternalSites.tsx";
import axios from "axios";

interface IWatchBottomSheetProps {
	anime: IAnime | undefined;
	onOutsideClick: () => void;
}
export const WatchBottomSheet: FC<IWatchBottomSheetProps> = ({ anime, onOutsideClick }) => {
	const { openHentaiHaven, openAnilib } = useExternalSites();
	const [link, setLink] = useState("");
	const isHentai = anime?.genres.some((genre) => genre.name === "Hentai");

	const onHentaiHavenClick = () => {
		openHentaiHaven(anime?.name);
	};

	const onAnilibClick = () => {
		openAnilib(anime?.name);
	};

	const onTestAnilibClick = async () => {
		const response = await axios.get("https://api.mangalib.me/api/episodes/54490");
		const link = response.data.data.players[1].video.quality[0].href;
		console.log(`https://video1.anilib.me/.%D0%B0s/${link}`);
		// https://video1.anilib.me/.%D0%B0s//uploads/converted_videos/anime/6515/players/33631/33631_360.mp4
		//video1.anilib.me/.as//uploads/converted_videos/anime/6515/players/33631/33631_360.mp4
		// my
		// https: //video1.anilib.me/.as//uploads/converted_videos/anime/6515/players/33631/33631_1080.mp4
		setLink(`https://video1.anilib.me/.%D0%B0s/${link}`);
	};

	if (!anime) return;
	return (
		<BottomSheet title="Watch" onOutsideClick={onOutsideClick}>
			<div className={styles.content}>
				<Button onClick={onTestAnilibClick}>TEst anilib</Button>
				{link !== "" && <video src={link} controls style={{ width: "100%" }} />}
				{isHentai ? (
					<Button onClick={onHentaiHavenClick} variant="nhentai">
						HentaiHaven
					</Button>
				) : (
					<Button onClick={onAnilibClick}>AniLib</Button>
				)}
			</div>
		</BottomSheet>
	);
};
