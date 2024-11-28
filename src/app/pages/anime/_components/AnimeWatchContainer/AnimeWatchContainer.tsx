import { IAnime } from "@/shared/services/anime/anime.interface.ts";
import { Button } from "@ui/Button/Button.tsx";
import { Divider } from "@ui/Divider/Divider.tsx";
import { FC, useState } from "react";
import styles from "./AnimeWatchContainer.module.scss";
import { BookmarkEditIcon } from "@/shared/icons/index.tsx";
import { BottomSheet } from "@ui/BottomSheet/BottomSheet.tsx";
import { Input } from "@ui/Input/Input.tsx";
import clsx from "clsx";
import { UserRateEditBottomSheet } from "@pages/anime/_components/AnimeWatchContainer/_components/UserRateEditBottomSheet/UserRateEditBottomSheet.tsx";
import { WatchBottomSheet } from "@pages/anime/_components/AnimeWatchContainer/_components/WatchBottomSheet/WatchBottomSheet.tsx";
import { AnimatePresence } from "framer-motion";
interface IWatchButtonProps {
	anime: IAnime | undefined;
}
export const AnimeWatchContainer: FC<IWatchButtonProps> = ({ anime }) => {
	const [userRateEditBottomSheetOpen, setUserRateEditBottomSheetOpen] = useState(false);
	const [watchBottomSheetOpen, setWatchBottomSheetOpen] = useState(false);

	// const {} = useUserRate(anime?.userRate.id);
	const onWatchButtonClick = () => {
		setWatchBottomSheetOpen((prev) => !prev);
	};

	const onUserRateEditClick = () => {
		setUserRateEditBottomSheetOpen((prev) => !prev);
	};

	if (!anime) return "Loading anime...";
	return (
		<div className={styles.anime_watch_container}>
			<Button className={styles.watch_button} variant="ternary" onClick={onWatchButtonClick}>
				Watch
			</Button>
			<Button
				className={clsx(styles.user_rate_edit, { [styles.empty]: !anime.userRate })}
				variant="ternary"
				onClick={onUserRateEditClick}
			>
				{!anime.userRate ? (
					<BookmarkEditIcon />
				) : (
					<div className={styles.user_rate_edit_content}>
						<BookmarkEditIcon />
						<span>{anime.userRate.episodes}</span>
						<Divider orientation="vertical" className={styles.divider} />
						<span>{anime.userRate.status}</span>
					</div>
				)}
			</Button>
			<AnimatePresence>
				{userRateEditBottomSheetOpen && (
					<UserRateEditBottomSheet anime={anime} onOutsideClick={onUserRateEditClick} />
				)}
				{watchBottomSheetOpen && (
					<WatchBottomSheet anime={anime} onOutsideClick={onWatchButtonClick} />
				)}
			</AnimatePresence>
		</div>
	);
};
