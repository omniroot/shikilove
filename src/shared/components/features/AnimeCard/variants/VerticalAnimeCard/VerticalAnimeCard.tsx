import { FC, MouseEvent, useEffect, useState } from "react";
import styles from "./VerticalAnimeCard.module.scss";
import { ImageView } from "@ui/ImageView/ImageView.tsx";
import { Link } from "react-router-dom";
import { PlusIcon, RightArrowIcon, TrashIcon, WatchingIcon } from "@/shared/icons/index.tsx";
import { motion } from "framer-motion";
import { IUserRate } from "@/shared/services/userRate/userRate.interface.ts";
import { title } from "process";

interface IVerticalAnimeCardProps {
	userRateAnime: IUserRate;
}

export const VerticalAnimeCard: FC<IVerticalAnimeCardProps> = ({ userRateAnime }) => {
	const [contextMenuVisible, setContextMenuVisible] = useState(false);
	const [contextMenuСoordinates, setСontextMenuСoordinates] = useState([0, 0]);

	const onContextMenuClick = (event: MouseEvent<HTMLAnchorElement>) => {
		event.preventDefault();
		event.stopPropagation();
		console.log([event.clientX, event.clientY]);

		setСontextMenuСoordinates([event.clientX, event.clientY]);
		setContextMenuVisible(true);
	};

	useEffect(() => {
		const outsideClickEvent = () => {
			setContextMenuVisible(false);
		};

		const escapeClickEvent = (event: KeyboardEvent) => {
			if (event.key === "Escape") {
				setContextMenuVisible(false);
			}
		};

		if (contextMenuVisible) {
			document.addEventListener("click", outsideClickEvent);
			document.addEventListener("keydown", escapeClickEvent);
			return () => {
				document.removeEventListener("click", outsideClickEvent);
				document.removeEventListener("keydown", escapeClickEvent);
			};
		}
	}, [contextMenuVisible]);

	const onAddToClick = () => {
		// console.log(`Add to ${id}`);
	};

	const onDeleteClick = () => {
		// console.log(`Delete ${id}`);
	};
	const onWatchClick = () => {
		// console.log(`Watch ${id}`);
	};

	return (
		<>
			<Link
				to={`/animes/${userRateAnime.anime.id}`}
				className={styles.anime_card}
				key={userRateAnime.id}
				onContextMenu={onContextMenuClick}
			>
				<div className={styles.info_container}>
					{!!userRateAnime.status && (
						<span className={styles.user_status}>{userRateAnime.status}</span>
					)}
					{!!userRateAnime.episodes && (
						<span className={styles.user_episodes}>{userRateAnime.episodes}</span>
					)}
				</div>
				<ImageView
					src={userRateAnime.anime.poster.main2xUrl}
					alt={title}
					className={styles.anime_image}
				/>
				<span className={styles.anime_title}>{title}</span>
			</Link>

			<motion.ul
				className={styles.context_menu}
				style={{ left: contextMenuСoordinates[0], top: contextMenuСoordinates[1] }}
				initial={{ scale: 0.8, opacity: 0.8, visibility: "hidden" }}
				animate={
					contextMenuVisible
						? { scale: 1, opacity: 1, visibility: "visible" }
						: { opacity: 0, scale: 1, visibility: "hidden" }
				}
				transition={{ duration: 0.15 }}
			>
				<span>
					<center>WIP</center>
				</span>
				<li onClick={onAddToClick}>
					<div className={styles.label}>
						<PlusIcon />
						Add to
					</div>
					<RightArrowIcon width={16} height={16} />
				</li>
				<li onClick={onDeleteClick}>
					<div className={styles.label}>
						<TrashIcon width={16} height={16} />
						Delete
					</div>
				</li>
				<li onClick={onWatchClick}>
					<div className={styles.label}>
						<WatchingIcon width={16} height={16} />
						Watch
					</div>
				</li>
			</motion.ul>
		</>
	);
};
