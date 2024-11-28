import { animeApi } from "@/shared/services/anime/anime.api.ts";
import { ISimilarAnime } from "@/shared/services/anime/anime.interface.ts";
import { useQuery } from "@tanstack/react-query";

export const useSimilarAnimes = (animeId: string) => {
	const {
		isLoading: isSimilarAnimesLoading,
		data: similarAnimes,
		error: similarAnimesError,
	} = useQuery<ISimilarAnime[]>({
		queryKey: ["getSimilarAnime", animeId],
		queryFn: () => animeApi.getSimilarAnime({ animeId }),
	});

	return {
		isSimilarAnimesLoading,
		similarAnimes,
		similarAnimesError,
	};
};
