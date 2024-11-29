import { CONSTS } from "@/shared/consts/consts.ts";
import { animeApi } from "@/shared/services/anime/anime.api.ts";
import { IAnime } from "@/shared/services/anime/anime.interface.ts";
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

	return {
		isAnimeLoading,
		anime,
		animeError,
	};
};
