import { IAnimeCard } from "@/shared/types/anime_card.interface.ts";
import { HorizontalAnimeCard } from "@features/AnimeCard/variants/HorizontalAnimeCard/HorizontalAnimeCard.tsx";
import { useMediaQuery } from "@uidotdev/usehooks";
import type { FC } from "react";

interface IAnimeCardProps {
	variant?: "vertical" | "horizontal";
	anime: IAnimeCard;
}

export const AnimeCard: FC<IAnimeCardProps> = ({ variant, anime }) => {
	const isMobile = useMediaQuery("only screen and (max-width: 768px)");
	if (isMobile) {
		variant = "horizontal";
	}

	if (!anime) return "Laoding anime...";
	// TODO : refactoring animecards for slots. Card only html, css and slots (props).
	// TODO : variant = "vertical" | "horizontal" for news and posts from user
	if (variant === "horizontal") return <HorizontalAnimeCard anime={anime} />;

	// if (variant === "vertical" && userRateAnime) {
	// 	return <VerticalAnimeCard userRateAnime={userRateAnime} />;
	// }
};
