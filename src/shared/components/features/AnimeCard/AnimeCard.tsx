import { IAnimeCard } from "@/shared/types/anime_card.interface.ts";
import { HorizontalAnimeCard } from "@features/AnimeCard/variants/HorizontalAnimeCard/HorizontalAnimeCard.tsx";
import { useMediaQuery } from "@uidotdev/usehooks";
import type { FC } from "react";

interface IAnimeCardProps {
	variant?: "vertical" | "horizontal";
	animeCard: IAnimeCard;
}

export const AnimeCard: FC<IAnimeCardProps> = ({ animeCard }) => {
	const isMobile = useMediaQuery("only screen and (max-width: 768px)");
	if (isMobile) {
		// variant = "horizontal";
	}
	return <HorizontalAnimeCard animeCard={animeCard} />;

	// if (variant === "vertical" && userRateAnime) {
	// 	return <VerticalAnimeCard userRateAnime={userRateAnime} />;
	// }
};
