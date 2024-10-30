import { FC } from "react";
import styles from "./HorizontalAnimeCard.module.scss";
import { ImageView } from "@ui/ImageView/ImageView.tsx";
import { Link } from "react-router-dom";
interface IHorizontalAnimeCardProps {
	id?: string;
	title?: string;
	image?: string;
	userStatus?: string | null;
	userEpisodes?: number | null;
}

export const HorizontalAnimeCard: FC<IHorizontalAnimeCardProps> = ({
	id,
	image,
	title,
	userEpisodes,
	userStatus,
}) => {
	return (
		<Link to={`/animes/${id}`} className={styles.anime_card} key={id}>
			<ImageView src={image} alt={title} className={styles.anime_image} />
			<div className={styles.info_container}>
				<span className={styles.anime_title}>{title}</span>
				<div className={styles.subinfo_container}>
					<span className={styles.user_status}>{userStatus}</span>
					<span className={styles.user_episodes}>{userEpisodes}</span>
				</div>
			</div>
		</Link>
	);
};
