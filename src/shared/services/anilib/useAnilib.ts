import { useQuery } from "@tanstack/react-query";
import { anilibApi } from "./anilib.api.ts";

export const useAnilibGetAnimeByName = (name: string) => {
	const {
		data: anilibAnime,
		isLoading: anilibAnimeIsLoading,
		refetch: fetchAnilibAnime,
	} = useQuery({
		queryKey: ["anilib-get-anime-by-name", name],
		queryFn: () => anilibApi.getAnimeByName(name),
	});

	// 	const [anilibSearch, setAnilibSearch] = useState("");
	// 	const {
	// 		refetch: fetchAnilibAnime,
	// 		data: anilibAnime,
	// 		isFetching: anilibAnimeIsFetching,
	// 		error: anilibAnimeError,
	// 	} = useQuery({
	// 		queryKey: ["anilib-get-anime-by-name", anilibSearch],
	// 		queryFn: () => anilibApi.getAnimeByName(anilibSearch),
	// 		enabled: false,
	// 	});

	return {
		anilibAnime,
		anilibAnimeIsLoading,
		fetchAnilibAnime,
	};
};

export const useAnilibGetEpisodes = (slugUrl: string) => {
	const {
		refetch: fetchAnilibEpisodes,
		data: anilibEpisodes,
		isFetching: anilibEpisodesIsFetching,
		error: anilibEpisodesError,
	} = useQuery({
		queryKey: ["anilib-get-episodes", slugUrl],
		queryFn: () => anilibApi.getEpisodesById(slugUrl),
	});

	return {
		fetchAnilibEpisodes,
		anilibEpisodes,
		anilibEpisodesIsFetching,
		anilibEpisodesError,
	};
};

export const useAnilibGetVideo = (episode: number) => {
	const {
		refetch: fetchAnilibVideo,
		data: anilibVideo,
		isFetching: anilibVideoIsFetching,
		error: anilibVideoError,
	} = useQuery({
		queryKey: ["anilib-get-video", episode],
		queryFn: () => anilibApi.getVideosByEpisodeId(episode),
	});

	return {
		fetchAnilibVideo,
		anilibVideo,
		anilibVideoIsFetching,
		anilibVideoError,
	};
};
