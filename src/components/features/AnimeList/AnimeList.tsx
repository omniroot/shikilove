import type { IUserRate } from "@/shared/hooks/useFetchUserRates";
import { css } from "@emotion/css";
import { AnimeCard } from "@features/AnimeCard/AnimeCard";
import { Box } from "@ui/Box/Box";
import type { FC } from "react";

interface IAnimeListProps {
	animes?: IUserRate[];
	variant?: "scroll" | "grid";
}
export const AnimeList: FC<IAnimeListProps> = ({
	variant = "scroll",
	animes,
	...rest
}) => {
	const _style = css`
    ${variant === "scroll" && `overflow-x: scroll;`}
  `;

	return (
		<Box
			width="100%"
			gap="1"
			border="none"
			padding="none"
			justifyContent="center"
			className={_style}
			{...rest}
		>
			{animes?.map((anime) => (
				<AnimeCard
					key={anime.id}
					id={anime.id}
					title={anime.anime.name}
					image={anime.anime.poster.main2xUrl}
				/>
			))}
		</Box>
	);
};
