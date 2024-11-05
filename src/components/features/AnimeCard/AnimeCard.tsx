import { IAnime, ISimilarAnime } from "@/shared/services/anime/anime.interface.ts";
import { IUserRate } from "@/shared/services/userRate/userRate.interface.ts";
import { HorizontalAnimeCard } from "@features/AnimeCard/variants/HorizontalAnimeCard/HorizontalAnimeCard.tsx";
import { SearchAnimeCard } from "@features/AnimeCard/variants/SearchAnimeCard/SearchAnimeCard.tsx";
import { SimilarAnimeCard } from "@features/AnimeCard/variants/SimilarAnimeCard/SimilarAnimeCard.tsx";
import { VerticalAnimeCard } from "@features/AnimeCard/variants/VerticalAnimeCard/VerticalAnimeCard.tsx";
import { useMediaQuery } from "@uidotdev/usehooks";
import type { FC } from "react";

interface IAnimeCardProps {
	variant?: "vertical" | "horizontal" | "similar" | "search";
	userRateAnime?: IUserRate;
	similarAnime?: ISimilarAnime;
	searchAnime?: IAnime;
}

export const AnimeCard: FC<IAnimeCardProps> = ({
	variant = "vertical",
	userRateAnime,
	similarAnime,
	searchAnime,
}) => {
	const isMobile = useMediaQuery("only screen and (max-width: 768px)");
	if (isMobile) {
		variant = "horizontal";
	}

	if (variant === "similar" && similarAnime) {
		return <SimilarAnimeCard similarAnime={similarAnime} />;
	}

	if (variant === "vertical" && userRateAnime) {
		return <VerticalAnimeCard userRateAnime={userRateAnime} />;
	}

	if (variant === "horizontal" && userRateAnime) {
		return <HorizontalAnimeCard userRateAnime={userRateAnime} />;
	}

	if (variant === "search" && searchAnime) {
		return <SearchAnimeCard animeSearch={searchAnime} />;
	}
};
