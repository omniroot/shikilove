import { animeApi } from "@/shared/services/anime/anime.api.ts";
import { IAnime } from "@/shared/services/anime/anime.interface.ts";
import { useQuery } from "@tanstack/react-query";

export const useAnimeLatests = () => {
	const {
		isFetching: isAnimeLatestsLoading,
		data: animeLatests,
		error: animeLatestsError,
	} = useQuery<IAnime[]>({
		queryKey: ["getAnimeLatests"],
		queryFn: animeApi.getAnimeLatests,
	});

	return {
		isAnimeLatestsLoading,
		animeLatests,
		animeLatestsError,
	};
};
