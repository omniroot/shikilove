import { animeApi } from "@/shared/services/anime/anime.api.ts";
import { IAnime, ISimilarAnime } from "@/shared/services/anime/anime.interface.ts";
import { useQuery } from "@tanstack/react-query";

export const useAnime = (animeId: string) => {
	const {
		isLoading: isAnimeLoading,
		data: anime,
		error: animeError,
	} = useQuery<IAnime>({
		queryKey: ["getAnime", animeId],
		queryFn: () => animeApi.getAnime({ animeId }),
	});

	const {
		isLoading: isSimilarAnimesLoading,
		data: similarAnimes,
		error: similarAnimesError,
	} = useQuery<ISimilarAnime[]>({
		queryKey: ["getSimilarAnime", animeId],
		queryFn: () => animeApi.getSimilarAnime({ animeId }),
	});

	return {
		isAnimeLoading,
		anime,
		animeError,
		isSimilarAnimesLoading,
		similarAnimes,
		similarAnimesError,
	};
};
