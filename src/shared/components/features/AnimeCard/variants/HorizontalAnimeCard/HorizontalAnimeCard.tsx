import { RightArrowIcon } from "@/shared/icons/index.tsx";
import { IAnimeCard } from "@/shared/types/anime_card.interface.ts";
import { HorizontalContextBottomSheet } from "@features/AnimeCard/variants/HorizontalAnimeCard/_components/HorizontalContextBottomSheet/HorizontalContextBottomSheet.tsx";
import { ImageView } from "@ui/ImageView/ImageView.tsx";
import { AnimatePresence, motion } from "motion/react";
import { FC, MouseEvent, ReactNode, useState } from "react";
import { Link } from "@tanstack/react-router";
import styles from "./HorizontalAnimeCard.module.scss";
import { parseShikimoriText } from "@/shared/utils/parseShikimoriText.ts";

interface IHorizontalAnimeCardProps {
	anime: IAnimeCard;
	onClick?: () => void;
	testSlot?: ReactNode;
}

export const HorizontalAnimeCard: FC<IHorizontalAnimeCardProps> = ({
	anime,
	onClick,
	testSlot,
}) => {
	const [contextMenuVisible, setContextMenuVisible] = useState(false);

	const toggleContextMenu = () => {
		setContextMenuVisible((prev) => !prev);
	};

	const onContextClick = (event: MouseEvent<HTMLDivElement>) => {
		event.preventDefault();
		event.stopPropagation();
		toggleContextMenu();
	};

	if (!anime) return;
	return (
		<motion.div
			initial={{ opacity: 0.9, scale: 0.9 }}
			whileInView={{ opacity: 1, scale: 1 }}
			transition={{ duration: 0.25 }}
			onContextMenu={onContextClick}
			onClick={onClick}
			className={styles.anime_card}
		>
			{anime.poster && (
				<ImageView
					src={anime.poster || ""}
					full={anime.poster || ""}
					alt="poster"
					className={styles.poster}
					allowFullscreen
				/>
			)}
			<Link
				to={`/animes/$animeId`}
				params={{ animeId: anime.id }}
				className={styles.info}
				viewTransition
			>
				{anime.name && <span className={styles.title}>{anime.name}</span>}
				{anime.description && (
					<span
						className={styles.description}
						dangerouslySetInnerHTML={{ __html: parseShikimoriText(anime.description) }}
					></span>
				)}
				{testSlot && testSlot}
				<div className={styles.line}>
					{anime.userRate?.status && (
						<>
							{anime.userRate?.status}
							<RightArrowIcon height={12} />
						</>
					)}
					<span className={styles.user_episodes}>
						{anime.userRate?.episodes && <>{anime.userRate?.episodes} /</>}
						{anime.episodes}
					</span>
				</div>
				{/* <div className={styles.bottominfo}>{anime.episodes}</div> */}
			</Link>

			<AnimatePresence>
				{contextMenuVisible && (
					<HorizontalContextBottomSheet anime={anime} onOutsideClick={toggleContextMenu} />
				)}
			</AnimatePresence>
		</motion.div>
	);
};
