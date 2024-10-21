import { useFetchAnimeById } from "@/shared/hooks/useFetchAnimeById";
import { openAnimeExternal } from "@/shared/utils/openAnimeSites";
import { AnimeInfoSection } from "@features/AnimeInfoSection/AnimeInfoSection";
import { Button } from "@ui/Button/Button";
import { useParams } from "react-router-dom";
import styles from "./AnimeWatch.module.scss";

export const AnimeWatch = () => {
	const { animeId } = useParams();

	const { anime } = useFetchAnimeById(animeId || "1");
	const onAnimegoButtonClick = () => {
		if (anime?.russian) openAnimeExternal(anime.russian, "animego");
	};

	const onHAnimeButtonClick = () => {
		if (anime?.name) openAnimeExternal(anime.name, "hanime");
	};

	const onNHentaiButtonClick = () => {
		if (anime?.name) openAnimeExternal(anime.name, "nhentai");
	};

	return (
		<AnimeInfoSection title="Watch">
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
		</AnimeInfoSection>
	);
};
