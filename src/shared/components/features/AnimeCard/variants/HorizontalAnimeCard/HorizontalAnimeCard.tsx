import { RightArrowIcon } from "@/shared/icons/index.tsx";
import { IAnimeCard } from "@/shared/types/anime_card.interface.ts";
import { HorizontalContextBottomSheet } from "@features/AnimeCard/variants/HorizontalAnimeCard/_components/HorizontalContextBottomSheet/HorizontalContextBottomSheet.tsx";
import { ImageView } from "@ui/ImageView/ImageView.tsx";
import { AnimatePresence, motion } from "motion/react";
import { FC, MouseEvent, useState } from "react";
import { Link } from "react-router-dom";
import styles from "./HorizontalAnimeCard.module.scss";

interface IHorizontalAnimeCardProps {
	anime: IAnimeCard;
}

export const HorizontalAnimeCard: FC<IHorizontalAnimeCardProps> = ({ anime }) => {
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
			className={styles.anime_card}
		>
			<ImageView
				src={anime.poster}
				full={anime.poster}
				alt="poster"
				className={styles.poster}
				allowFullscreen
			/>
			<Link to={`/animes/${anime.id}`} className={styles.info} viewTransition>
				<span className={styles.title}>{anime.name}</span>
				<div className={styles.line}>
					{anime.userRate?.status}
					<RightArrowIcon height={12} />
					<span className={styles.user_episodes}>
						{anime.userRate?.episodes} /{anime.episodes}
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
