import { Box } from "@ui/Box/Box";
import { Typography } from "@ui/Typography/Typography";
import type { FC } from "react";
import { Link } from "react-router-dom";

interface IAnimeCardProps {
	id?: string;
	title?: string;
	image?: string;
}
export const AnimeCard: FC<IAnimeCardProps> = ({ id, image, title }) => {
	const _onAnimeCardClick = () => {};
	const _aa = 11;

	return (
		<Box
			width="250px"
			height="380px"
			flexDirection="column"
			alignItems="center"
			clickable
			radius="1"
			as={Link}
			to={`/animes/${id}`}
		>
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
		</Box>
	);
};
