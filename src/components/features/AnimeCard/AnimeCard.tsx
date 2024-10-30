import { HorizontalAnimeCard } from "@features/AnimeCard/variants/HorizontalAnimeCard/HorizontalAnimeCard.tsx";
import { VerticalAnimeCard } from "@features/AnimeCard/variants/VerticalAnimeCard/VerticalAnimeCard.tsx";
import { useMediaQuery } from "@uidotdev/usehooks";
import type { FC } from "react";

interface IAnimeCardProps {
	variant?: "vertical" | "horizontal";
	id?: string;
	title?: string;
	image?: string;
	userStatus?: string | null;
	userEpisodes?: number | null;
}
export const AnimeCard: FC<IAnimeCardProps> = ({ variant = "vertical", ...rest }) => {
	const isMobile = useMediaQuery("only screen and (max-width: 768px)");
	if (isMobile) {
		variant = "horizontal";
	}
	return variant === "vertical" ? (
		<VerticalAnimeCard {...rest} />
	) : (
		<HorizontalAnimeCard {...rest} />
	);
};
