import { useExternalSites } from "@/shared/hooks/useExternalSites.tsx";
import { IAnime } from "@/shared/services/anime/anime.interface.ts";
import { BottomSheet } from "@ui/BottomSheet/BottomSheet.tsx";
import { Button } from "@ui/Button/Button.tsx";
import { FC } from "react";
import styles from "./HentaiBottomSheet.module.scss";
import { openAnimeExternal } from "@/shared/utils/openAnimeSites.ts";
interface IHentaiBottomSheetProps {
	anime: IAnime;
	onOutsideClick: () => void;
}
export const HentaiBottomSheet: FC<IHentaiBottomSheetProps> = ({ anime, onOutsideClick }) => {
	const { openHentaiHaven } = useExternalSites();

	const openGoogle = (langauge: "ru" | "en") => {
		window.open(
			`https://www.google.com/search?q=${anime.name} ${langauge === "ru" ? "хентай" : "hentai"}`,
			"_blank",
		);
	};

	return (
		<BottomSheet title="Hentai" onOutsideClick={onOutsideClick}>
			<div className={styles.content}>
				<Button onClick={() => openHentaiHaven(anime.name)}>HentaiHaven</Button>
				<Button onClick={() => openAnimeExternal(anime.name, "nhentai")} variant="nhentai">
					NHentai
				</Button>
				<Button onClick={() => openAnimeExternal(anime.name, "hanime")} variant="hanime">
					HAnime
				</Button>
				<Button onClick={() => openGoogle("ru")} variant="secondary">
					Russian Google
				</Button>
				<Button onClick={() => openGoogle("en")} variant="secondary">
					English Google
				</Button>
			</div>
		</BottomSheet>
	);
};
