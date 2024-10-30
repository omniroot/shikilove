import { FC } from "react";
import styles from "./VerticalAnimeCard.module.scss";
import { ImageView } from "@ui/ImageView/ImageView.tsx";
import { Link } from "react-router-dom";
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
	return (
		<Link to={`/animes/${id}`} className={styles.anime_card} key={id}>
			<div className={styles.info_container}>
				{!!userStatus && <span className={styles.user_status}>{userStatus}</span>}
				{!!userEpisodes && <span className={styles.user_episodes}>{userEpisodes}</span>}
			</div>
			<ImageView src={image} alt={title} className={styles.anime_image} />
			<span className={styles.anime_title}>{title}</span>
		</Link>
	);
};
