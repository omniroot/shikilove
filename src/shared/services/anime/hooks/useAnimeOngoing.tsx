import { animeApi } from "@/shared/services/anime/anime.api.ts";
import { IAnime } from "@/shared/services/anime/anime.interface.ts";
import { useQuery } from "@tanstack/react-query";

export const useAnimeOngoings = () => {
	const {
		isFetching: isAnimeOngoingsLoading,
		data: animeOngoings,
		error: animeOngoingsError,
	} = useQuery<IAnime[]>({
		queryKey: ["getAnimeOngoings"],
		queryFn: animeApi.getAnimeOngoing,
	});

	return {
		isAnimeOngoingsLoading,
		animeOngoings,
		animeOngoingsError,
	};
};
