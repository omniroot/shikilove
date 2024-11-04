import { IUserRate } from "@/shared/services/userRate/userRate.interface.ts";
import { HorizontalAnimeCard } from "@features/AnimeCard/variants/HorizontalAnimeCard/HorizontalAnimeCard.tsx";
import { VerticalAnimeCard } from "@features/AnimeCard/variants/VerticalAnimeCard/VerticalAnimeCard.tsx";
import { useMediaQuery } from "@uidotdev/usehooks";
import type { FC } from "react";

interface IAnimeCardProps {
	variant?: "vertical" | "horizontal";
	userRateAnime: IUserRate;
}
export const AnimeCard: FC<IAnimeCardProps> = ({
	variant = "vertical",
	userRateAnime,
	...rest
}) => {
	const isMobile = useMediaQuery("only screen and (max-width: 768px)");
	if (isMobile) {
		variant = "horizontal";
	}
	return variant === "vertical" ? (
		<VerticalAnimeCard {...rest} />
	) : (
		<HorizontalAnimeCard userRateAnime={userRateAnime} />
	);
};
