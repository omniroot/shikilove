import { BookmarkEditIcon } from "@/shared/icons/index.tsx";
import { UserRateEditBottomSheet } from "@pages/anime/_components/AnimeWatchContainer/_components/UserRateEditBottomSheet/UserRateEditBottomSheet.tsx";
// import { WatchBottomSheet } from "@pages/anime/_components/AnimeWatchContainer/_components/WatchBottomSheet/WatchBottomSheet.tsx";
import { Button } from "@ui/Button/Button.tsx";
import { Divider } from "@ui/Divider/Divider.tsx";
import clsx from "clsx";
import { AnimatePresence } from "motion/react";
import { FC, useState } from "react";
import styles from "./AnimeWatchContainer.module.scss";
import { HentaiBottomSheet } from "@pages/anime/_components/AnimeWatchContainer/_components/HentaiBottomSheet/HentaiBottomSheet.tsx";
import { BottomSheet } from "@ui/BottomSheet/BottomSheet.tsx";
import { IAnime } from "@pages/anime/_api/anime/anime.interface.ts";
interface IWatchButtonProps {
	anime: IAnime;
}
export const AnimeWatchContainer: FC<IWatchButtonProps> = ({ anime }) => {
	const [userRateEditBottomSheetOpen, setUserRateEditBottomSheetOpen] = useState(false);
	const [watchBottomSheetOpen, setWatchBottomSheetOpen] = useState(false);
	const isHentai = anime.genres.some((genre) => genre.name === "Hentai");

	const onWatchButtonClick = () => {
		setWatchBottomSheetOpen((prev) => !prev);
	};

	const onUserRateAddClick = () => {
		setUserRateEditBottomSheetOpen((prev) => !prev);
	};

	const onUserRateEditClick = () => {
		setUserRateEditBottomSheetOpen((prev) => !prev);
	};

	return (
		<div className={styles.anime_watch_container}>
			<Button className={styles.watch_button} variant="outline" onClick={onWatchButtonClick}>
				Watch
			</Button>
			{!anime.userRate ? (
				<Button
					variant="outline"
					onClick={onUserRateAddClick}
					className={clsx(styles.user_rate_edit, { [styles.empty]: !anime.userRate })}
				>
					<BookmarkEditIcon />
					<span>Add to</span>
				</Button>
			) : (
				<Button
					className={clsx(styles.user_rate_edit, { [styles.empty]: !anime.userRate })}
					variant="outline"
					onClick={onUserRateEditClick}
				>
					<div className={styles.user_rate_edit_content}>
						<BookmarkEditIcon />
						<span>{anime.userRate.episodes}</span>
						<Divider orientation="vertical" className={styles.divider} />
						<span>{anime.userRate.status}</span>
					</div>
				</Button>
			)}

			<AnimatePresence>
				{userRateEditBottomSheetOpen && (
					<UserRateEditBottomSheet anime={anime} onOutsideClick={onUserRateEditClick} />
				)}
				{watchBottomSheetOpen && (
					<>
						{isHentai ? (
							<HentaiBottomSheet anime={anime} onOutsideClick={onWatchButtonClick} />
						) : (
							<BottomSheet onOutsideClick={onWatchButtonClick}>
								<span>Animewatch player in refactoring...</span>
							</BottomSheet>
							// <WatchBottomSheet anime={anime} onOutsideClick={onWatchButtonClick} />
						)}
					</>
				)}
			</AnimatePresence>
		</div>
	);
};
