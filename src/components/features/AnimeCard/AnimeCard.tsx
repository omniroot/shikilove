import { ImageView } from "@ui/ImageView/ImageView";
import styles from "./AnimeCard.module.scss";

import type { FC } from "react";
import { Link } from "react-router-dom";

interface IAnimeCardProps {
	id?: string;
	title?: string;
	image?: string;
}
export const AnimeCard: FC<IAnimeCardProps> = ({ id, image, title }) => {
	return (
		<Link to={`/animes/${id}`} className={styles.anime_card} key={id}>
			<ImageView radius="1" src={image} width="100%" height="85%" alt={title} />
			<span className={styles.anime_title}>{title}</span>
		</Link>
	);
};
