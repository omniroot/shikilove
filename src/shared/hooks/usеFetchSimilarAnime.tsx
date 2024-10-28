import { api } from "@/shared/services/api.ts";
import { useQuery } from "@tanstack/react-query";

export interface ISimilarAnime {
	id: string;
	name: string;
	russian: string;
	image: {
		original: string;
		preview: string;
		x96: string;
		x48: string;
	};
	url: string;
	kind: string;
	score: string;
	status: string;
	episodes: number;
	episodes_aired: number;
	aired_on: string;
	released_on: string;
}

type IResponse = ISimilarAnime[];

export const useFetchSimilarAnime = (animeId: string) => {
	const { isLoading, data, error } = useQuery<IResponse>({
		queryKey: ["similarAnime", animeId],
		queryFn: async () => {
			const _response = await api.get<IResponse>(`animes/${animeId}/similar`);
			return _response.data;
		},
	});

	if (!data) return { data, isLoading, error: error };

	return { similarAnimes: data };
};
