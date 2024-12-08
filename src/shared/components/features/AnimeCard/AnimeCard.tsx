import { IAnimeCard } from "@/shared/types/anime_card.interface.ts";
import { HorizontalAnimeCard } from "@features/AnimeCard/variants/HorizontalAnimeCard/HorizontalAnimeCard.tsx";
import type { FC, ReactNode } from "react";

interface IAnimeCardProps {
	variant?: "vertical" | "horizontal";
	anime: IAnimeCard;
	onClick?: () => void;
	testSlot?: ReactNode;
}

export const AnimeCard: FC<IAnimeCardProps> = ({ variant, anime, onClick, testSlot }) => {
	// const isMobile = useMediaQuery("only screen and (max-width: 768px)");
	// if (isMobile) {
	// 	variant = "horizontal";
	// }

	if (!anime) return "Laoding anime...";
	// TODO : refactoring animecards for slots. Card only html, css and slots (props).
	// TODO : variant = "vertical" | "horizontal" for news and posts from user
	if (variant === "horizontal")
		return <HorizontalAnimeCard anime={anime} onClick={onClick} testSlot={testSlot} />;

	// if (variant === "vertical" && userRateAnime) {
	// 	return <VerticalAnimeCard userRateAnime={userRateAnime} />;
	// }
};
