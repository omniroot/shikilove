import { Typography } from "@ui/Typography/Typography";
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
		<Link to={`/animes/${id}`} className={styles.animecard}>
			<img
				src={image}
				width="100%"
				height="85%"
				alt={title}
				style={{ borderRadius: "var(--radius)" }}
			/>
			<Typography
				width="fit-content"
				height="auto"
				size="4"
				weight="bold"
				clamp="2"
				textAlign="center"
			>
				{title}
			</Typography>
			{/* <Box
        // className={_class_hover_container}
        backgroundColor="secondary"
        padding="none"
      >
        <IconButton>
          <ProfileIcon />
        </IconButton>
      </Box> */}
		</Link>
	);
};
