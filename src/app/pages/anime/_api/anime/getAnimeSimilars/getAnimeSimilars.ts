import { ISimilarAnime } from "@/shared/services/anime/getAnimeSimilars/getAnimeSimilars.types.ts";
import { api } from "@/shared/services/api.ts";
import { useQuery, UseQueryOptions } from "@tanstack/react-query";
import { AxiosRequestConfig } from "axios";

interface IGetAnimeSimilars {
	animeId: string;
	config?: AxiosRequestConfig;
}

interface IUseGetAnimeSimilars {
	animeId: string;
	config?: UseQueryOptions<ISimilarAnime[]>;
}

export const getAnimeSimilars = ({ animeId }: IGetAnimeSimilars) => {
	return api.get<ISimilarAnime[]>(`animes/${animeId}/similar`);
};

export const useGetAnimeSimilars = ({ animeId, config }: IUseGetAnimeSimilars) => {
	return useQuery<ISimilarAnime[]>({
		queryKey: ["getAnimeSimilars", animeId],
		queryFn: async () => {
			const reponse = await getAnimeSimilars({ animeId });
			return reponse.data;
		},
		...config,
	});
};
