import { FC, MouseEvent, useEffect, useState } from "react";
import styles from "./VerticalAnimeCard.module.scss";
import { ImageView } from "@ui/ImageView/ImageView.tsx";
import { Link } from "react-router-dom";
import { PlusIcon, RightArrowIcon, TrashIcon, WatchingIcon } from "@/shared/icons/index.tsx";
import { AnimatePresence, motion, PresenceContext } from "framer-motion";

interface IVerticalAnimeCardProps {
	id?: string;
	title?: string;
	image?: string;
	userStatus?: string | null;
	userEpisodes?: number | null;
}

export const VerticalAnimeCard: FC<IVerticalAnimeCardProps> = ({
	id,
	image,
	title,
	userEpisodes,
	userStatus,
}) => {
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
		console.log(`Add to ${id}`);
	};

	const onDeleteClick = () => {
		console.log(`Delete ${id}`);
	};
	const onWatchClick = () => {
		console.log(`Watch ${id}`);
	};

	return (
		<>
			<Link
				to={`/animes/${id}`}
				className={styles.anime_card}
				key={id}
				onContextMenu={onContextMenuClick}
			>
				<div className={styles.info_container}>
					{!!userStatus && <span className={styles.user_status}>{userStatus}</span>}
					{!!userEpisodes && <span className={styles.user_episodes}>{userEpisodes}</span>}
				</div>
				<ImageView src={image} alt={title} className={styles.anime_image} />
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
